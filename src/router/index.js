import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

const Index = () => import('@/Index')
const Backend = () => import ("@/Backend")
const Instruction = () => import('@/views/Others/Instruction')
const VpnCodeOrInfo = () => import ('@/views/Vpn/VpnInfoOrCode')
const Software = () => import ('@/views/Others/Software')
const Vxlink = () => import('@/views/Others/VxLink')
const Douyin = () => import('@/views/Others/Douyin')
const ChangePasswd = () => import('@/views/Others/ChangePasswd')
const Invitation = () => import('@/views/Others/Invitation')
const ArticleDetail = () => import ("@/views/Others/ArticleDetail")
const ArticleEditor = () => import ("@/views/Others/ArticleEditor")
const Analysis = ()=> import("@/views/Vpn/Analysis")

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
                path: 'analysis',
                component: Analysis,
                meta: {
                    title: "数据分析",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'article/:id',
                name: 'article-detail',
                component: ArticleDetail,
                meta: {
                    title: "操作教程",
                    requireAuthorized: true,
                    requireAdmin: false
                }
            },
            {
                path: 'edit/:id([\s0-9]*)',
                name: 'article-editor',
                component: ArticleEditor,
                meta: {
                    title: "编辑",
                    requireAuthorized: true,
                    requireAdmin: true
                }
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
            // 访问要求管理员登录的页面，却不是管理员
            if (to.meta.requireAdmin === true && JSON.parse(localStorage.getItem('userinfo')).user != 'admin') {
                return next('/backend/')
            }
            return next()
        }
        // 登录状态访问的是首页（to.path === '/'），且不含三个关键词
        if (!to.meta.requireAuthorized && store.state.isLogined === true && !['share', 'reset', 'active'].includes(Object.keys(to.query)[0])) {
            return next('/backend/')
        }
        return next()
    }
)

export default router