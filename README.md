# TW5-T-G-O

tiddlywiki deploy GitHub pages

可修改的配置文件：build-wiki.mjs、build.js、package.json、gh-pages.yml。  tiddlywiki.info、.gitignore

两种构建方式：
1. zx：build-wiki.mjs
2. js：build.js

仅当添加修改条目、插件以及package.json文件时更新GitHub Pages。

使用NodeJS版TiddlyWiki的`HTML转文件夹`命令转换单文件wiki后，覆盖tiddlers，plugins文件夹

设置GitHub pages，点击仓库设置（页面上面code按钮最右边的settings按钮），然后点击pages。然后找到Build and deployment的Source设置为Actions。
![image](https://user-images.githubusercontent.com/32425955/211513957-2e679998-6035-4904-9c0e-58fab7963b05.png)


设置显示图片：tiddlers/`$:/GitHub/Repo` 条目内容修改为：Zacharia2(用户名)/TW5-T-ONLINE(现在使用的WIKI仓库)

其它：https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀
