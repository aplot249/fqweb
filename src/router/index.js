import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const Index = ()=>import('@/Index')
const Backend = () => import ("@/Backend")
const Instruction =()=>import('@/Instruction')
const VpnCodeOrInfo = () => import ('@/views/Vpn/VpnInfoOrCode')

// const Center = () => import ('../views/Others/Center.vue')
// const FileWebSocket = () => import ('../views/Others/FileWebSocket')
// const Douyin = () => import ('../views/Others/Douyin')

// const AnyconnetSoftware = () => import ('../views/Others/AnyconnetSoftware')

// const ArticleCreate = () => import ('../views/Article/ArticleCreate')
const ArticleDetail = () => import ("../views/ArticleDetail")
// const TagArticle = () => import ("../views/Article/TagArticle")
// const ArticleClassify = () => import ("../views/Article/ArticleClassify")
// const ArticleCatagory = () => import ('../views/Article/ArticleCatagory')
// const Myarticle = () => import ('../views/Article/Myarticle.vue')
// const ArticleList = () => import("../views/Article/ArticleList")

// const UserLogin = () => import ('@/views/User/UserLogin')
// const UserRegister = () => import ('@/views/User/UserRegister.vue')
// const UserChangePasswd = () => import ('../views/User/UserChangePasswd.vue')

const routes = [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: "首页"
            }
        },
        {
            path: '/backend',
            name: 'backend',
            component: Backend,
            // redirect:'/backend/instruction',
            meta: {
                'requireAuthorized':true
            },
            children:[
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
                    path: '/article/:id',
                    name: 'articledetail',
                    component: ArticleDetail,
                    meta: {
                        title: "操作教程",
                        // requireAuthorized: true
                    },
                },

            ]
        },

        // {
        //     path: '/login',
        //     name: 'login',
        //     component: UserLogin,
        //     meta: {
        //         title: "用户登录"
        //     }
        // },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: UserRegister,
        //     meta: {
        //         title: "用户注册"
        //     }
        // }
    // {
    //     path: '/user',
    //     name: 'index',
    //     children:[
    //         {
    //             path: 'login',
    //             name: 'login',
    //             component: UserLogin,
    //             meta: {
    //                 title: "用户登录"
    //             }
    //         },
    //         {
    //             path: 'register',
    //             name: 'register',
    //             component: UserRegister,
    //             meta: {
    //                 title: "用户注册"
    //             }
    //         }
    //     ]
    // },
    // {
    //     path: '/others/wsfile',
    //     component: FileWebSocket,
    //     meta: {
    //         title: "公众号文章转pdf"
    //     }
    // },
    // {
    //     path: '/others/douyin',
    //     component: Douyin,
    //     mate: {
    //         title: "抖音视频转存"
    //     }
    // },
    // {
    //     path: '/vpnsoftware',
    //     component: AnyconnetSoftware,
    //     meta: {
    //         title: "软件下载"
    //     }
    // },
    // {
    //     path: '/article',
    //     name: 'articlecreate',
    //     component: ArticleCreate,
    //     meta: {
    //         title: "创建文章",
    //         requireAuthorized: true
    //     },
    // },
    // {
    //     path: '/article/:id',
    //     name: 'articledetail',
    //     component: ArticleDetail,
    //     meta: {
    //         title: "文章详情",
    //         // requireAuthorized: true
    //     },
    // },
    // {
    //     path: '/list/:tag',
    //     name: 'taglist',
    //     props:true,
    //     component: ArticleList,
    // },
    // {
    //     path: '/tag/:name',
    //     name: 'tag',
    //     component: TagArticle,
    // },
    // {
    //     path: '/catagory',
    //     name: 'articlecatagory',
    //     component: ArticleCatagory,
    //     meta: {
    //         title: "所有文章"
    //     }
    // },
    // {
    //     path: '/classify/:id/',
    //     name: 'articleclassify',
    //     component: ArticleClassify,
    //     meta:{
    //         title: "文章分类",
    //         requireAuthorized: true
    //     }
    // },
    // {
    //     path: '/myarticle',
    //     name: 'myarticle',
    //     component: Myarticle,
    //     meta: {
    //         title: "我的文章",
    //         requireAuthorized: true
    //     },
    // },
    // {
    //     path: '/others',
    //     name: 'others',
    //     component: Center,
    //     meta: {
    //         title: "其他功能",
    //         // requireAuthorized: true
    //     }
    // },
    // {
    //     path: '/login/:code(.*?)',
    //     name: 'UserLogin',
    //     component: UserLogin,
    //     meta: {
    //         title: "用户登录"
    //     }
    // },
    // {
    //     path: '/user/register',
    //     name: 'UserRegister',
    //     component: UserRegister,
    //     meta: {
    //         title: "用户注册"
    //     }
    // },
    // {
    //     path: '/user/changepasswd',
    //     name: 'UserChangePasswd',
    //     meta: {
    //         title: "更改密码",
    //         requireAuthorized: true
    //     },
    //     component: UserChangePasswd
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // 如果没有登录， 在这里到login
    if (to.meta.requireAuthorized && store.state.isLogined === false) {
        alert("请先登录")
        return next('/')
    } else {
        next()
    }
})

export default router