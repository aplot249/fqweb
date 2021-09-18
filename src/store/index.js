import { createStore } from 'vuex'

export default createStore({
    state: {
        isLogined:localStorage.getItem('userinfo') ? true :false
    },
    mutations: {
        changeLoginStatus(state,payload){
            state.isLogined = payload
        }
    },
    actions: {},
    modules: {}
})