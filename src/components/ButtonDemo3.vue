<demo>文字按钮</demo>
<template>
  <Button theme="text" state="success"> 文字按钮 </Button>
  <Button theme="text" disabled> 文字按钮 </Button>
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
