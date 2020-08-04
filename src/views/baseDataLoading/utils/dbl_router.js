const dblActionRouter = [
  {
    path: '/ruleAction/:type/:id',
    name: 'ruleAction',
    props:true,
    component: () => import('@/views/baseDataLoading/rule_action'),
    meta: { title: '添加规则', other: 'a' }
  },
  {
    path: '/taskAction/:type/:id',
    name: 'taskAction',
    props:true,
    component: () => import('@/views/baseDataLoading/task_action'),
    meta: { title: '任务详情', other: 'a' }
  },
  {
    path: '/aptAction/:type/:id',
    name: 'aptAction',
    props:true,
    component: () => import('@/views/baseDataLoading/apt_action'),
    meta: { title: '预约详情', other: 'apt_action' }
  },
  {
    path: '/dbAction/:type/:id',
    name: 'dbAction',
    props:true,
    component: () => import('@/views/baseDataLoading/db_action'),
    meta: { title: '数据库详情', other: 'db_action' }
  },
]

const dblMainRouter = [
  {
    path: 'ruleMagt',
    name: 'ruleMagt',
    component: () => import('@/views/baseDataLoading/rule_magt'),
    meta: { title: '表格练习', other: 'table' }
  },
  {
    path: 'dbMagt',
    name: 'dbMagt',
    component: () => import('@/views/baseDataLoading/db_magt'),
    meta: { title: '表格练习', other: 'table' }
  },
  {
    path: 'aptLoad',
    name: 'aptLoad',
    component: () => import('@/views/baseDataLoading/apt_load'),
    meta: { title: '表格练习', other: 'table' }
  },
  {
    path: 'taskMagt',
    name: 'taskMagt',
    component: () => import('@/views/baseDataLoading/task_magt'),
    meta: { title: '表格练习', other: 'table' }
  },
  {
    path: 'batchWindow',
    name: 'batchWindow',
    component: () => import('@/views/baseDataLoading/batch_window'),
    meta: { title: '表格练习', other: 'table' }
  }
]

export {dblMainRouter,dblActionRouter}
