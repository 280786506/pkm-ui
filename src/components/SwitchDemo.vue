<template>
  <div>
      <!--  :value="y" @update:value="y = $event" -->
    <Switch v-model:value="y" />
  </div>
</template>
<script>
import { ref } from "vue";
import Switch from "../lib/Swicth.vue";
export default {
  components: { Switch },
  setup() {
    const y = ref(true);
    return {y}
  },
};
</script>
<style lang=""></style>
