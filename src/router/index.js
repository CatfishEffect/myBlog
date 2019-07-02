import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/page/${view}.vue`)
}


export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'index',
            component: loadView('BlogIndex')
        },
        {
            path: '/article',
            name: 'article',
            component: loadView('BlogArticle')
        },
        {
            path: '/share',
            name: 'share',
            component: loadView('BlogShare')
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('BlogAbout')
        }
    ]
})
