<demo>loding</demo>
<template>
  <Button disabled :loading="true"> 卡比兽 </Button>
  <Button  pokemon="kmg" disabled :loading="true"> 卡咪龟 </Button>
  <Button  pokemon="mwzz" disabled :loading="true"> 妙蛙种子 </Button>
  <Button  pokemon="pkq" disabled :loading="true">  皮卡丘 </Button>
  <Button  pokemon="xhl" disabled :loading="true"> 小火龙 </Button>
</template>
<script>
import Button from "../lib/Button.vue";

export default {
  components: { Button },
};
</script>
<style lang="scss" scoped>
h1 {
  margin: 10px 0;
}
h2 {
  margin: 15px 0;
}
button {
  margin: 10px 10px 10px 10px;
}
</style>
