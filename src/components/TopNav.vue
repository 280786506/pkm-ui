<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pokecoin"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
      <li>
        <router-link to="/">GitHub</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu" v-if="navVisible">
      <div class="toggleAsideIconBox">
        <svg class="icon tIcon2" aria-hidden="true" v-if="menuVisible">
          <use xlink:href="#icon-open-pokeball"></use>
        </svg>
        <svg class="icon tIcon1" aria-hidden="true" v-else>
          <use xlink:href="#icon-pokeball"></use>
        </svg>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    navVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu, menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      font-size: 36px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      display: flex;
      align-items: center;
      font-size: 14px;
      &:hover {
        color: #1890ff
      }
    }
  }
  .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    /* background: red; */
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > .toggleAsideIconBox {
      /* position: relative; */
      > svg {
        font-size: 24px;
        position: absolute;
      }
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
@media (min-width: 500px) {
  .topnav {
    padding: 12px 200px;
  }
}
@media (max-width: 500px) {
  .topnav {
    padding: 12px 0;
  }
}
</style>
