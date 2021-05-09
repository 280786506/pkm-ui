<template>
  <h1>Tabs组件</h1>
  <Demo :component="TabsDemo1" />
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import TabsDemo1 from "../components/TabsDemo1.vue";
import Demo from "../components/Demo.vue";

export default {
  setup(props, context) {
    return { TabsDemo1 };
  },
  components: {
    Tabs,
    Tab,
    Demo,
    TabsDemo1,
  },
};
</script>

