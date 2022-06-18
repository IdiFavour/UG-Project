import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)
new WaveUI(app, {
    colors: {
        light: '#f9f8fe',
        white: '#fff',
        default: '#eb212e'
    }
})
app.use(router)

app.mount('#app')