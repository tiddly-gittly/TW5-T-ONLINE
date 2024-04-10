# TW5-T-G-O

tiddlywiki deploy GitHub pages

> 此仓库模仿太微中文和太记知识模板，是为了快速在github上部署静态tiddlywiki页面。

仅需三步：一、启用Actions，二、放置tw数据、三、配置必要设置。然后就可以正常使用了。

- 效果预览链接：https://tiddly-gittly.github.io/TW5-T-ONLINE/
- 可离线版本链接：https://tiddly-gittly.github.io/TW5-T-ONLINE/offline.html 

> 仅需在你的TiddlyWiki链接末尾加上offline.html即可访问可离线使用的TW。如上可离线版本链接示例所示。

## 开始使用
1. 点击`Use this template`创建属于你的仓库。
2. 设置GitHub pages 启用 Actions：点击仓库设置（页面上面code按钮最右边的settings按钮），然后点击pages。然后找到Build and deployment的Source设置为Actions。
![image](https://user-images.githubusercontent.com/32425955/211513957-2e679998-6035-4904-9c0e-58fab7963b05.png)
3. 克隆你的仓库到本地。
4. 使用已有的文件夹wiki中的数据（tiddlers文件夹）覆盖克隆到本地后的tiddlers文件夹。（仅需要覆盖这个文件夹即可，如果你有自定义的文件路径可以照搬过来就是。）
5. 设置Github图片仓库位置路径：找到条目：tiddlers/mConfigs/`$__GitHub_Repo.tid` ，条目内容修改为：tiddly-gittly(用户名)/TW5-T-ONLINE(现在使用的WIKI仓库)。或者也可以用TidGi或NodeJS TW打开这个wiki，并在“控制台-设置- GithubPagesImage”中设置。
6. 提交更改并推送到github仓库。
7. 等待actions执行完成。你可以在（setting）仓库设置-Pages中找到生成的链接。


- HTML-Wiki转Folder-Wiki的方法：
    1. 用TidGi导入WIKI.HTML功能转换HTMLWiki，找到转换后的wiki文件夹（仅适用于TidGi > v0.8.0版本）。
    2. 使用NodeJS版tiddlywiki，输入`tiddlywiki --load ./mywiki.html --savewikifolder ./mywikifolder explodePlugins=no`命令转换。


## 介绍配置文件

| 配置文件                                 | 描述                                   |
| ---------------------------------------- | -------------------------------------- |
| package.json                             | 项目或模块描述文件                     |
| tiddlywiki.info                          | TiddlyWiki 的配置文件                  |
| tiddlers\mConfigs\\$__GitHub_Repo.tid    | Github仓库资源与图像的仓库路径配置文件 |
| .github\workflows\deploy.yaml            | Github-Action配置文件                  |
| .gitignore                               | Git指定忽略项的配置文件                |
| public\service-worker.js                 | 缓存策略配置文件                       |
| scripts\html-minifier-terser.config.json | HTML 缩小器配置文件                    |
| scripts\build.js                         | js                                     |
| scripts\build-wiki.mjs                   | zx                                     |


## 维护说明与记录
> 可修改的配置文件：build.js、package.json、deploy.yaml、tiddlywiki.info、build-wiki.mjs、.gitignore、service-worker.js  
> 其它：`https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀`

两种构建方式：
1. js：scripts\build.js（默认构建方式）
2. zx：scripts\build-wiki.mjs

> （已关闭此功能）仅当添加修改条目、插件以及package.json文件时触发actions更新GitHub Pages。
> 
> （已启用此功能）缓存策略 public\service-worker.js 配置中 index.html 的 StaleWhileRevalidate 策略。

## 其它

Shx 是一个包装 ShellJS Unix 命令的包装器，为 npm 包脚本中简单的类 Unix 跨平台命令提供了一个简单的解决方案

Google的zx库 可以帮助我们更加高效地用Nodejs写shell 脚本。