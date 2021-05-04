<template>
  <template v-if="visible">
    <div class="pkm-dialog-overlay" @click="closeOnClickOverlay"></div>
    <div class="pkm-dialog-wrapper">
      <div class="pkm-dialog">
        <header>标题 <span class="pkm-dialog-close" @click="cancel"></span></header>
        <main>内容</main>
        <footer>
          <Button @click="cancel">取消</Button>
          <Button state="primary" @click="ok">确定</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script>
import Button from "../lib/Button.vue";

export default {
  props: {
    visible: {
      type: Boolean,
    },
    closeOnClickOverlay: {
      type: Boolean,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const closeOnClickOverlay = () => {
      if (closeOnClickOverlay) {
        close();
      }
    };
    const cancel = () => {
      context.emit("cancel");
      close();
    };
    const ok = () => {
      // props.ok && props.ok() 简写=》props.ok?.()
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    return { close, closeOnClickOverlay, cancel, ok };
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.pkm-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
