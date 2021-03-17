<script lang="ts">
import { defineComponent } from "vue";
import useToggle from "../composables/useToggle";

export default defineComponent({
  name: "ToggleDemo",
  setup() {
    const [value, toggle] = useToggle();
    // Q: Can you declare multiple toggles with useToggle?
    // A: Looks like I can as long as they names don't conflict
    const [other, toggleOther] = useToggle();

    return { value, toggle, other, toggleOther };
  },
});
</script>

<template>
  <div class="flex-row content-between">
    <p :class="value ? 'text-green-300' : 'text-red-300'">
      Value: {{ value ? "ON" : "OFF" }}
    </p>
    <button @click="toggle()" class="bg-blue-100">Toggle</button>
    <button @click="value = true" class="bg-green-100">Set ON</button>
    <button @click="value = false" class="bg-red-100">Set OFF</button>
  </div>
  <div v-show="value">VALUE</div>
  <div v-show="other">OTHER</div>
  <br />
  <br />
  <div class="flex-row content-between">
    <p :class="other ? 'text-green-300' : 'text-red-300'">
      Other: {{ other ? "ON" : "OFF" }}
    </p>
    <button @click="toggleOther()" class="bg-blue-100">Toggle</button>
    <button @click="other = true" class="bg-green-100">Set ON</button>
    <button @click="other = false" class="bg-red-100">Set OFF</button>
  </div>
  <div v-show="value">VALUE</div>
  <div v-show="other">OTHER</div>
</template>
