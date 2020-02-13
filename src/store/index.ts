import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  getters: {
    num: state => {
      const a = "a";
      return state.count;
    }
  },
  actions: {
    delayAdd(ctx) {
      setTimeout(() => {
        ctx.commit("increment");
      }, 1000);
    },
    delayDec(ctx) {
      setTimeout(() => {
        ctx.commit("decrement");
      }, 1000);
    }
  }
});
