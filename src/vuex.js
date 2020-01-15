import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        drawerRight: false,
        sheet: false,
        list: true
    },
    mutations: {
        toggleDrawerRight: state => state.drawerRight = !state.drawerRight,
        toggleSheet: state => state.sheet = !state.sheet,
        changeListTrue: state => state.list = true,
        changeListFalse: state => state.list = false
    },
    getters: {
        drawerRight: state => state.drawerRight,
        sheet: state => state.sheet,
        list: state => state.list
    }
})

export { store }