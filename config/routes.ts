const routes = [
  {
    exact: true,
    path: '/',
    component: 'index',
    routes: [{ path: '/class', component: '@/components/Class' }],
  },
];

export default routes;
