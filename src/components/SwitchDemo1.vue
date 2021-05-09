<demo>基础用法</demo>
<template>
  <Switch v-model:value="bool" />
</template>
<script>
import { ref } from "vue";
import Switch from "../lib/Swicth.vue";
export default {
  components: { Switch },
  setup() {
    const bool = ref(true);
    return {bool}
  },
};
</script>
