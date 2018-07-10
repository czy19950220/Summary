import Vue     from 'vue'
import Router  from 'vue-router'
import CssPage from '@/views/CssPage'

import FlexCard from '@/components/FlexCard'
import Popup    from '@/components/Popup'
import AccordionImg    from '@/components/AccordionImg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //css汇总页面
    {
      path: '/',
      name: 'CssPage',
      component: CssPage,
      meta: {title: 'Css页面效果汇总'}
    },
    //3d伸展折叠卡片
    {
      path: '/FlexCard',
      name: 'FlexCard',
      component: FlexCard,
      meta: {title: '展开收缩卡片'}
    },
    //纯css弹框
    {
      path: '/Popup',
      name: 'Popup',
      component: Popup,
      meta: {title: '纯css弹框'}
    },
    //全屏手风琴图片
    {
      path: '/AccordionImg',
      name: 'AccordionImg',
      component: AccordionImg,
      meta: {title: '全屏手风琴图片'}
    }
  ]
})