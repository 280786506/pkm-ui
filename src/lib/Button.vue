<template>
  <div class="pkm-button-box">
    <button class="pkm-button" :class="classes" :disabled="disabled">
      <span class="pkm-loading" v-if="loading"></span>
      <slot />
    </button>
    <img
      class="pkm-button-img"
      :src="images[stateKey.indexOf(`pkm-pokemon-${pokemon}`)]" v-if="!classes['pkm-theme-text']"
    />
  </div>
</template>
<script>
import { computed } from "vue";
// import x from '../assets/icons/yi.svg'
export default {
  props: {
    theme: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    pokemon: {
      type: String,
      default: "kbs",
    },
    size: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, disabled, pokemon, size, loading } = props;
    const classes = computed(() => {
      let c = {
        [`pkm-theme-${theme}`]: theme,
        [`pkm-pokemon-${pokemon}`]: pokemon,
        [`pkm-size-${size}`]: size,
      };
      if (disabled) {
        c[`pkm-theme-${pokemon}-disabled`] = `${disabled}`;
      }
      if (loading) {
        c[`pkm-theme-${pokemon}-loading`] = `${loading}`;
      }
      return c;
    });
    const stateKey = [
      'pkm-pokemon-kbs',
      'pkm-pokemon-kmg',
      'pkm-pokemon-mwzz',
      'pkm-pokemon-pkq',
      'pkm-pokemon-xhl'
    ]
    const images = [
      '../../public/images/kbs.png',
      '../../public/images/kmg.png',
      '../../public/images/mwzz.png',
      '../../public/images/pkq.png',
      '../../public/images/xhl.png'
    ]
    return { classes ,images,stateKey};
  },
  // inheritAttrs: false, //继承属性 false
};
</script>
<style lang="scss">
$h: 64px;
$border-color: #e2e2e2;
$color: #333;
$blue: #409eff;
$green: #67c23a;
$yellow: #e6a23c;
$red: #f56c6c;


$radius: 4px;
.pkm-button-box{
  position: relative;
  display: inline-block;
  margin: 20px 10px;
  /* z-index: 2; */
  /* height: $h; */
  &:hover .pkm-button-img{
    top: -16px;
  }
 > .pkm-button-img {
    position: absolute;
    top: -10px;
    right: -7px;
    height: 30px;
    transition: 0.25s;
  }
}
.pkm-button {
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  & + & {
    margin-left: 8px;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &:hover,
  &:focus {
    outline: none;
  }

  /* color */
  &.pkm-pokemon-kbs {
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
    }
    &.pkm-theme-kbs-disabled {
      color: #c0c4cc;
      background-color: #fff;
      border-color: #ebeef5;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  &.pkm-pokemon-kmg {
    background: $blue;
    border: 1px solid $blue;
    color: white;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
    &.pkm-theme-kmg-disabled {
      background-color: #a0cfff;
      border-color: #a0cfff;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  &.pkm-pokemon-mwzz {
    background: $green;
    border: 1px solid $green;
    color: white;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
    }
    &:active {
      background: #5daf34;
      border-color: #5daf34;
    }
    &.pkm-theme-mwzz-disabled {
      background-color: #b3e19d;
      border-color: #b3e19d;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  &.pkm-pokemon-pkq {
    background: $yellow;
    border: 1px solid $yellow;
    color: white;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
    }
    &:active {
      background: #cf9236;
      border-color: #cf9236;
    }
    &.pkm-theme-pkq-disabled {
      background-color: #f3d19e;
      border-color: #f3d19e;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  &.pkm-pokemon-xhl {
    background: $red;
    border: 1px solid $red;
    color: white;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      outline: none;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
    }
    &.pkm-theme-xhl-disabled {
      background-color: #fab6b6;
      border-color: #fab6b6;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  /* text */
  &.pkm-theme-text {
    border: none;
    box-shadow: none;
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    &:hover,
    &:focus {
      color: #66b1ff;
      background-color: transparent;
    }
    &:active {
      color: #3a8ee6;
      background-color: transparent;
    }
    &.pkm-theme-default-disabled {
      color: #c0c4cc;
      background-color: transparent;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
  /* size */
  &.pkm-size-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.pkm-size-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.pkm-size-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  /* loding */
  > .pkm-loading {
    margin-right: 5px;
    width: 10px;
    height: 10px;
    display: inline-block;
    border-top: 1px solid $blue;
    border-right: 1px solid $blue;
    border-bottom: 1px solid $blue;
    border-radius: 50%;
    animation: pkm-animation 1s linear infinite;
  }
  @keyframes pkm-animation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.pkm-pokemon-kmg,
  &.pkm-pokemon-mwzz,
  &.pkm-pokemon-pkq,
  &.pkm-pokemon-xhl {
    > .pkm-loading {
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
