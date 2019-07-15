// import Vue from '../node_modules/vue/dist/vue.js'

import App from './App.vue'
import Vue from 'vue' 
// 1.导入
import vuex from 'vuex'
// 2.注册
Vue.use(vuex)
// 3. new 实例
var store = new vuex.Store({
    state:{
        // 类似于 data
        count:0
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
});

new Vue({
    el:"#app",
    data:{
        msg:'000'
    }, 
    render:c=>c(App),
    // 4.挂载到Vue实例上,任何组件都能使用。全局
    store
})
