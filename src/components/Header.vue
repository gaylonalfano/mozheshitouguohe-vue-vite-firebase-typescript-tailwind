<template>
  <header class="py-10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- <h1 class="text-3xl font-bold text-white">Dashboard</h1> -->
      <!-- Adding a slot to make dynamic -->
      <h1 class="text-3xl font-bold text-white">
        <slot></slot>
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "Header";
  },
});
</script>

