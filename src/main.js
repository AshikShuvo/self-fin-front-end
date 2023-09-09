import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BlockViewer from '@/components/BlockViewer.vue';

import '@/assets/styles.scss';
import { primeConverter } from '@/core/primevue/primeConverter';

const app = createApp(App);
const primeApp = primeConverter(app);
primeApp.use(router);
primeApp.component('BlockViewer', BlockViewer);

primeApp.mount('#app');
