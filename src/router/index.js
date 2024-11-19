import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("../views/UserGeneric.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts",
        name: "contact.add",
        component: () => import("../views/UserPost.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;