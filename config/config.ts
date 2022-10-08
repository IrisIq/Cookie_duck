import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: { type: 'browser' },
  routes: routes,
});
