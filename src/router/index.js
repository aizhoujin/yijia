import Vue from 'vue'
import Router from 'vue-router'
import index  from '@/views/index'
import svgpro from '@/views/svgpro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      
    },{
      path: '/svg',
      name: 'svgpro',
      component: svgpro
    }
  ]
})
