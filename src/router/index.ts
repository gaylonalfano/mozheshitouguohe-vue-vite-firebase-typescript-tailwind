import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";

import { auth } from "../firebase/config";
import Signup from "../views/auth/Signup.vue";
import Login from "../views/auth/Login.vue";
import Home from "../views/Home.vue";
import ToggleDemo from "../views/ToggleDemo.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import UserCollections from "../views/collections/UserCollections.vue";

// Creating another Route Guard for Home page for logged-in users
// They should be redirected to Dashboard if logged in already
function requireNoAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // Grab current user if logged in
  let user = auth.currentUser;
  console.log("RouterGuard:requireNoAuth:user ", user);

  if (user) {
    // Redirect to Home route
    next({ name: "Home" });
  } else {
    // Let them through/continue to Login page
    next();
  }
}

// Create a Route Guard (Auth Guard) function
// NOTE Going to use FB auth to grab currentUser (if available)
// NOTE Need to register this Auth Guard to Dashboard
// NOTE We add to, from, next because it aligns with beforeEnter method
// Q: How to add vue-router types so I don't have to use ts-ignore?
// A: Import from vue-router. Note difference btw expression vs. declaration syntax
function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // NOTE We don't use our getUser composable because we don't need to
  // listen to AuthState changes, etc.
  let user = auth.currentUser;
  // console.log(`RouterGuard:requireAuth:user: ${user}`); // [Object object]
  console.log("RouterGuard:requireAuth:user: ", user); // Works!

  if (!user) {
    // Unauthorized (user is null) so send back to Login page
    next({ name: "Login" });
  } else {
    // Need to invoke next() to move forward
    next();
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: requireNoAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // beforeEnter: requireNoAuth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    // beforeEnter: requireNoAuth,
  },
  {
    path: "/toggle",
    name: "ToggleDemo",
    component: ToggleDemo,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    // beforeEnter: requireNoAuth,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    // beforeEnter: requireNoAuth,
  },
  {
    path: "/collections/user",
    name: "UserCollections",
    component: UserCollections,
    // beforeEnter: requireNoAuth,
  },
];

const router = createRouter({
  // For basic Vite doesn't pass history arg
  history: createWebHistory(),
  routes,
});

export default router;
