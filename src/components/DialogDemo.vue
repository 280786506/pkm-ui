<template>
  <div>
    <h1>Dialog组件</h1>
    <h2>基础用法</h2>
    <Button state="primary" @click="toggle"> 打开Dialog  </Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="true" 
    :ok="ok" :cancel="cancel">
    <template v-slot:title>
        <div>标题222</div>
      </template>
      <template v-slot:content>
        <div>123</div>
      </template>
    </Dialog>
    <!--:visible="visible" @update:visible="visible = $event" -->
  </div>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from 'vue';

export default {
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value
    }
    const ok=()=>{
      console.log('ok');

    }
    const cancel = ()=>{
      console.log('cancel');
    }
    return {visible,toggle,ok,cancel}
  },
  components: {
    Dialog,
    Button
  },
};
</script>
<style lang=""></style>
