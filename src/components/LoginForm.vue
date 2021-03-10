<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          v-model="email"
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
        />
      </div>
    </div>
    <div v-if="error">
      <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
    </div>
    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <!-- <span class="absolute left-0 inset-y-0 flex items-center pl-3"> -->
        <!--   <!-1- Heroicon name: lock-closed -1-> -->
        <!--   <svg -->
        <!--     class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" -->
        <!--     xmlns="http://www.w3.org/2000/svg" -->
        <!--     viewBox="0 0 20 20" -->
        <!--     fill="currentColor" -->
        <!--     aria-hidden="true" -->
        <!--   > -->
        <!--     <path -->
        <!--       fill-rule="evenodd" -->
        <!--       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" -->
        <!--       clip-rule="evenodd" -->
        <!--     /> -->
        <!--   </svg> -->
        <!-- </span> -->
        Log in
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useLogin from "../composables/useLogin";

export default defineComponent({
  name: "LoginForm",
  emits: {
    login(user) {
      console.log("login function payload VALIDATION: ", user);
      return !!user;
    },
  },
  setup(props, context) {
    // Extract composable functionality
    const { login, error, isPending } = useLogin();

    // Create some bound data properties for form inputs
    const email = ref<string>("");
    const password = ref<string>("");

    // Form submit handler
    async function handleLogin() {
      // UPDATE If you save 'response' then you can get the user via
      // response.user (instead of via auth.currentUser)
      // Testing whether I can get user from response object instead
      // of auth.currentUser
      const response = await login(email.value, password.value);
      // Works but need auth.currentUser since you're not saving response
      // await login(email.value, password.value);

      // Confirm successful and context.emit("login") to Parent
      if (!error.value) {
        // Need emit custom event and auth user
        // Q: Could we get user from the await login() response?
        // A: Yes! You can use response?.user to achieve the same thing
        // const user = auth.currentUser;
        // context.emit("login", user);
        context.emit("login", response?.user);

        // TODO Add ADMIN user group distinction
        // Reroute to Home/Entrance if NOT admin group
        // if (userGroups == undefined) {
        //   // User doesn't have a auth group.
        //   router.push({ name: "Home" });
        // } else if (userGroups.includes("admin")) {
        //   router.push({ name: "AdminDashboard" });
        // }
      }
    }

    return { handleLogin, email, password, error };
  },
});
</script>

