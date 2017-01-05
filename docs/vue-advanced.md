Vue 进阶（一）

## 深入响应式原理

### 如何追踪变化
### 变化检测问题
### 声明响应式属性
### 异步更新队列

## 过渡效果

## 过渡状态

## Render 函数
 
## 自定义指令

除了默认设置的核心指令( v-model 和 v-show ),Vue 也允许注册自定义指令。
注意，在 Vue2.0 里面，代码复用的主要形式和抽象是组件。
然而，有的情况下,你仍然需要对纯 DOM 元素进行底层操作,这时候就会用到自定义指令。

```
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

```
<input v-focus>
```

## 混合

混合是一种灵活的分布式复用 Vue 组件的方式。混合对象可以包含任意组件选项。
以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。

```
// 定义一个混合对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})
var component = new Component() // -> "hello from mixin!"
```


