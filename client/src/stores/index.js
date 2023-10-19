import { createStore } from "vuex";
import api from "../helper/api";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    dashboard: {
      loading: false,
      data: {},
    },
    notification: {
      show: false,
      type: "success",
      message: "",
    },
  },
  getters: {},
  actions: {
    // async getToken() {
    //   await axios.get("/sanctum/csrf-cookie");
    // },

    async register({ commit }, user) {
      // await this.getToken();
      try {
        const { data } = await api.post("/register", user);
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, user) {
      // await this.getToken();
      try {
        const { data } = await api.post("/login", user);
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async logout({ commit }) {
      // await this.getToken();
      try {
        const response = await api.post("/logout");
        commit("logout");
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getUser({ commit }) {
      // await this.getToken();
      try {
        const res = await api.get("/user");
        console.log(res);
        commit("setUser", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },

    setUser: (state, user) => {
      state.user.data = user;
    },
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
  },
  modules: {},
});

export default store;
