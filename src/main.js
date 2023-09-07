import { createApp } from 'vue';
import App from './App.vue';
import FrontLayout from './components/layouts/FrontLayout.vue';
import router from './routes/index.js';
import ToastPlugin, {useToast} from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const app = createApp(App);

app.use(ToastPlugin);

app.component('front-layout', FrontLayout);
app.use(router);

app.mount('.vue');

const $toast = useToast();
let instance = $toast.success('You did it!');
instance.dismiss();
$toast.clear();
