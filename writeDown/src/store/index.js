import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        header: "WriteDown"
    },
    actions: {
        change(context, val) {
            context.state.header = val;
            // context.commit('changVal', val)
        }
    },
    mutations: {
        changVal(state, val) {
            state.header = val
        }
    },
    getters: {

    }
})