/**
 * app.js
 *
 * Created by xiepan on 2016/12/14 下午1:06.
 */

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    created(){
        let that = this;
        setInterval(function () {
            that.message += '123'
        }, 1000)
    }
})