import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'

const Index = () => import('@/Index')
const Backend = () => import ("@/Backend")
const Instruction = () => import('@/views/Instruction')
const VpnCodeOrInfo = () => import ('@/views/Vpn/VpnInfoOrCode')
const Software = () => import ('../views/Software')
const Vxlink = () => import('../views/VxLink')
const Douyin = () => import('../views/Douyin')
const ChangePasswd = () => import('../views/ChangePasswd')
const Invitation = () => import('../views/Invitation')
const ArticleDetail = () => import ("../views/ArticleDetail")

const routes = [
    {
        path: '/',
        name: 'index',
        alias: '/login',
        component: Index,
        meta: {
            title: "首页"
        }
    },
    {
        path: '/backend',
        name: 'backend',
        component: Backend,
        meta: {
            'requireAuthorized': true
        },
        children: [
            {
                path: '',
                component: Instruction,
                meta: {
                    title: "操作说明",
                    requireAuthorized: true
                }
            },
            {
                path: 'vpn',
                component: VpnCodeOrInfo,
                meta: {
                    title: "翻墙操作",
                    requireAuthorized: true
                }
            },
            {
                path: 'article/:id',
                name: 'articledetail',
                component: ArticleDetail,
                meta: {
                    title: "操作教程",
                    // requireAuthorized: true
                },
            },
            {
                path: 'software/:type',
                name: 'software',
                component: Software,
                meta: {
                    title: "软件下载"
                }
            },
            {
                path: 'vxlink',
                name: 'vxlink',
                component: Vxlink,
                meta: {
                    title: "公众号文章转pdf"
                }
            },
            {
                path: 'douyin',
                name: 'douyin',
                component: Douyin,
                meta: {
                    title: "抖音视频你发我评"
                }
            },
            {
                path: 'changepasswd',
                name: 'changepasswd',
                component: ChangePasswd,
                meta: {
                    title: "更改密码"
                }
            },
            {
                path: 'invitation',
                name: 'invitation',
                component: Invitation,
                meta: {
                    title: "邀请得奖励"
                }
            },
        ]
    },
    {
        path: '/:pathAll(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // 如果没有登录， 在这里到login
    if (to.meta.requireAuthorized && store.state.isLogined === false) {
        alert("请先登录，没有账号请注册")
        return next('/')
    } else {
        // console.log(Object.keys(to.query)[0])
        console.log(!['share', 'reset', 'active'].includes(Object.keys(to.query)[0]))
        if (store.state.isLogined === true && to.path === '/' && !['share', 'reset', 'active'].includes(Object.keys(to.query)[0])) {
            return next('/backend')
        } else {
            return next()
        }
    }

})

export default router