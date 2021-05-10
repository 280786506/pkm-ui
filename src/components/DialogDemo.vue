<template>
  <h1>Dialog组件</h1>
  <p class="tips">注意：代码示例import 使用的是相对路径，请自行修改为import {组件名} from 'pkm-ui'</p>

  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import Demo from "../components/Demo.vue";
import DialogDemo1 from "../components/DialogDemo1.vue";
import DialogDemo2 from "../components/DialogDemo2.vue";

import { ref } from "vue";

export default {
  components: { Dialog, Button, Demo, DialogDemo1, DialogDemo2 },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      console.log("ok");
    };
    const cancel = () => {
      console.log("cancel");
    };
    const open = () => {
      openDialog({
        title: "通过JS设置的标题",
        content: "通过JS设置的内容",
        closeOnClickOverlay: true,
        ok() {},
        cancel() {},
      });
    };
    return { visible, toggle, ok, cancel, open, DialogDemo1, DialogDemo2 };
  },
};
</script>
