export default {
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['./page/demo.vue'], resolve),
            meta: {
                auth: true
            }
        }
    ]
}
