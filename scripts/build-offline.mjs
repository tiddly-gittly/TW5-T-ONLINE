import { fs, $ } from 'zx';
import path from 'path';

/** 项目路径 */
const repoFolder = path.join(path.dirname(__filename), '..');
const distDir = path.join(repoFolder, 'public-dist');

/** 设置环境变量，TW会同时在自己的源码路径以及环境变量定义的路径中寻找插件、主题和语言
 *  如果不这样写，plugins、themes、languages和editions里的内容就无法被加载
 */
process.env.TIDDLYWIKI_PLUGIN_PATH = `${repoFolder}/plugins`;
process.env.TIDDLYWIKI_THEME_PATH = `${repoFolder}/themes`;
process.env.TIDDLYWIKI_LANGUAGE_PATH = `${repoFolder}/languages`;
process.env.TIDDLYWIKI_EDITION_PATH = `${repoFolder}/editions`;

const htmlName = 'offline.html';
const minify = true;
const excludeFilter = '-[is[draft]]';


// 构建HTML
await $`npx tiddlywiki . --output ${distDir} --build deletetiddlers \\
    --rendertiddler $:/core/save/all index-raw.html text/plain "" publishFilter ${excludeFilter}`;

// 最小化：HTML
if (minify) {
    await $`npx html-minifier-terser -c scripts/html-minifier-terser.config.json -o ${distDir}/${htmlName} ${distDir}/index-raw.html && rm ${distDir}/index-raw.html`;
} else {
    await $`mv ${distDir}/index-raw.html ${distDir}/${htmlName}`;
}
