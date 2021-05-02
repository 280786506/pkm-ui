<template>
  <div>
      <!--  :value="y" @update:value="y = $event" -->
    <Switch v-model:value="bool" />
  </div>
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
<style lang=""></style>
