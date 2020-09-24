import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Fish from './components/Fish.vue'
import Fish2 from './components/Fish2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path:'/',component:Fish},
        {path:'/fish2',component:Fish2},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
