import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './index.scss';

createApp(App).use(router).mount('#app')
