/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'

import News from "../components/home/News.vue"
import Message from "../components/home/Message.vue"
import MessageDetail from '../components/home/MessageDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News
                },
                {
                    path: '/home/message',    // / 代表根目录
                    component: Message,
                    children:[
                        {
                            path: '/home/message/detail/:id',
                            component: MessageDetail
                        }
                    ]
                },
                {
                    path: '',
                    redirect: 'news'
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});