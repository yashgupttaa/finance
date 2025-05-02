import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import ChartJS from './plugins/chart.js'
import { Chart, Bar, Doughnut } from 'vue-chartjs'

const app = createApp(App)

// Register chart components globally
app.component('Bar', Bar)
app.component('Doughnut', Doughnut)

app.use(router)
app.mount('#app')
