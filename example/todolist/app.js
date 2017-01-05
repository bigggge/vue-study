/**
 * app.js
 *
 * Created by xiepan on 2016/12/16 上午10:29.
 */


// http://www.w3school.com.cn/js/js_special_characters.asp
Vue.component('todo-item', {
    template: '<li>{{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>',
    sss: `
  <h1>Watch out!</h1>
 `,
    props: ['title']
});

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push(this.newTodoText)
            this.newTodoText = '';
            console.log(this) // Vue 实例
        },
        addNewTodo2: () => {
            console.log(this) // 箭头函数绑定父上下文，所以 this 不会像预想的一样是 Vue 实例,而是 window
        }
    }
})

var obj = {
    name: 'name',
    foo: function () {
        console.log(this); // Object {name: "name"}
        setTimeout(function () {
            console.log(this);  // Window
        }, 1000);
    },
    foo2: function () {
        console.log(this); // Object {name: "name"}
        setTimeout(() => {
            console.log(this);  // Object {name: "name"}
        }, 2000);
    }
}
obj.foo();
obj.foo2();