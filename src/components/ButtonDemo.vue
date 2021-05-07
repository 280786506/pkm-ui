<template>
  <h1>Button组件</h1>
  <h2>基础用法</h2>
  <div>
    <Button> 默认按钮 </Button>
    <Button theme="button" state="primary"> 主要按钮 </Button>
    <Button theme="button" state="success"> 成功按钮 </Button>
    <Button theme="button" state="warning"> 警告按钮 </Button>
    <Button theme="button" state="danger"> 危险按钮 </Button>
  </div>
  <h2>禁用状态</h2>
  <div>
    <Button disabled> 默认按钮 </Button>
    <Button theme="button" state="primary" disabled> 主要按钮 </Button>
    <Button theme="button" state="success" disabled> 成功按钮 </Button>
    <Button theme="button" state="warning" disabled> 警告按钮 </Button>
    <Button theme="button" state="danger" disabled> 危险按钮 </Button>
  </div>
  <h1>文字按钮</h1>
  <div>
    <Button theme="text" state="success"> 文字按钮 </Button>
    <Button theme="text" disabled> 文字按钮 </Button>
  </div>
  <h1>不同尺寸</h1>
  <div>
    <Button> 默认按钮 </Button>
    <Button size="medium"> 中等按钮 </Button>
    <Button size="small"> 小型按钮 </Button>
    <Button size="mini"> 超小按钮 </Button>
  </div>
  <h1>loding</h1>
  <div>
    <div>
      <Button disabled :loading="true"> 默认按钮 </Button>
      <Button theme="button" state="primary" disabled :loading="true">
        主要按钮
      </Button>
      <Button theme="button" state="success" disabled :loading="true">
        成功按钮
      </Button>
      <Button theme="button" state="warning" disabled :loading="true">
        警告按钮
      </Button>
      <Button theme="button" state="danger" disabled :loading="true">
        危险按钮
      </Button>
    </div>
  </div>
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
