import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from ''
// import regist from ''
// import home from ''
// import not_found from ''
// import users from
// import statics from ''
// import task_name from ''

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/=login',
      redirect: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/main',
      component: () => import('@/views/home'),
      children: [
        {
          path: 'main',
          name: 'main',
          component: () => import('@/views/main'),
          meta: { title: '主页', other: 'main' }
        },
        {
          path: 'table',
          name: 'table',
          component: () => import('@/views/prod/table'),
          meta: { title: '表格练习', other: 'table' }
        },
        {
          path: 'calculate',
          name: 'calculate',
          component: () => import('@/views/prod/calculate'),
          meta: { title: '表格练习', other: 'calculate' }
        },
        // echarts
        {
          path: 'bar_ring',
          name: 'bar_ring',
          component: () => import('@/views/echarts/bar_ring'),
          meta: { title: '柱状图和环形', other: 'bar_ring' }
        },
        {
          path: 'shanxing',
          name: 'shanxing',
          component: () => import('@/views/echarts/shanxing'),
          meta: { title: '扇形形', other: 'shanxing' }
        },
        {
          path: 'echart1',
          name: 'echart1',
          component: () => import('@/views/echarts/echart1'),
          meta: { title: '扇形形', other: 'echart1' }
        },
        {
          path: 'echart2',
          name: 'echart2',
          component: () => import('@/views/echarts/echart2'),
          meta: { title: '扇形形', other: 'echart2' }
        },
        {
          path: 'echart3',
          name: 'echart3',
          component: () => import('@/views/echarts/echart3'),
          meta: { title: '扇形形', other: 'echart3' }
        },
        {
          path: 'echart4',
          name: 'echart4',
          component: () => import('@/views/echarts/echart4'),
          meta: { title: '扇形形', other: 'echart4' }
        },
        {
          path: 'echart5',
          name: 'echart5',
          component: () => import('@/views/echarts/echart5'),
          meta: { title: '扇形形', other: 'echart5' }
        },
        {
          path: 'echartAll',
          name: 'echartAll',
          component: () => import('@/views/echarts/echartAll'),
          meta: { title: '扇形形', other: 'echartAll' }
        },
        {
          path: 'pro_echarts',
          name: 'pro_echarts',
          component: () => import('@/views/echarts/pro_echarts'),
          meta: { title: '扇形形', other: 'pro_echarts' }
        },
        {
          path: 'VueLazyComponent',
          name: 'VueLazyComponent',
          component: () => import('@/views/echarts/VueLazyComponent'),
          meta: { title: '交叉监听', other: 'VueLazyComponent' }
        },
        // 原有功能
        {
          path: 'Hightlight',
          name: 'Hightlight',
          component: () => import('@/views/Hightlight'),
          meta: { title: '柱状图和环形', other: 'bar_ring2' }
        },
        {
          path: 'TreeContexMenu',
          name: 'TreeContexMenu',
          component: () => import('@/views/treeContextMenu'),
          meta: { title: '柱状图和环形', other: 'bar_ring3' }
        },
        {
          path: 'definedData',
          name: 'sdsp',
          component: () => import('@/views/prod/sdsp'),
          meta: { title: '我的自定义数据', other: 'a' }
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/sdsp/users')
        },
        {
          path: 'statics',
          name: 'statics',
          component: () => import('@/views/sdsp/statics')
        },
        {
          path: 'task_list',
          name: 'task_list',
          component: () => import('@/views/sdsp/task_list')
        },
        {
          path: 'task_detail',
          name: 'task_detail',
          component: () => import('@/views/sdsp/task_detail')
        },
        {
          path: 'data_sample',
          name: 'data_sample',
          component: () => import('@/views/sdsp/data_sample')
        }
      ]
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('@/views/regist'),
      meta: { title: '注册', other: 'a' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login'),
      meta: { title: '登录', other: 'myLogin' }
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/not_found'),
      meta: { title: '错误页面', other: 'a' }
    }

  ]
})

// // 1.全局路由前置卫士, 在路由导航触发之后执行，异步解析，
// // 在守卫resolve之前，导航一直处于等待的过程  用的较多
// router.beforeEach((to, from, next) => {
//   console.log(66)
//   // if(to.path === '/home' ){
//   //   next()  // resolve状态为confirmed，进行路由跳转，如果不调用则不跳转
//   // }else if(from.meta.isLogin){
//   //   next()  // 确定用户名
//   // }else {
//   //   next(false) // 不跳转路由
//   // }
// })

// export default { router }
