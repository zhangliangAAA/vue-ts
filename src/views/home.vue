<template>
  <div>
    <h1>Hello 组件如下：</h1>
    <Hello></Hello>
  </div>
</template>

<script lang="ts">
import Hello from "@/components/HelloWorld.vue";

export default {
  name: "HelloWorld",
  components: { Hello },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


