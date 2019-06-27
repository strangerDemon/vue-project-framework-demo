# vue-project-framework-demo
create a demo of vue-project
之前的程序结构太乱，整理清晰结构

> vue framework demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 目录结构

├── README.md                       项目介绍
|
├── index.html                      入口页面
|
├── build                           构建脚本目录
|   |
│   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
|   |
│   ├── build.js                        生产环境构建脚本
|   |
│   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
|   |
│   ├── dev-server.js                   运行本地开发服务器
|   |
│   ├── utils.js                        构建相关工具方法
|   |
│   ├── webpack.base.conf.js            wabpack基础配置
|   |
│   ├── webpack.dev.conf.js             wabpack开发环境配置
|   |
│   └── webpack.prod.conf.js            wabpack生产环境配置
|
├── config                          项目配置
|   |
│   ├── dev.env.js                      开发环境变量
|   |
│   ├── index.js                        项目配置文件 端口号配置
|   |
│   ├── prod.env.js                     生产环境变量
|
├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
|
├── src                             源码目录
|   |
│   ├── main.js                         入口js文件
|   |
│   ├── app.vue                         根组件
|   |
│   ├── components                      公共组件目录
|   |   |
│   │   ├── App.vue                     入口文件
|   |
│   ├── assets                          资源目录，这里的资源会被wabpack构建
|   |
│   ├── routes                          前端路由
|   |   |
│   │   └── index.js
|   |
│   ├── store                           vuex的状态管理
|   |   |
│   │   ├── index.js                    引用vuex，创建store
|   |   |
│   │   └── modules                     store模块
|   |
│   └── views                           页面目录
|       |
│       └── hello.vue
|
└── static                          纯静态资源，不会被wabpack构建。


# commit log
  ## 初始化项目模板
    ### 增加Vuex
    ### 增加接口文档路径及规范
    ### 增加静态资源路径及规范
    ### 增加工具

  ## 页面
    ### 增加页面
    ### 拆分页面(views)和组件(components)
    ### 配置文件读取工具类

  ## 工具
    ### 引入jquery
    ### 文件读取工具
    ### 接口请求工具

  ## 2019/6/27
    ### 增加element-ui
    ### 增加postcss
    ### 增加404page
