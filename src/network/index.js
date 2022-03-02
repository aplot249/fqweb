import axios from "axios";
import store from "@/store";

const instance = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'http://192.168.0.100:8000' : 'https://django.chuanyun101.com:9999',
    // baseURL: process.env.NODE_ENV == 'development' ? 'https://django.chuanyun101.com' : 'https://django.chuanyun101.com',
    // baseURL: process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:8000' : 'https://django.chuanyun101.com',
    // baseURL: process.env.NODE_ENV == 'development' ? 'http://django.chuanyun101.com' : 'https://101.35.141.230:8885',
    // baseURL:"http://127.0.0.1:8000",
    // baseURL:"http://django.chuanyun101.com",
    // timeout:20000
});


instance.interceptors.request.use(
    res => {
        store.commit('changeLoadingShow', true)
        res.headers.Authorization = localStorage.getItem("userinfo") ? 'Token ' + JSON.parse(localStorage.getItem("userinfo")).token : ''
        return res
    },
    err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    res => {
        store.commit('changeLoadingShow', false)
        return res
    },
    err => {
        store.commit('changeLoadingShow', false)
        // 如果有需要授权才可以访问的接口， 统一去login授权
        return Promise.reject(err)
    }
)

export async function get(url, params) {
    return instance.get(url, {
        params,
    })
}


export async function post(url, data) {
    return instance.post(url, data, {
        transformRequest: [function (data) {
            let res = '';
            for (let item in data) {
                res += encodeURIComponent(item) + "=" + encodeURIComponent(data[item]) + "&"
            }
            return res
        }],
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken"),
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
}

export async function put(url, data) {
    return instance.put(url, data, {
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken"),
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
}

export async function patch(url, data) {
    return instance.patch(url, data, {
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken")
        // }
    })
}

export async function del(url, data) {
    return instance.delete(url, data, {
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken")
        // }
    })
}

export async function upload(url, data) {
    return instance.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
        }
    })
}