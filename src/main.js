import 'normalize.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css/animate.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'

createApp(App).use(store).use(router).mount('#app')
