<template>
  <!-- Replace with your content. Goes into BaseLayout <slot /> -->
  <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
    <div class="border-4 border-gray-200 border-dashed rounded-lg h-96">
      <h2>Home Component content</h2>
      <h3>Route: {{ $route.name }}</h3>
    </div>
  </div>
  <!-- /End replace -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style></style>
