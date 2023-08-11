import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
import FrontLayout from './components/layouts/FrontLayout.vue';
import router from './routes/index.js';

const app = createApp(App);

app.component('front-layout', FrontLayout);
app.use(Notifications);
app.use(router);

app.mount('.vue');
