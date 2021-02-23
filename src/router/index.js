import Vue from 'vue'
import VueRouter from "vue-router";
import StoneWordCloud from "../views/StoneWordCloud";
import Index from "../views/Index";
import StoneLine from "../views/StoneLine";
import StonePie from "../views/StonePie";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/word_cloud/:choice',
          props: true,
          component: StoneWordCloud
        },
        {
          path: '/line',
          props: true,
          component: StoneLine
        },
        {
          path: '/pie',
          props: true,
          component: StonePie
        }
      ]
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
})
