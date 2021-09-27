import { createStore } from 'vuex'

export default createStore({
    state: {
        isLogined:localStorage.getItem('userinfo') ? true :false,
        isShowLoading:false
    },
    mutations: {
        changeLoginStatus(state,payload){
            state.isLogined = payload
        },
        changeLoadingShow(state,payload){
            state.isShowLoading = payload
        }
    },
    actions: {},
    modules: {}
})