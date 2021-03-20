<template>
  <!-- Replace with your content. Goes into BaseLayout <slot /> -->
  <h2>Home Component content</h2>
  <h3>Route: {{ $route.name }}</h3>
  <!-- /End replace -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style></style>
