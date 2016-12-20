/**
 * main.js
 *
 * Created by xiepan on 2016/12/20 下午3:10.
 */

new Vue({
    // state 驱动应用的数据源
    data: function () {
        return {
            count: 0
        }
    },
    // view 以声明方式将state映射到视图
    template: `
<div>{{count}}</div>
`,
    // actions 响应在view上的用户输入导致的状态变化
    methods: {
        increment(){
            this.count++
        }
    }
})