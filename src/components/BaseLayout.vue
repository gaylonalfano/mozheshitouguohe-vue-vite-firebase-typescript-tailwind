<template>
  <div class="min-h-screen bg-gray-100">
    <div class="pb-32 bg-gray-800">
      <Navbar />
      <!-- <Header /> -->
      <Header>
        <template v-slot:default="slotProps">
          {{ slotProps.headerText }}
        </template>
      </Header>
    </div>

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <div class="border-4 border-gray-200 border-dashed rounded-lg h-96">
            <!-- This is where <router-view /> gets inserted from App.vue -->
            <slot />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    Navbar,
    Header,
  },
});
</script>

<style></style>

