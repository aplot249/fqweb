import axios from "axios";


const instance = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'http://192.168.42.188:8000' : 'http://django.chuanyun101.com',
    // baseURL:"http://127.0.0.1:8000",
    // baseURL:"http://django.chuanyun101.com",
    // timeout:20000
});


instance.interceptors.request.use(
    res=>{
        // console.log("_______请求_____________")
        res.headers.Authorization = localStorage.getItem("accessToken")
        return res
    },
    err=>{
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    res=>{
        // console.log("________返回_____________")
        return res
    },
    err=>{
        // 如果有需要授权才可以访问的接口， 统一去login授权
        return Promise.reject(err)
    }

)

export function get(url,params){
    return instance.get(url,{
        params,
    })
}


export function post(url,data){
    return instance.post(url,data,{
        transformRequest:[function(data){
            let res = '';
            for(let item in data){
                res += encodeURIComponent(item)+"="+encodeURIComponent(data[item])+"&"
            }
            return res
        }],
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken"),
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
}

export function put(url,data) {
    return instance.put(url,data,{
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken"),
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
}

export function patch(url,data) {
    return instance.patch(url,data,{
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken")
        // }
    })
}

export function del(url,data) {
    return instance.delete(url,data,{
        // headers:{
        //     "Authorization":localStorage.getItem("accessToken")
        // }
    })
}

export function upload(url,data){
    return instance.post(url,data,{
        headers:{
            'Content-Type': 'multipart/form-data;charset=UTF-8'
        }
    })
}