import Vue from 'vue'
import Router from 'vue-router'
import ShowPage from '@/components/ShowPage'
import Calendar from '@/components/Calendar'
import PdfLook from '@/components/PdfLook'
import TestVdom from '@/components/TestVdom'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show-page',
      name: 'ShowPage',
      component: ShowPage
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/pdf-look',
      name: 'PdfLook',
      component: PdfLook
    },
    {
      path: '/test-vdom',
      name: 'TestVdom',
      component: TestVdom
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
