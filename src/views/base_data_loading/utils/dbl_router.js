const dblActionRouter = [
  {
    path: '/ruleAction/:type/:id',
    name: 'ruleAction',
    props: true,
    component: () => import('@/views/base_data_loading/rule_action'),
    meta: { title: '规则详情', other: 'rule_action' }
  },
  {
    path: '/taskAction/:type/:id',
    name: 'taskAction',
    props: true,
    component: () => import('@/views/base_data_loading/task_action'),
    meta: { title: '任务详情', other: 'task_action' }
  },
  {
    path: '/aptAction/:type/:id',
    name: 'aptAction',
    props: true,
    component: () => import('@/views/base_data_loading/apt_action'),
    meta: { title: '预约详情', other: 'apt_action' }
  },
  {
    path: '/dbAction/:type/:id',
    name: 'dbAction',
    props: true,
    component: () => import('@/views/base_data_loading/db_action'),
    meta: { title: '数据库详情', other: 'db_action' }
  },
]

const dblMainRouter = [
  {
    path: 'ruleMagt',
    name: 'ruleMagt',
    component: () => import('@/views/base_data_loading/rule_magt'),
    meta: { title: '规则管理', other: 'rule_magt' }
  },
  {
    path: 'dbMagt',
    name: 'dbMagt',
    component: () => import('@/views/base_data_loading/db_magt'),
    meta: { title: '数据库管理', other: 'db_magt' }
  },
  {
    path: 'aptLoad',
    name: 'aptLoad',
    component: () => import('@/views/base_data_loading/apt_load'),
    meta: { title: '预约加载', other: 'apt_load' }
  },
  {
    path: 'taskMagt',
    name: 'taskMagt',
    component: () => import('@/views/base_data_loading/task_magt'),
    meta: { title: '任务管理', other: 'task_magt' }
  },
  {
    path: 'batchWindow',
    name: 'batchWindow',
    component: () => import('@/views/base_data_loading/batch_window'),
    meta: { title: '批次窗口', other: 'batch_window' }
  }
]

export { dblMainRouter, dblActionRouter }
