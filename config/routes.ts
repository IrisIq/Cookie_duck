const routes = [
  {
    exact: true,
    path: '/',
    component: 'index',
    routes: [{ path: '/class', component: '@/components/ArticalBox' }],
  },
];

export default routes;
