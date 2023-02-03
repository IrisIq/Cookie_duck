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
    path: '/admin',
    component: '@/pages/admin/index',
    routes: [
      {
        path: '/admin',
        component: '@/pages/admin/components/AdminText',
      },
      {
        path: '/admin/article',
        component: '@/pages/admin/components/ArticalSetting',
      },
      {
        path: '/admin/sys/dic',
        component: '@/pages/admin/components/dicSetting/DicSetting',
      },
    ],
  },
];

export default routes;
