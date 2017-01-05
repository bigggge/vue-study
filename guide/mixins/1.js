/**
 * 1.js
 *
 * Created by xiepan on 2017/1/5 上午10:31.
 */

var myMixin = {
    created: function () {
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
            document.body.innerHTML = 'mixin'
        }
    }
}

new Vue.extend({
    mixins: [myMixin]
})