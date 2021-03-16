<template>
  <div>
    <div class="bg-gray-800 pb-32">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8"
                    src="../assets/images/摸circle.png"
                    alt="Workflow"
                  />
                </div>
                <div class="hidden md:block">
                  <div class="flex items-baseline ml-10 space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                      >Dashboard</a
                    >

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                      >Team</a
                    >

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                      >Projects</a
                    >

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                      >Calendar</a
                    >

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                      >Reports</a
                    >
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="flex items-center ml-4 md:ml-6">
                  <button
                    class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span class="sr-only">View notifications</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <!-- Profile dropdown -->
                  <div class="relative ml-3">
                    <div>
                      <button
                        type="button"
                        class="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CW4pSoYe68&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                    <div
                      class="absolute right-0 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Your Profile</a
                      >

                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >

                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Sign out</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex -mr-2 md:hidden">
                <!-- Mobile menu button -->
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <!--
                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                -->
                  <svg
                    class="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <!--
                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                -->
                  <svg
                    class="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="border-b border-gray-700 md:hidden" id="mobile-menu">
          <div class="px-2 py-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              >Dashboard</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >Team</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >Projects</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >Calendar</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >Reports</a
            >
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CW4pSoYe68&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div class="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div class="px-2 mt-3 space-y-1">
              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >Your Profile</a
              >

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >Settings</a
              >

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </nav>
      <header class="py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Dashboard</h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <div
            class="border-4 border-gray-200 border-dashed rounded-lg h-96"
          ></div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>



<!-- <template> -->
<!--   <!-1- This example requires Tailwind CSS v2.0+ -1-> -->
<!--   <nav class="bg-gray-800"> -->
<!--     <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> -->
<!--       <div class="flex justify-between h-16"> -->
<!--         <div class="flex items-center flex-shrink-0"> -->
<!--           <router-link :to="{ name: 'Dashboard' }"> -->
<!--             <img -->
<!--               class="block w-auto h-8" -->
<!--               src="../assets/images/摸circle.png" -->
<!--               alt="feel" -->
<!--             /> -->
<!--           </router-link> -->
<!--         </div> -->
<!--         <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4"> -->
<!--           <!-1- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -1-> -->
<!--           <h1 class="px-3 py-2 text-2xl font-medium text-white rounded-md"> -->
<!--             <router-link :to="{ name: 'Dashboard' }"> -->
<!--               Balance Tracker</router-link -->
<!--             > -->
<!--           </h1> -->
<!--         </div> -->
<!--         <div class="flex items-center space-x-4"> -->
<!--           <div class="flex-shrink-0"> -->
<!--             <router-link -->
<!--               :to="{ name: 'Home' }" -->
<!--               class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent shadow-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" -->
<!--             > -->
<!--               <!-1- Heroicon name: plus -1-> -->
<!--               <svg -->
<!--                 class="w-5 h-5 mr-2 -ml-1" -->
<!--                 xmlns="http://www.w3.org/2000/svg" -->
<!--                 viewBox="0 0 20 20" -->
<!--                 fill="currentColor" -->
<!--                 aria-hidden="true" -->
<!--               > -->
<!--                 <path -->
<!--                   fill-rule="evenodd" -->
<!--                   d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" -->
<!--                   clip-rule="evenodd" -->
<!--                 /> -->
<!--               </svg> -->
<!--               <span>New Member</span> -->
<!--             </router-link> -->
<!--           </div> -->
<!--           <div v-if="user" class="flex-shrink-0"> -->
<!--             <button -->
<!--               @click="handleLogout" -->
<!--               type="button" -->
<!--               class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent shadow-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" -->
<!--             > -->
<!--               Logout -->
<!--             </button> -->
<!--           </div> -->
<!--           <div v-else class="flex-shrink-0"> -->
<!--             <router-link -->
<!--               :to="{ name: 'Home' }" -->
<!--               class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent shadow-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" -->
<!--             > -->
<!--               Login -->
<!--             </router-link> -->
<!--           </div> -->
<!--         </div> -->
<!--       </div> -->
<!--     </div> -->
<!--   </nav> -->
<!-- </template> -->



<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default defineComponent({
  name: "Navbar",
  setup(props, context) {
    // Use composables
    const { error, logout } = useLogout();
    const { user } = getUser();
    console.log(user.value);

    const router = useRouter();

    // Handle the logout and
    async function handleLogout() {
      await logout();
      // redirect to '/' Home page
      if (!error.value) {
        console.log("SUCCESS:handleLogout");
        router.push({ name: "Home" });
      }
    }

    return { error, handleLogout, user };
  },
});
</script>

<style>
</style>

