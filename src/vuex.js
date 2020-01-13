import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        drawerRight: false,
        sheet: false
    },
    mutations: {
        toggleDrawerRight: state => state.drawerRight = !state.drawerRight,
        toggleSheet: state => state.sheet = !state.sheet
    },
    getters: {
        drawerRight: state => state.drawerRight,
        sheet: state => state.sheet
    }
})

export { store }