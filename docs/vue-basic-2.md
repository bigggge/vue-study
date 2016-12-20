Vue 基础（二）

## 条件渲染
```
<!-- Handlebars 模板 -->
{{#if ok}}
  <h1>Yes</h1>
{{/if}}
```

在 Vue.js ，我们使用 v-if 指令实现同样的功能：

```
<h1 v-if="ok">Yes</h1>
```

```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

不同的是有 v-show 的元素会始终渲染并保持在 DOM 中。v-show 是简单的切换元素的 CSS 属性 display 。

```
<h1 v-show="ok">Hello!</h1>
```

一般来说， v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换使用 v-show 较好，如果在运行时条件不大可能改变则使用 v-if 较好。


## 列表渲染

```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

整数迭代
```
<div>
  <span v-for="n in 10">{{ n }}</span>
</div>
```

## 事件处理器

```
<div id="example-1">
  <button v-on:click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
```

```
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

按键修饰符：

```
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

## 表单控件绑定

```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

动态选项，用 v-for 渲染

```
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

## 组件

组件（Component）是 Vue.js 最强大的功能之一。
组件可以扩展 HTML 元素，封装可重用的代码。
在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。
在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

### 使用组件

注册一个全局组件

```
Vue.component('my-component', {
  // 选项
})
```

使用组件
```
<div id="example">
  <my-component></my-component>
</div>
```

局部注册

``` 
var Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})
```

data 必须是函数，从而为每个组件返回新的 data 对象

```
var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return data
  }
})
new Vue({
  el: '#example-2'
})
```

构成组件

在 Vue.js 中，父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。

![](https://cn.vuejs.org/images/props-events.png)


### Prop（父->子）

（字面量语法）

prop 是父组件用来传递数据的一个自定义属性。子组件需要显式地用 props 选项声明 “prop”：

```
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})
```

然后向它传入一个普通字符串：

```
<child message="hello!"></child>
```

动态 Prop（动态语法）

```
<div>
  <input v-model="parentMsg">
  <br>
  <child :my-message="parentMsg"></child>
</div>
```

prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。
这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

### 自定义事件（子->父）

```
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
```

```
Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

### 使用Slot分发内容
### 动态组件
### 杂项


