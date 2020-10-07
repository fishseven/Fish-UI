import './index.scss'
import './lib/fish.scss'
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './Router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown',Markdown)
// createApp(App).mount('#app')
