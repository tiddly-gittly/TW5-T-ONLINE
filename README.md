# TW5-T-G-O

tiddlywiki deploy GitHub pages

> 此仓库模仿太微中文和太记知识模板，是为了快速在github上部署静态tiddlywiki页面。

仅需三步：一、放置tw数据，二、配置必要设置、三、启用action。然后就可以正常使用了。

- 效果预览链接：https://tiddly-gittly.github.io/TW5-T-ONLINE/
- 可离线版本链接：https://tiddly-gittly.github.io/TW5-T-ONLINE/offline.html 

> 仅需在你的TiddlyWiki链接末尾加上offline.html即可访问可离线使用的TW。如上可离线版本链接示例所示。

## 开始使用
1. 点击`Use this template`创建属于你的仓库。
2. 克隆你的仓库到本地。
3. 使用已有的文件夹wiki中的数据（tiddlers与plugins文件夹）覆盖克隆到本地后的tiddlers，plugins文件夹。（仅需要覆盖这两个文件夹即可，如果你有自定义的文件路径可以照搬过来就是。）
4. 设置Github图片仓库位置路径：找到条目：tiddlers/`$:/GitHub/Repo` ，条目内容修改为：Zacharia2(用户名)/TW5-T-ONLINE(现在使用的WIKI仓库)
5. 提交更改并推送到github仓库。
6. 设置GitHub pages，点击仓库设置（页面上面code按钮最右边的settings按钮），然后点击pages。然后找到Build and deployment的Source设置为Actions。
![image](https://user-images.githubusercontent.com/32425955/211513957-2e679998-6035-4904-9c0e-58fab7963b05.png)
7. 等待actions执行完成。你可以在（setting）仓库设置-Pages中找到生成的链接


- HTML-Wiki转Folder-Wiki的方法：
    1. 用TidGi转换HTMLWiki，找到转换后的wiki文件夹。
    2. 使用NodeJS版TiddlyWiki的`HTML转文件夹`命令生成wiki文件夹。
    3. 直接使用TidGi创建。


**注意：** 在 v0.7.15-prerelease 太记 版本中，导入Wiki.HTML功能可以完美转换，其原理是使用NodeJS-TW的`savewikifolder`命令，但由于太记对于插件的升级策略（[参见 issue #324](https://github.com/tiddly-gittly/TidGi-Desktop/issues/324)）与现有的NodeJS-TW插件升级策略不一致，所以太记暂时不支持`使用导入Wiki.HTML功能`后的Wiki的插件升级。如果要升级可以有两种选项，使用NodeJS启动TW进行升级，另一种是使用quicker脚本批量移动插件以适配太记的插件升级策略后使用太记升级。

## 介绍配置文件

| 配置文件                                 | 描述                                   |
| ---------------------------------------- | -------------------------------------- |
| package.json                             | 项目或模块描述文件                     |
| tiddlywiki.info                          | TiddlyWiki 的配置文件                  |
| .github\workflows\deploy.yaml            | Github-Action配置文件                  |
| .gitignore                               | Git指定忽略项的配置文件                |
| public\service-worker.js                 | 缓存策略配置文件                       |
| tiddlers\$__GitHub_Repo.tid              | Github仓库资源与图像的仓库路径配置文件 |
| scripts\html-minifier-terser.config.json | HTML 缩小器配置文件                    |
| scripts\build.js                         | js                                     |
| scripts\build-wiki.mjs                   | zx                                     |


## 维护说明与记录
> 可修改的配置文件：build-wiki.mjs、build.js、package.json、deploy.yaml、tiddlywiki.info、.gitignore、service-worker.js  
> 其它：`https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀`

两种构建方式：
1. js：scripts\build.js（默认构建方式）
2. zx：scripts\build-wiki.mjs

> （已关闭此功能）仅当添加修改条目、插件以及package.json文件时触发actions更新GitHub Pages。
> 
> （已启用此功能）缓存策略 public\service-worker.js 配置中 index.html 的 NetworkFirst（网络优先）策略。

