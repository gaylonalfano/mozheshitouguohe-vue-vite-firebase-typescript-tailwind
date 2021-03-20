<template>
  <header class="py-10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-white">
        <slot :headerText="$route.name"></slot>
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Header",
  setup() {
    // Basic static headerText
    const headerText = ref<string>("Dashboard");

    // Q: How to update headerText? Eg. Use route.name etc.
    // A: Easiest route.name approach is just use $route.name directly in HTML
    const route = useRoute();
    // const headerText = ref<string>(route.value.name); // BROKEN
    console.log(route);
    //const headerTextComputed = computed(() => headerText.value); // BROKEN

    return { headerText, route };
  },
});
</script>

