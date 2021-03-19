<template>
  <!-- Don't use BaseLayout if Login or Signup -->
  <div v-if="$route.name === 'Login' || $route.name === 'Signup'">
    <router-view />
  </div>
  <!-- Use BaseLayout to wrap around router-view -->
  <div v-else>
    <BaseLayout>
      <!-- BASE LAYOUT -->
      <router-view />
    </BaseLayout>
  </div>
</template> 

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "./components/BaseLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
  },
});
</script>

