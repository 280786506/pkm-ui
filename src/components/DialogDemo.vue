<template>
  <div>
    <h1>Dialog组件</h1>
    <h2>基础用法</h2>
    <Button state="primary" @click="toggle"> 打开Dialog </Button>
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="true"
      :ok="ok"
      :cancel="cancel"
    >
      <template v-slot:title>
        <div>标题222</div>
      </template>
      <template v-slot:content>
        <div>123</div>
      </template>
    </Dialog>

    <Button state="primary" @click="open"> 通过JS打开 </Button>

    <!--:visible="visible" @update:visible="visible = $event" -->
  </div>
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
