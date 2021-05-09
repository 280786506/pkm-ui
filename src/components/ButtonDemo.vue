<template>
  <h1>Button组件</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
</template>
<script>
import Button from "../lib/Button.vue";
import Demo from "../components/Demo.vue";
import ButtonDemo1 from "../components/ButtonDemo1.vue";
import ButtonDemo2 from "../components/ButtonDemo2.vue";
import ButtonDemo4 from "../components/ButtonDemo4.vue";
import ButtonDemo5 from "../components/ButtonDemo5.vue";



export default {
  components: { Button,Demo ,ButtonDemo1,ButtonDemo2,ButtonDemo4,ButtonDemo5},
  setup(){
    return{ButtonDemo1,ButtonDemo2,ButtonDemo4,ButtonDemo5}
  }
};
</script>
<style lang="scss" scoped>
button {
  margin: 10px 10px 10px 10px;
}
</style>
