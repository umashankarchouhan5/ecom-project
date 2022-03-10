import Vue from "vue";
import VueRouter from "vue-router";
import beforeEach from "./hooks/beforeEach";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home",
      auth: true,
    },
    component: () => import("../pages/Master"),
    children: [
      {
        path: "/products",
        name: "Products",
        meta: {
          title: "products",
          auth: true,
        },
        component: () => import("../pages/Products"),
      },
      {
        path: "/product/:id",
        name: "Product",
        meta: {
          title: "product",
          auth: true,
        },
        component: () => import("../pages/SingleProduct"),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/cart",
        name: "Cart",
        meta: {
          title: "cart",
          auth: true,
        },
        component: () => import("../pages/Cart"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "login",
      auth: true,
    },
    component: () => import("../components/Login"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//router.beforeEach(beforeEach);

export default router;
