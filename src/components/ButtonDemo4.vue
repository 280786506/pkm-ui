<demo>不同尺寸</demo>
<template>
  <Button> 卡比兽 </Button>
  <Button size="medium" pokemon="kmg"> 卡咪龟 </Button>
  <Button size="small" pokemon="mwzz"> 妙蛙种子 </Button>
  <Button size="mini" pokemon="pkq"> 皮卡丘 </Button>
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
