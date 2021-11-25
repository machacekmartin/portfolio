import { createApp } from 'vue'
import App from './App.vue'


import SvgBackgroundBubbles from './components/svg/SvgBackgroundBubbles.vue'
import SvgBackgroundClouds from './components/svg/SvgBackgroundClouds.vue'

const app = createApp(App)

app.component('svg-background-bubbles', SvgBackgroundBubbles)
app.component('svg-background-clouds', SvgBackgroundClouds)

app.mount('#app')
