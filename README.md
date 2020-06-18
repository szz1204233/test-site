# 班级门户示例 帮助文档

[![](https://img.shields.io/badge/project-v1.0.0-green.svg)](https://github.com/szz1204233/gridsome-test-site)
[![](https://img.shields.io/badge/readme-v0.1.0-blue.svg)](https://github.com/szz1204233/gridsome-test-site/blob/master/README.md)

## 目录

- 简介
- 网站功能
- 整体架构
- 开发及使用注意事项
- 参考文档及开源仓库

## 简介

本项目为一个针对班级展示需求而设计的示例网站，主要用于展示项目小组的进度、成果和文档。

## 网站功能

展示一个项目驱动班级的信息

- 班级详情：关于班级
- 小组详情：某个小组的信息，包括项目进度、成员
  - 成员信息：展示小组成员，包括已经结束课程的同学
  - 任务进度：展示小组的进度，以及每个成员的任务和完成情况（开发中）
  - 疑问解答：展示小组成员提出的问题并跳转至外部网站进行交流
  - 文档浏览：浏览此小组成员的文档
- 项目展示：通过文档、PPT 以及其他基于 Web 的方式（跳转外部链接）的方式展示某个项目

## 整体架构

班级门户采取前后端分离的设计思路，依托各种平台，尽可能以接口形式实现网站的各种功能。

1. 使用 gridsome 框架实现数据与内容聚合
2. 使用博客 RSS 服务展示成员学习动态
3. 使用语雀文档解决其他未尽事项
4. 使用云文档作为表单输入的解决方案（开发中）

## 开发及使用注意事项

1. gridsome 的安装  
   安装好环境是开发成功的第一步。在使用 gridsome 官方教程安装框架时，不考虑网络因素的前提下，安装进程可能会卡在如下几个包的下载阶段，此时可考虑将对应文件下载至本地后重新执行 npm 命令。

- [sharp](https://wws.lanzous.com/ieqgidsiicj)（蓝奏云）

  - [github releases](https://github.com/lovell/sharp/releases)

- [pngquant-bin](https://wws.lanzous.com/iFHnwdsihpg)（蓝奏云）

  - [github releases](https://github.com/imagemin/pngquant-bin/releases)

  执行`gridsome`命令后，命令行输出`Commands:`且其中包括`develop`、`build`等命令说明框架安装成功。

2. 使用  
   为使用项目的成员列表功能，请在`/src`下新建文件夹`/data`，并于其中新建`members.json`（相关配置可在根目录下的`gridsome.server.js`中找到），其内容为：

```json
{
    {
        "name": "",
        "project": "",
        "githubUsername": "",
        "gender": "",
        "studentID": "",
        "grade": "",
        "blogRSS": "",
        "blog": ""
    },
    {
        "name": "",
        "project": "",
        "githubUsername": "",
        "gender": "",
        "studentID": "",
        "grade": "",
        "blogRSS": "",
        "blog": ""
    }
}
```

## 参考文档及开源仓库

- [vue.js 官网](https://cn.vuejs.org/)
- [gridsome 官网](https://www.gridsome.cn/)
- [样式提供网站](https://buefy.org/)

* [GitHub 仓库](https://github.com/szz1204233/gridsome-test-site)
* [gitee 仓库（备用）](https://gitee.com/szz1204/gridsome-test-site-gitee)
