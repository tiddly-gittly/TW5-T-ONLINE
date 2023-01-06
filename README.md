# TW5-T-G-O

tiddlywiki deploy GitHub pages

可修改的配置文件：build-wiki.mjs、build.js、package.json、gh-pages.yml。  tiddlywiki.info、.gitignore

两种构建方式：
1. zx：build-wiki.mjs
2. js：build.js

仅当添加修改条目、插件以及package.json文件时更新GitHub Pages。

使用NodeJS版TiddlyWiki的`HTML转文件夹`命令转换单文件wiki后，覆盖tiddlers，plugins文件夹，GitHub 页面设置为Actions。

设置显示图片：tiddlers/`$:/GitHub/Repo` 条目内容修改为：Zacharia2(用户名)/TW5-T-ONLINE(现在使用的WIKI仓库)

其它：https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀
