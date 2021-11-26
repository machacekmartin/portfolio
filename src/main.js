import { createApp } from 'vue'
import App from './App.vue'

import SvgImg from './components/SvgImg.vue';


const app = createApp(App)

app.component('svg-img', SvgImg);
app.mount('#app')
