<template>
  <div>
    <h1>装饰器 组件如下：</h1>
    <Dec
      :name="'abc'"
      :initalValue="10"
    ></Dec>
  </div>
</template>

<script lang="ts">
import Dec from "@/components/Decorator.vue";

export default {
  name: "HelloWorld",
  components: { Dec },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


