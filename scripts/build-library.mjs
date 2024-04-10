import { fs, $ } from 'zx';
import path from 'path';

/** 项目路径 */
const repoFolder = path.join(path.dirname(__filename), '..');
const distDir = path.join(repoFolder, 'public-dist/library');


/** 设置环境变量，TW会同时在自己的源码路径以及环境变量定义的路径中寻找插件、主题和语言
 *  如果不这样写，plugins、themes、languages和editions里的内容就无法被加载
 */
process.env.TIDDLYWIKI_PLUGIN_PATH = `${repoFolder}/plugins`;
process.env.TIDDLYWIKI_THEME_PATH = `${repoFolder}/themes`;
process.env.TIDDLYWIKI_LANGUAGE_PATH = `${repoFolder}/languages`;
process.env.TIDDLYWIKI_EDITION_PATH = `${repoFolder}/editions`;


const minify = true;
// const pluginFilter = '[prefix[$:/plugins/]!prefix[$:/plugins/tiddlywiki/]!prefix[$:/languages/]!prefix[$:/themes/tiddlywiki/]!tag[$:/tags/PluginLibrary]]';
const pluginFilter = '[prefix[$:/]!prefix[$:/plugins/tiddlywiki/]!prefix[$:/themes/tiddlywiki/]!prefix[$:/languages/]!tag[$:/tags/PluginLibrary]!prefix[$:/plugins/kookma]]';

await $`npx tiddlywiki . \\
        --output ${distDir} \\
        --makelibrary $:/UpgradeLibrary \\
        --savelibrarytiddlers $:/UpgradeLibrary ${pluginFilter} recipes/library/tiddlers/ $:/UpgradeLibrary/List \\
        --savetiddler $:/UpgradeLibrary/List recipes/library/tiddlers.json \\
        --rendertiddler $:/plugins/tiddlywiki/pluginlibrary/library.template.html index-raw.html text/plain \\
        --deletetiddlers \'[[$:/UpgradeLibrary]] [[$:/UpgradeLibrary/List]]\' \\
`, { env: { TIDDLYWIKI_PLUGIN_PATH: path.resolve(distDir, '..', 'plugins') } };

// 最小化：HTML
if (minify) {
    await $`npx html-minifier-terser -c scripts/html-minifier-terser.config.json -o ${distDir}/index.html ${distDir}/index-raw.html && rm ${distDir}/index-raw.html`;
} else {
    await $`mv ${distDir}/index-raw.html ${distDir}/${htmlName}`;
}