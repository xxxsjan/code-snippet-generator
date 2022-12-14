export default [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout.vue'),
    redirect: '/vscode-snippet-generator',
    children: [
      {
        path: '/vscode-snippet-generator',
        name: 'vscode-snippet-generator',
        component: () => import('@/pages/vscode-snippet-generator.vue'),
        meta: {
          title: 'vscode用户代码片段',
        },
      },
      {
        path: '/format-css-style',
        name: 'format-css-style',
        component: () => import('@/pages/format-css-style.vue'),
        meta: {
          title: 'css style➡️对象',
        },
      },
      {
        path: '/template-to-string',
        name: 'template-to-string',
        component: () => import('@/pages/template-to-string.vue'),
        meta: {
          title: '模板字符串➡️普通字符串',
        },
      },
    ],
  },
];
