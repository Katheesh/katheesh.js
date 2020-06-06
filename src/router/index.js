import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import '../../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home - KATHEESH\'s official Website',
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
    meta: {
      title: 'About - KATHEESH\'s official Website',
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import("../views/Blog.vue"),
    meta: {
      title: 'Blogs - KATHEESH\'s official Website',
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue"),
    meta: {
      title: 'Contact - KATHEESH\'s official Website',
    }
  }
];

/*const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});*/

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  });
  router.beforeEach((to, from, next) => {
    /* It will change the title when the router is change*/
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });

  router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })

export default router;
