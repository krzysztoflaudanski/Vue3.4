import 'normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import store from './store';
import 'animate.css/animate.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import TextArea from 'primevue/textarea';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('TextArea', TextArea)

app.mount('#app');
