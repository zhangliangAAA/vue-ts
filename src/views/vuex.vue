<template>
  <div>
    <h1>Vuex 示例：</h1>
    <p>计算属性获取store：{{value}}</p>
    <p>mapState获取store：{{mapStateCount}}</p>
    <p>mapGetters获取store：{{num}}</p>
    <button @click="add">+</button>
    <button @click="decrement">-</button>
    <button @click="deAdd">delay+</button>
    <button @click="deDec">delay-</button>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  },

  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      mapStateCount: state => (state as any).count
    }),
    ...mapGetters(["num"]),
    value(): any {
      return (this as any).$store.state.count;
    }
  },
  methods: {
    ...mapMutations({ add: "increment" }),
    ...mapActions({
      deDec: "delayDec"
    }),
    decrement() {
      (this as any).$store.commit("decrement");
    },
    deAdd() {
      (this as any).$store.dispatch("delayAdd");
    }
  }
};
</script>


