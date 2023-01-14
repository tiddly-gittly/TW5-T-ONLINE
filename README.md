# TW5-T-G-O

tiddlywiki deploy GitHub pages

## 使用
1. 点击`Use this template`创建属于你的仓库。
2. 克隆你的仓库到本地。
3. 使用NodeJS版TiddlyWiki的`HTML转文件夹`命令生成wiki文件夹后，覆盖克隆后的tiddlers，plugins文件夹。用TidGi转换HTMLWiki也可以。

4. 设置GitHub pages，点击仓库设置（页面上面code按钮最右边的settings按钮），然后点击pages。然后找到Build and deployment的Source设置为Actions。
![image](https://user-images.githubusercontent.com/32425955/211513957-2e679998-6035-4904-9c0e-58fab7963b05.png)

5. 设置显示图片：tiddlers/`$:/GitHub/Repo` 条目内容修改为：Zacharia2(用户名)/TW5-T-ONLINE(现在使用的WIKI仓库)


## 维护
可修改的配置文件：build-wiki.mjs、build.js、package.json、gh-pages.yml。  tiddlywiki.info、.gitignore

两种构建方式：
1. zx：build-wiki.mjs
2. js：build.js（默认）

（已关闭此功能）仅当添加修改条目、插件以及package.json文件时触发actions更新GitHub Pages。

其它：https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀
