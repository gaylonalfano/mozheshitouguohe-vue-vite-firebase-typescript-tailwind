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
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-4">
      <div class="max-h-28">
        <img
          class="object-cover h-40 w-full"
          src="../../assets/images/摸着石头过河-行云飞白体文字设计.png"
          alt="Workflow"
        />
        <!-- <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> -->
        <!--   Campus Entry -->
        <!-- </h2> -->
      </div>
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
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
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
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
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
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
      <div class="text-sm text-center">
        <p>
          No account yet?
          <router-link
            class="font-medium text-yellow-500 cursor-pointer hover:text-yellow-400"
            :to="{ name: 'Signup' }"
          >
            Sign up
          </router-link>
          instead.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useLogin from "../../composables/useLogin";

export default defineComponent({
  name: "Login",
  setup(props, context) {
    // Extract composable functionality
    const { login, error, isPending } = useLogin();

    // Create some bound data properties for form inputs
    const email = ref<string>("");
    const password = ref<string>("");

    const router = useRouter();

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
        console.log(
          "SUCCESS:Login:handleLogin:response.user: ",
          response?.user
        );

        router.push({ name: "Home" });
      }
    }

    return { handleLogin, email, password, error };
  },
});
</script>
