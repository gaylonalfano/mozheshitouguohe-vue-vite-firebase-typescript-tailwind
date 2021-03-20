<template>
  <nav class="bg-gray-800">
    <!-- Remove the border here if I want continuous look. Keeping for mobile menu. -->
    <!-- Only for LARGE screens -->
    <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div
        class="relative flex items-center justify-between h-16 lg:border-gray-700 lg:border-opacity-25"
      >
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img
              class="block w-8 h-8"
              src="../assets/images/摸circle.png"
              alt="feel"
            />
          </div>
          <div class="hidden lg:block lg:ml-10">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                :to="{ name: 'Home' }"
                :class="[$route.name === 'Home' ? activeClass : inactiveClass]"
                class="px-3 py-2 text-sm font-medium rounded-md"
              >
                Dashboard
              </router-link>

              <router-link
                :to="{ name: 'UserCollections' }"
                :class="[
                  $route.name === 'UserCollections'
                    ? activeClass
                    : inactiveClass,
                ]"
                class="px-3 py-2 text-sm font-medium rounded-md"
              >
                Collections
              </router-link>
            </div>
          </div>
        </div>
        <!-- Search box -->
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <!-- Heroicon name: solid/search -->
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full py-2 pl-10 pr-3 text-gray-300 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md leading-5 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <!-- Only for SMALL/MEDIUM screens -->
        <div class="flex lg:hidden">
          <!-- Mobile menu BUTTON! -->
          <button
            @click="toggleDropdown"
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
                Icon when menu is closed.

                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"

                NOTE: Remove existing block or hidden class!
              -->
            <svg
              :class="dropdownOpen ? 'hidden' : 'block'"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
                
                NOTE: Remove existing block or hidden class!
              -->
            <svg
              :class="dropdownOpen ? 'block' : 'hidden'"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Only for LARGE screen. Profile Dropdown on LARGE screen. -->
        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <button
              class="flex-shrink-0 p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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

            <!-- Profile dropdown on LARGE screen. -->
            <div class="relative flex-shrink-0 ml-4">
              <div>
                <button
                  @click="toggleDropdown()"
                  type="button"
                  class="flex text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CW4pSoYe68&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Your avatar"
                  />
                </button>
              </div>
              <!-- Adding another div for when user clicks outside of dropdown to also close -->
              <!-- https://github.com/wobsoriano/v-dashboard/blob/master/src/components/Header.vue -->
              <div
                v-show="dropdownOpen"
                @click="toggleDropdown()"
                class="fixed inset-0 z-10 w-full h-full"
              ></div>

              <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"

                    NOTE: Make this z-index LOWER from backdrop/mask!
                    Otherwise you can't click the modal elements!
                  -->
              <div
                v-show="dropdownOpen"
                class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <router-link
                  :to="{ name: 'Profile' }"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  >Your Profile</router-link
                >
                <router-link
                  :to="{ name: 'Settings' }"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  >Settings</router-link
                >
                <span
                  @click="handleLogout"
                  class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                >
                  Sign out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state (ie. remove md:hidden). -->
    <div
      v-show="dropdownOpen"
      :class="dropdownOpen ? 'lg:hidden' : 'md:hidden'"
      class="border-b border-gray-700"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          :to="{ name: 'Home' }"
          :class="[$route.name === 'Home' ? activeClass : inactiveClass]"
          class="block px-3 py-2 text-base font-medium rounded-md"
          >Dashboard</router-link
        >
        <router-link
          :to="{ name: 'UserCollections' }"
          :class="[
            $route.name === 'UserCollections' ? activeClass : inactiveClass,
          ]"
          class="block px-3 py-2 text-base font-medium rounded-md"
          >Collections</router-link
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
            <div class="text-base font-medium text-white">
              {{ user?.displayName }}
            </div>
            <div class="text-sm font-medium text-gray-400">
              {{ user?.email }}
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
          <router-link
            :to="{ name: 'Profile' }"
            :class="[$route.name === 'Profile' ? activeClass : inactiveClass]"
            class="block px-3 py-2 text-base font-medium rounded-md"
            >Your Profile</router-link
          >
          <router-link
            :to="{ name: 'Settings' }"
            :class="[$route.name === 'Settings' ? activeClass : inactiveClass]"
            class="block px-3 py-2 text-base font-medium rounded-md"
            >Settings</router-link
          >
          <!-- <router-link -->
          <!--   class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700" -->
          <!--   >Sign out</router-link -->
          <!-- > -->
          <button
            @click="handleLogout"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import useToggle from "../composables/useToggle";

export default defineComponent({
  name: "Navbar",
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    //const [value, toggle] = useToggle();
    // NOTE Can also rename the variables if you wish
    const [dropdownOpen, toggleDropdown] = useToggle();
    // Q: Can you import/declare multiple useToggle() for different toggles?
    // A: Looks like I can as long as they names don't conflict
    // const [notificationsOpen, toggleNotifications] = useToggle();
    // const [mobileMenuOpen, toggleMobileMenu] = useToggle();
    // const isOpen = ref<boolean>(false);
    // const toggleOpen = useToggle(isOpen); // RefImpl {}
    // const toggleOpen = useToggle(isOpen.value); // false

    // Create some active/inactive CSS classes
    const activeClass = ref<string>("bg-gray-900 text-white");
    const inactiveClass = ref<string>(
      "text-gray-300 hover:bg-gray-700 hover:text-white"
    );

    const router = useRouter();

    // Handle the logout and
    async function handleLogout() {
      await logout();
      // redirect to '/' Login page
      if (!error.value) {
        console.log("SUCCESS:handleLogout");
        router.push({ name: "Login" });
      }
    }

    return {
      error,
      handleLogout,
      user,
      dropdownOpen,
      toggleDropdown,
      activeClass,
      inactiveClass,
    };
  },
});
</script>

<style>
</style>

