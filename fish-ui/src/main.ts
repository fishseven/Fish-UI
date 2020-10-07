import './index.scss'
import './lib/fish.scss'
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './Router'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
