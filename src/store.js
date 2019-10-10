import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  mutations: {
    login(state, token) {
      state.isAuthenticated = true;
      localStorage.setItem("jwt", token);
      router.push("/");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("jwt");
      router.push("login");
    }
  },
  actions: {}
});
