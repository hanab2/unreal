import Vue from 'vue'
import App from './App'
import router from './router'
//---------------Element
import ElementUI , { Message } from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
//---------------Echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import darkBlue from 'echarts/theme/dark-blue'
import macarons from 'echarts/theme/macarons'
import blue from 'echarts/theme/blue'
import teach_blue from 'echarts/theme/tech-blue'
//---------------axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$message = Message
Vue.config.productionTip = false
ECharts.registerTheme('dark-blue', darkBlue)
ECharts.registerTheme('blue', blue)
ECharts.registerTheme('macarons',macarons)
ECharts.registerTheme('teach_blue', teach_blue)
Vue.component('chart', ECharts)
Vue.use(VueAxios, axios)
Vue.use(ElementUI) //使用elementUI
Vue.use(router)


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
