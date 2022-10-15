const routes = [
  {
    // exact: true,
    path: '/',
    component: '@/pages/index/index',
    routes: [
      { path: '/', component: '@/components/class/Class' },
      { path: '/class/:id', component: '@/components/class/Class' },
    ],
  },
  {
    // exact: true,
    path: '/artical/:id',
    component: '@/pages/artical/index',
  },
];

export default routes;
