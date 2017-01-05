/**
 * 1.js
 *
 * Created by xiepan on 2017/1/4 上午9:26.
 */


// https://cn.vuejs.org/v2/guide/components.html#使用-Slot-分发内容

Vue.component('modal', {

    template: '#modal-template'
});

new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});

