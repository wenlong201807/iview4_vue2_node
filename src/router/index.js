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
      path: '/home',
      name: 'home',
      // redirect: '/home/aa',
      component: () => import('@/views/home'),
      children: [
        {
          path: 'aa',
          name: 'home',
          component: () => import('@/views/home'),
          meta: { title: '首页', other: 'home' }
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
