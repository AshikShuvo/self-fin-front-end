import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import BlockViewer from '@/components/BlockViewer.vue';

import '@/assets/styles.scss';
import { primeConverter } from '@/core/primevue/primeConverter';

const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia);

const primeApp = primeConverter(app);
primeApp.component('BlockViewer', BlockViewer);

primeApp.mount('#app');
