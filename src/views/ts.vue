<template>
  <div>
    <h1>TS 组件：</h1>
    <TsCom
      :name="name"
      :initialEnthusiasm="1"
    ></TsCom>
  </div>
</template>

<script lang="ts">
import TsCom from "@/components/TsComponent.ts";

export default {
  name: "HelloWorld",
  components: { TsCom },
  data() {
    return {
      name: "zlh",
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


