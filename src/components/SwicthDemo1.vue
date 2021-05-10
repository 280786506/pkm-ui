<demo>基础用法</demo>
<template>
  <Swicth v-model:value="bool" />
</template>
<script>
import { ref } from "vue";
import Swicth from "../lib/Swicth.vue";
export default {
  components: { Swicth },
  setup() {
    const bool = ref(true);
    return {bool}
  },
};
</script>
