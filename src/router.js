import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import exone from "@/components/exone.vue";
import extwo from "@/components/extwo.vue";
import exthree from "@/components/exthree.vue";
import exfour from "@/components/exfour.vue";
import exfive from "@/components/exfive.vue";
import exsix from "@/components/exsix.vue";

const routes = [
    {
        path: '/ex1',
        component: exone
    },
    {
        path:'/moren',
        component: HelloWorld
    },
    {
        path:'/ex2',
        component: extwo
    },
    {
        path:'/ex3',
        component: exthree
    },
    {
        path:'/ex4',
        component: exfour
    },
    {
        path:'/ex5',
        component: exfive
    },
    {
        path:'/',
        component: exsix
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
