import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router"
import * as Icons from '@element-plus/icons-vue'
import { navigationMixin } from '@/mixins/navigationMixin';
import { globalMixin } from '@/mixins/globalMixin';

const app=createApp(App)
// 注入导航跳转
app.mixin(navigationMixin);
// 注入全局变量
app.mixin(globalMixin);
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(router).use(ElementPlus).mount('#app')
