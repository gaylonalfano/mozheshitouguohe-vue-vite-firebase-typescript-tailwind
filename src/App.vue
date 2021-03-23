<template>
  <!-- Don't use BaseLayout if Login or Signup -->
  <div v-if="$route.name === 'Login' || $route.name === 'Signup'">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
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

<style>
/* slide-left */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-left-enter-active {
  transition: all 0.3s ease-in;
}

/* slide-right */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-right-enter-active {
  transition: all 0.3s ease-in;
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
</style>


