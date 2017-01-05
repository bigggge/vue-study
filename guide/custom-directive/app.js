Vue.directive('demo', {
    // el: 指令所绑定的元素，可以用来直接操作 DOM
    // binding: 一个对象
    // Vue 编译生成的虚拟节点
    bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
            'name指令名:' + s(binding.name) + '<br>' +
            'value指令的绑定值:' + s(binding.value) + '<br>' +
            'expression绑定值的字符串形式:' + s(binding.expression) + '<br>' +
            'arg传给指令的参数:' + s(binding.arg) + '<br>' +
            'modifiers一个包含修饰符的对象:' + s(binding.modifiers) + '<br>' +
            'vnode keys:' + Object.keys(vnode).join(', ')
    }
})

Vue.directive('focus', {
    // 钩子函数
    // https://cn.vuejs.org/v2/guide/custom-directive.html#钩子函数
    bind: function () {
        console.log('bind')
    },
    inserted: function (el) {
        console.log('inserted')
        el.focus();
    },
    update: function () {
        console.log('update')
    },
    componentUpdated: function () {
        console.log('componentUpdated')
    },
    unbind: function () {
        console.log('unbind')
    },
})

new Vue({
    el: '#app',
    data: {
        message: 'hello!'
    },
    methods: {
        update: function () {
            this.message = 'Hi'
        },
        uninstall: function () {
            this.message = ''
        },
        install: function () {
            this.message = 'hello!'
        }
    }
})