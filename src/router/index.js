import Vue from 'vue'
import Router from 'vue-router'
import ButtonImageType1 from '@/components/ButtonImageType1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ButtonImageType1',
      component: ButtonImageType1
    }
  ]
})
