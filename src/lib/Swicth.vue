<template>
  <div class="pkm-switch">
    <button :class="{ checked: value }" @click="toggle">
      <span></span>
    </button>
    <p>{{ value }}</p>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    // const ContentModel = {
    //   find: () => {
    //     setTimeout(() => {
    //       const n = 0;
    //       console.log('我执行了')
    //       return n;
    //     }, 1000);
    //   },
    // };

    // let data = "";

    // async function getFind() {
    //   await newContentModel.find().then((res) => {
    //     console.log('res',res)
    //   });
    // }

    // getFind();

    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.pkm-switch {
  button {
    height: $h;
    width: $h * 2;
    border: none;
    background: #999;
    border-radius: $h/2;
    position: relative;
    transition: 250ms;
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      width: $h2;
      height: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: 250ms;
    }
    &.checked {
      background: blue;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
  }
}
</style>
