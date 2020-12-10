import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import 'bootstrap/dist/css/bootstrap.min.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


import { loadAllPlugins } from '@/plugins';

import { AppConfig } from '@/config/app'

const app: ReturnType<typeof createApp> = createApp(App)

// loadAllPlugins(app)
app.use(Antd);

app.provide('AppConfig', AppConfig)

app
  .use(store)
  .use(router)
  .mount("#app");

