<template>
  <h1>Tabs组件</h1>
  <p class="tips">注意：代码示例import 使用的是相对路径，请自行修改为import {组件名} from 'pkm-ui'</p>

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

