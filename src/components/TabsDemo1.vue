<demo>基本使用</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="标题1" name="content1">内容1</Tab>
    <Tab title="标题2" name="content2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";

export default {
  setup(props, context) {
    const selected = ref("content1");
    return { selected };
  },
  components: {
    Tabs,
    Tab,
  },
};
</script>
