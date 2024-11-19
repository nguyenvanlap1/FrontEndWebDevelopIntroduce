import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/UserSingle.vue";
import NotFound from "../views/NotFound.vue";
import UserGeneric from "../views/UserGeneric.vue";
import UserPost from "../views/UserPost.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },{
        path: "/user/:name",
        name: "User",
        component: User,
        children: [
            {
            path: "profile",
            component: Profile
            },
            {
            path: "posts",
            component: UserPost
            }
        ]
    }, {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: NotFound
    } ,{
        path: "/user-:afterUser(.*)",
        component: UserGeneric
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;