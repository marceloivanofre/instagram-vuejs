import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("jwt")) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    }
    next();
  } else {
    if (localStorage.getItem("jwt")) {
      next({
        path: "/",
        params: { nextUrl: "/" }
      });
    }
    next();
  }
});

export default router;
