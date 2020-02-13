import Vue from "vue";
import Router from "vue-router";
import Hello from "@/views/home.vue";
import List from "@/views/list.vue";
import Ts from "@/views/ts.vue";
import Dec from "@/views/decorator.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: Hello
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/tsc",
      name: "tsc",
      component: Ts
    },
    {
      path: "/decorator",
      name: "decorator",
      component: Dec
    }
  ]
});
