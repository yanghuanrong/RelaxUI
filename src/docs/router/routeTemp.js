const component = [{
  title: 'General',
  route: [{
      path: '/button',
      meta: {
        text: 'Button 按钮'
      },
      component: () => import('@/docs/view/button/index.vue')
    },
    {
      path: '/icon',
      meta: {
        text: 'Icon 图标'
      },
      component: () => import('@/docs/view/icon/index.vue')
    },
    {
      path: '/badge',
      meta: {
        text: 'Badge 标记'
      },
      component: () => import('@/docs/view/badge/index.vue')
    },
    {
      path: '/drag',
      meta: {
        text: 'Drag 拖拽'
      },
      component: () => import('@/docs/view/drag/index.vue')
    }
  ]
}, {
  title: 'Layout',
  route: [{
    path: '/grid',
    meta: {
      text: 'Grid 栅格'
    },
    component: () => import('@/docs/view/grid/index.vue')
  }]
}, {
  title: 'Data Entry',
  route: [{
      path: '/input',
      meta: {
        text: 'Input 输入框'
      },
      component: () => import('@/docs/view/input/index.vue')
    },
    {
      path: '/checkbox',
      meta: {
        text: 'Checkbox 多选框'
      },
      component: () => import('@/docs/view/checkbox/index.vue')
    },
    {
      path: '/select',
      meta: {
        text: 'Select 选择器'
      },
      component: () => import('@/docs/view/select/index.vue')
    }, {
      path: '/switch',
      meta: {
        text: 'Switch 开关'
      },
      component: () => import('@/docs/view/switch/index.vue')
    },
    {
      path: '/datePicker',
      meta: {
        text: 'DatePicker 日期选择器'
      },
      component: () => import('@/docs/view/datePicker/index.vue')
    },
    {
      path: '/calendar',
      meta: {
        text: 'Calendar 日历'
      },
      component: () => import('@/docs/view/calendar/index.vue')
    },
    {
      path: '/form',
      meta: {
        text: 'Form 表单'
      },
      component: () => import('@/docs/view/form/index.vue')
    },
    {
      path: '/table',
      meta: {
        text: 'Table 表格'
      },
      component: () => import('@/docs/view/table/index.vue')
    }
  ]
}, {
  title: 'Feedback',
  route: [{
      path: '/message',
      meta: {
        text: 'Message 消息'
      },
      component: () => import('@/docs/view/message/index.vue')
    },
    {
      path: '/notice',
      meta: {
        text: 'Notice 通知'
      },
      component: () => import('@/docs/view/notice/index.vue')
    }
  ]
}]

export default component