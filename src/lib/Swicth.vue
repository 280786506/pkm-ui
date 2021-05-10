<template>
  <div class="pkm-swicth">
    <button :class="{ checked: value }" @click="toggle">
      <img :src="jlq" />
    </button>
  </div>
</template>
<script lang="ts">
import jlq from "../../public/images/jlq.png";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle, jlq };
  },
};
</script>
<style lang="scss">
$h: 32px;
$h2: $h - 4px;
.pkm-swicth {
  button {
    height: $h;
    width: $h * 2;
    border: none;
    background: #999;
    border-radius: $h/2;
    position: relative;
    transition: 250ms;
    > img {
      position: absolute;
      top: 2px;
      left: 2px;
      width: $h2;
      height: $h2;
      border-radius: $h2 / 2;
      transition: 250ms;
      background-size: contain;
      animation: jlq2 250ms linear;
    }
    &.checked {
      background: rgb(229, 43, 43);
      > img {
        left: calc(100% - #{$h2} - 2px);
        animation: jlq 250ms linear;
      }
    }
    @keyframes jlq {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes jlq2 {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
}
</style>
