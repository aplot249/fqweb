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
const ArticleEditor = () => import ("../views/ArticleEditor")

const routes = [
    {
        path: '/',
        name: 'index',
        alias: '/login',
        component: Index,
        meta: {
            title: "首页",
            requireAuthorized: false,
            requireAdmin: false
        }
    },
    {
        path: '/backend',
        name: 'backend',
        component: Backend,
        meta: {
            // requireAuthorized: true,
            // requireAdmin:false
        },
        children: [
            {
                path: '',
                component: Instruction,
                meta: {
                    title: "操作说明",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'vpn',
                component: VpnCodeOrInfo,
                meta: {
                    title: "翻墙操作",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'article/:id',
                name: 'articledetail',
                component: ArticleDetail,
                meta: {
                    title: "操作教程",
                    requireAuthorized: true,
                    requireAdmin: false
                },
            },
            {
                path: 'edit/:id([\s0-9]*)',
                name: 'articleeditor',
                component: ArticleEditor,
                meta: {
                    title: "编辑",
                    requireAuthorized: true,
                    requireAdmin: true
                },
            },
            {
                path: 'software/:type',
                name: 'software',
                component: Software,
                meta: {
                    title: "软件下载",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'vxlink',
                name: 'vxlink',
                component: Vxlink,
                meta: {
                    title: "公众号文章转pdf",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'douyin',
                name: 'douyin',
                component: Douyin,
                meta: {
                    title: "抖音视频你发我评",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'changepasswd',
                name: 'changepasswd',
                component: ChangePasswd,
                meta: {
                    title: "更改密码",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'invitation',
                name: 'invitation',
                component: Invitation,
                meta: {
                    title: "邀请得奖励",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
        ]
    },
    {
        path: '/:pathAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
        // 要求登录，但是没有登录
        if (to.meta.requireAuthorized && store.state.isLogined === false) {
            alert("请先登录，没有账号请注册")
            return next('/')
        }
        //要求登录且已经登录了
        if (to.meta.requireAuthorized && store.state.isLogined === true) {
            // 访问首页
            if (store.state.isLogined === true && to.path === '/' && !['share', 'reset', 'active'].includes(Object.keys(to.query)[0])) {
                return next('/backend/')
            }
            // 要求是管理员
            if (to.meta.requireAdmin == true) {
                if (JSON.parse(localStorage.getItem('userinfo')).user === 'admin' ? true : false) {
                    return next()
                } else {
                    return next('/backend/')
                }
            }
            return next()
        }
        //没有要求登录
        return next()
    }
)

export default router