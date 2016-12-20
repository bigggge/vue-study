## Vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

单向数据流

![](https://vuex.vuejs.org/zh-cn/images/flow.png)

但是，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。
对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。
以上的这些模式非常脆弱，通常会导致无法维护的代码。

![](https://vuex.vuejs.org/zh-cn/images/vuex.png)

## 开始

每一个 Vuex 应用的核心就是 store（仓库）。"store" 基本上就是一个容器，它包含着你的应用中大部分的状态(即 state)。
Vuex 和单纯的全局对象有以下两点不同：

- Vuex 的状态存储是响应式的。
当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

- 你不能直接改变 store 中的状态。
改变 store 中的状态的唯一途径就是显式地提交 mutations。
这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

## 核心概念

### State

**单一状态树**

每个应用将仅仅包含一个 store 实例

**在 Vue 组件中获得 Vuex 状态**

Vuex 通过 store 选项，提供了一种机制将状态从根组件『注入』到每一个子组件中（需调用 Vue.use(Vuex)）

```
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

```
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```
**mapState 辅助函数**

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键

**对象展开运算符**
**组件仍然保有局部状态**

如果有些状态严格属于单个组件，最好还是作为组件的局部状态。

### Getters

有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：

```
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

Getters 会暴露为 store.getters 对象：

```
store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
```

**mapGetters 辅助函数**

### Mutations

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```

**提交载荷（Payload）**

你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
```
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})
```

**对象风格的提交方式**
```
store.commit({
  type: 'increment',
  amount: 10
})
```

### Actions
### Modules
