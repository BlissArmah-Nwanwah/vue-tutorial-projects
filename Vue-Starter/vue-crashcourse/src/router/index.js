import { createRouter, createMemoryHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },

];


const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_url),routes
})

export default router