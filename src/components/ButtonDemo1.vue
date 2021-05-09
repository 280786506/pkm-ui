<demo>基础用法</demo>
<template>
  <Button> 卡比兽 </Button>
  <Button  pokemon="kmg"> 卡咪龟 </Button>
  <Button  pokemon="mwzz"> 妙蛙种子 </Button>
  <Button  pokemon="pkq"> 皮卡丘 </Button>
  <Button  pokemon="xhl"> 小火龙 </Button>
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
