<template>
  <div>
    <input v-model="msg" />
    <p>prop:{{propMsg}}</p>
    <p>msg:{{msg}}</p>
    <p>helloMsg:{{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <p>网络请求:{{res}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<style>
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    propMsg: String
  }
})
export default class App extends Vue {
  // 初始化数据
  msg = 123;
  helloMsg = "Hello," + this.msg;
  res: any = null;
  // 声明周期钩子
  async mounted() {
    // this.greet();
    const res = await fetch("/api");
    this.res = res || "没数据";
  }
  get computedMsg() {
    return "computed" + this.msg;
  }
  greet() {
    console.log(this.$props.propMsg);
    alert("greet" + this.msg);
  }
}
</script>