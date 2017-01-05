Vue 进阶（二）

## 插件

```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (options) {
    // 逻辑...
  }
}
```

使用插件

```
Vue.use(MyPlugin, { someOption: true })
```

## 单文件组件

在很多Vue项目中，我们使用 `Vue.component` 来定义全局组件，紧接着用 `new Vue({ el: '#container '})` 在每个页面内指定一个容器元素。

- 全局定义(Global definitions) 强制要求每个 component 中的命名不得重复
- 字符串模板(String templates) 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 \
- 不支持CSS(No CSS support) 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
- 没有构建步骤(No build step) 限制只能使用 HTML 和 ES5 JavaScript, 而不能使用预处理器，如 Pug (formerly Jade) 和 Babel

文件扩展名为 `.vue` 的 single-file components(单文件组件) 为以上所有问题提供了解决方法，
并且还可以使用 Webpack 或 Browserify 等构建工具。
这是一个文件名为 Hello.vue 的简单实例：

```
<template>
    <p>{{ greeting }}World!</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
```

现在我们获得了完整语法高亮，CommonJS 模块，组件化的 CSS
我们也可以使用预处理器来构建简洁和功能更丰富的组件，比如 Jade，Babel (with ES2015 modules)，和 Stylus。

在 Webpack中，每个模块被打包到 bundle 之前都由一个相应的 “loader” 来转换，
Vue 也提供 vue-loader 插件来执行 .vue 单文件组件 的转换。

[vue-loader 的文档](https://lvyongbo.gitbooks.io/vue-loader/content/)
[webpack 中文指南](http://zhaoda.net/webpack-handbook/index.html)
[es2015 的新特性](https://babeljs.io/learn-es2015/)

## 生产环境部署

[Not Completed]

## 路由

```
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
```

nginx 配置以防止 404 错误

```
location / {
  try_files $uri $uri/ /index.html;
}
```

[vue-router 2 文档](https://router.vuejs.org/zh-cn/)

## 状态管理

[Not Completed]

## 单元测试

[Not Completed]

## 服务端渲染

[Not Completed]