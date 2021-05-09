<demo>禁用状态</demo>
<template>
  <Button disabled> 卡比兽 </Button>
  <Button  pokemon="kmg" disabled> 卡咪龟 </Button>
  <Button  pokemon="mwzz" disabled> 妙蛙种子 </Button>
  <Button  pokemon="pkq" disabled> 皮卡丘 </Button>
  <Button  pokemon="xhl" disabled> 小火龙 </Button>
</template>
<script>
import Button from "../lib/Button.vue";

export default {
  components: { Button },
};
</script>
<style lang="scss" scoped>
button {
  margin: 10px 10px 10px 10px;
}
</style>
