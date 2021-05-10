<template>
  <h1>Swicth组件</h1>
  <p class="tips">注意：代码示例import 使用的是相对路径，请自行修改为import {组件名} from 'pkm-ui'</p>
  <Demo :component="SwicthDemo1" />
</template>
<script lang="ts">
import { ref } from "vue";
import Demo from "./Demo.vue";
import SwicthDemo1 from "./SwicthDemo1.vue";
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export default {
  components: { Demo, SwicthDemo1 },
  setup() {
    const bool = ref(true);
    return { bool, SwicthDemo1,Prism };
  },
};
</script>
<style lang="scss" scoped>

</style>
