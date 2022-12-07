const routes = [
  {
    // exact: true,
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: '@/pages/index/index',
    routes: [
      {
        path: '/index',
        component: '@/components/class/Class',
        // exact: true,
      },
      {
        path: '/index/class/:id',
        component: '@/components/class/Class',
        // exact: true,
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
  },
];

export default routes;
