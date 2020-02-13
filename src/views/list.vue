<template>
  <div>
    <h1>List 组件：</h1>
    <List :propMsg="'pppp'"></List>
  </div>
</template>

<script lang="ts">
import List from "@/components/List.vue";

export default {
  name: "HelloWorld",
  components: { List },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


