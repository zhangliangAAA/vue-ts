<template>
  <div>
    <h2>装饰器组件</h2>
    <p>Prop-name：{{ name }}</p>
    <p>Prop-initalValue：{{ name }}</p>
    <p>state-myValue：{{ myValue }}</p>
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <br>
    <input v-model="msg" />
    <p>v-modle：{{msg}}</p>
    <p>computed-excMarks：{{ excMarks }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Decorator extends Vue {
  @Prop() name!: string;
  @Prop() initalValue!: number;

  myValue = this.initalValue || 0;
  msg = "";
  mounted() {
    console.log("hook创建");
    console.log("---", this.initalValue);
  }
  add() {
    this.myValue++;
  }
  dec() {
    if (this.myValue > 1) {
      this.myValue--;
    }
  }
  get excMarks(): string {
    return "计算属性" + this.myValue;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
