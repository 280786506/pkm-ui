<template>
  <h1>Switch组件</h1>
  <Demo :component="SwitchDemo1" />
</template>
<script lang="ts">
import { ref } from "vue";
import Demo from "../components/Demo.vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export default {
  components: { Demo, SwitchDemo1 },
  setup() {
    const bool = ref(true);
    return { bool, SwitchDemo1,Prism };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
