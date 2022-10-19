import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: { type: 'browser' },
  routes: routes,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8717/api/',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
