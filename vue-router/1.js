// 定义路由组件
// const Foo = {template: '<div>foo</div>'}
// const Bar = {template: '<div>bar</div>'}
// const User = {
//     template: `<div>User{{$route.params.id}}</div>`
// }
const User = {
    template: `<div class="user">
<h2>User {{$route.params.id}}</h2>
<router-view></router-view>`
}
const UserHome = {
    template: `<div>Home</div>`
}
const UserProfile = {
    template: `<div>Profile</div>`
}
const UserPosts = {
    template: `<div>Posts</div>`
}
// 定义路由
const routes = [
    // {path: '/foo', component: Foo},
    // {path: '/bar', component: Bar}
    {path: '/user/:id', component: User}
]

// 创建 router 实例
// const router = new VueRouter({
//     routes
// })
const router = new VueRouter({
    routes: [
        {
            path: '/user/:id', component: User,
            children: [
                {
                    path: '',
                    component: UserHome
                },
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})

// 创建和挂载根实例
const app = new Vue({
    router
}).$mount('#app')





