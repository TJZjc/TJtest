import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router"
import * as Icons from '@element-plus/icons-vue'

const app=createApp(App)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(router).use(ElementPlus).mount('#app')
