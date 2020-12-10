import { createApp } from 'vue';
import loadComponent from './antd'

export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  /* const files = require.context('.', true, /\.ts$/);
  files.keys().forEach((key) => {
    if (key !== './index.ts') files(key).default(app)
  })
 */
  loadComponent(app)
}