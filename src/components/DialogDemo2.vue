<demo>使用JS打开</demo>
<template>
    <Button state="primary" @click="open"> 通过JS打开 </Button>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";

import { ref } from "vue";

export default {
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
        closeOnClickOverlay:true,
        ok(){
        },
        cancel(){
        }
      });
    };
    return { visible, toggle, ok, cancel, open };
  },
  components: {
    Dialog,
    Button,
  },
};
</script>
<style lang=""></style>
