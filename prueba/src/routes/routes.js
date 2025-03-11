import { createRouter, createWebHashHistory} from 'vue-router';
import Micomponente from '../components/Micomponente.vue';


const routes = [
    { path: '/', component: Micomponente },
    { path: '/home', component: Micomponente },
    { path: '/blogs', component: () => import("../components/Blogs.vue") },
    { path: '/juegos', component: () => import("../components/Juegos.vue") }, 
    { path: '/personas', component: () => import("../components/Personas.vue") },
    { path: '/peliculas', component: () => import("../components/Peliculas.vue") },
    { path: '/:catchAll(.*)', component: () => import("../components/Error.vue")}

]; 

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router; 