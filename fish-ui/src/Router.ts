import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Icon from './components/Icon.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import { h } from 'vue'

const history = createWebHashHistory()

const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes:[
        // {path:'/',component:Icon},
        {path:'/',component:Home},
        {path:'/Doc',component:Doc,children:[
            { path: "", redirect: '/doc/intro' },
            { path: "intro", component: md(intro) },
            { path: "get-started", component: md(getStarted) },
            { path: "install", component: md(install) },
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo}
        ]},
    ]
})
router.afterEach(()=>{
    console.log('路由切换了')
});