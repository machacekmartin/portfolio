import { createApp } from 'vue'
import App from './App.vue'

import SvgComponent from './components/SvgComponent.vue'

const app = createApp(App)

app.component('svg-component', SvgComponent)

app.mount('#app')
