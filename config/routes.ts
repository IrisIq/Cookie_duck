const routes = [
  {
    // exact: true,
    path: '/',
    redirect: '/admin',
  },
  {
    path: '/index',
    component: '@/pages/index/index',
    routes: [
      {
        path: '/index',
        component: '@/components/class/Class',
      },
      {
        path: '/index/class/:id',
        component: '@/components/class/Class',
      },
    ],
  },
  {
    exact: true,
    path: '/artical/:id',
    component: '@/pages/artical/index',
  },
  {
    exact: true,
    path: '/admin',
    component: '@/pages/admin/index',
    routes: [
      {
        path: '/admin',
        component: '@/components/admin/AdminText',
      },
      {
        path: '/admin/article',
        component: '@/components/admin/ArticalSetting',
      },
      {
        path: '/admin/sys/dic',
        component: '@/components/class/Class',
      },
    ],
  },
];

export default routes;
