import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: require('./home.vue').default
        },
        {
            path: '/user',
            component: require('./user.vue').default
        }
    ]
});