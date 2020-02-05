import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        drawerRight: false,
        sheet: false,
        list: true,
        classePisca: "",
        cor: "primary"
    },
    mutations: {
        toggleDrawerRight: state => state.drawerRight = !state.drawerRight,
        toggleSheet: state => state.sheet = !state.sheet,
        changeListTrue: state => state.list = true,
        changeListFalse: state => state.list = false,
        changeClassePiscaTrue: state => state.classePisca = "fa-blink",
        changeClassePiscaFalse: state => state.classePisca = "",
        changeCorAdd: state => state.cor = "primary",
        changeCorRemove: state => state.cor = ""
    },
    getters: {
        drawerRight: state => state.drawerRight,
        sheet: state => state.sheet,
        list: state => state.list,
        classePisca: state => state.classePisca,
        cor: state => state.cor
    }
})

export { store }