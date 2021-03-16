<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="max-h-28">
        <img
          class="object-cover h-40 w-full"
          src="../assets/images/摸着石头过河-行云飞白体文字设计.png"
          alt="Workflow"
        />
        <!-- <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> -->
        <!--   Campus Entry -->
        <!-- </h2> -->
      </div>
      <div v-if="showLogin">
        <h3 class="mt-6 text-center text-xl font-bold text-gray-900">Log in</h3>
        <LoginForm @login="enterDashboard" />
        <div class="text-sm py-4 text-center">
          <p>
            No account yet?
            <span
              class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              @click="showLogin = false"
            >
              Sign up</span
            >
            instead.
          </p>
        </div>
      </div>
      <div v-else>
        <h3 class="mt-6 text-center text-xl font-bold text-gray-900">
          Sign up
        </h3>
        <SignupForm @signup="enterDashboard" />
        <div class="py-4 text-sm text-center">
          <p>
            Already registered?
            <span
              class="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500"
              @click="showLogin = true"
            >
              Log in</span
            >
            instead.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// Without alias:  https://github.com/rollup/plugins/issues/759
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  name: "Home",
  components: { LoginForm, SignupForm },
  setup(props, context) {
    // Get router so we can redirect to Chatroom after login
    const router = useRouter();
    // Create a Ref for showLogin data property
    const showLogin = ref<boolean>(true);

    // Create 'login' custom event handler to redirect to /dashboard/user
    // NOTE If user was passed via context.emit() payload, then add as arg to this handler
    // Q: Do I need to define user outside of enterDashboard()? Then return so can use in template?
    // A: No! Just pass user consistent with how you emit it (directly or within payload object)
    // Let's receive our emitted payload as an argument to our custom event handler
    // @ts-ignore
    function enterDashboard(user) {
      // Q: How to find out which event was triggered (login vs. signup)?
      // A: It's a normal event listener so we have access to 'event'
      console.log("enterDashboard fired for @login or @signup event");
      console.log("Home:enterDashboard:user: ", user);
      // console.log(context); // Nope. {expose: f}
      // console.log(context.attrs["user"]); // Nope. undefined
      router.push({ name: "Dashboard" });
      // Q: How to get the user details passed as well? Use context?
      // A: No! We still need to use Firebase methods to get the User, etc. but
      // A: we can then pass it as payload of context.emit('event', payload)
      // console.log(context.attrs); // Proxy {__vInternal: 1}
      // console.log(context.slots); // Proxy {__vInternal: 1}
    }

    return { showLogin, enterDashboard };
  },
});
</script>
