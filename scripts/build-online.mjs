import { fs, $ } from 'zx';
import path from 'path';

/** 项目路径 */
const repoFolder = path.join(path.dirname(__filename), '..');
const distDir = path.join(repoFolder, 'public-dist');
async function getVersion() {
    const versionOutput = await $`npx tiddlywiki . --version`;
    const versionRegex = /^[0-9]+\.[0-9]+\.[0-9]+/;
    const match = versionOutput.stdout.match(versionRegex);

    if (match) {
        const version = match[0];
        return version
    } else {
        throw new Error('无法解析版本号');
    }
}
const tw_Version = await getVersion()
/** 设置环境变量，TW会同时在自己的源码路径以及环境变量定义的路径中寻找插件、主题和语言
 *  如果不这样写，plugins、themes、languages和editions里的内容就无法被加载
 */
process.env.TIDDLYWIKI_PLUGIN_PATH = `${repoFolder}/plugins`;
process.env.TIDDLYWIKI_THEME_PATH = `${repoFolder}/themes`;
process.env.TIDDLYWIKI_LANGUAGE_PATH = `${repoFolder}/languages`;
process.env.TIDDLYWIKI_EDITION_PATH = `${repoFolder}/editions`;

const htmlName = 'index.html';
const minify = true;
const excludeFilter = '-[is[draft]]';

// 清空生成目标
await $`rm -rf ${distDir}`;

// 静态资源拷贝
await $`cp -r public/ ${distDir} &> /dev/null`;
await $`cp tiddlers/favicon.ico ${distDir}/favicon.ico &> /dev/null`;
await $`cp vercel.json ${distDir}/vercel.json &> /dev/null`;

// 备份
await $`cp -r tiddlers/ backup &> /dev/null`;

// 构建HTML
await $`npx tiddlywiki . \\
    --output ${distDir} \\
    --build deletetiddlers externalimages externaltext externaljs \\
    --render $:/core/save/offline-external-js index-raw.html text/plain "" publishFilter ${excludeFilter} \\
`;

// 恢复
await $`rm -rf ${repoFolder}/tiddlers &> /dev/null`;
await $`mv ${repoFolder}/backup ${repoFolder}/tiddlers &> /dev/null`; 

// 最小化：核心JS和HTML
// 最小化：核心JS和HTML
const o_tw_core = `${distDir}/tiddlywikicore.js`;
const r_tw_core = `${distDir}/tiddlywikicore-${tw_Version}.js`;
if (minify) {
    await $`npx uglifyjs ${o_tw_core} -c -m --v8 --webkit --ie --output ${r_tw_core}`;
    await $`rm ${o_tw_core}`;
    await $`npx html-minifier-terser -c scripts/html-minifier-terser.config.json -o ${distDir}/${htmlName} ${distDir}/index-raw.html`;
    await $`rm ${distDir}/index-raw.html`;
} else {
    await $`mv ${o_tw_core} ${r_tw_core}`;
    await $`mv ${distDir}/index-raw.html ${distDir}/${htmlName}`;
}