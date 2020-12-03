import Vue from 'vue'
import Vuex from 'vuex'
import projects from "@/store/projects.js"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    form: {
    name: "",
    email: "",
    message: ""
    }
  },
  mutations: {
    UPDATE_FORM(state, payload) {
      state.form = Object.assign(state.form, payload)
    }
  },
  actions: {
  },
  modules: {
    projects
  }
})
