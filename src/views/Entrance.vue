<template>
  <Navbar />
  <h1>Entrance/Welcome Page</h1>
  <h3>Hi, {{ user.displayName }}</h3>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import getUser from "../composables/getUser";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "Entrance",
  components: { Navbar },
  setup() {
    // Let's confirm we have the right user
    const { user } = getUser();

    // Translate text based on language
    const showChinese = ref<boolean>(false);
    function translateText(payload: boolean) {
      if (payload) {
        showChinese.value = true;
      } else {
        showChinese.value = false;
      }
    }

    return { user, translateText, showChinese };
  },
});
</script>

<style></style>
