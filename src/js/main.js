'use strict';

import Vue from 'vue'
import App from './App'
// import store from './store/vuex.js';
import VueRouter from 'vue-router';
import routesConfig from './router.js';

let router = new VueRouter(routesConfig);
Vue.config.productionTip = true // 开启提示信息

// 根据mate中的状态值来加判断, 例如登录状态验证
// router.beforeEach((to, from, next) => {
//     if (to.meta.xxxx) {
//     } else {
//         router.push({ name: 'index' });
//         next();
//     }
// })

Vue.use(VueRouter); // 将路由组件挂载到vue上

new Vue({
    // store,
    router: router,
    render: h => h(App)
}).$mount('#app');
