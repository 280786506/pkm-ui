<template>
  <div class="layout">
    <TopNav class="nav" navVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <h4>文档</h4>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/getStarted">开始</router-link></li>
        </ol>
        <h4 >组件</h4>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
  components: { TopNav },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 50px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 60px 16px 16px 40px;
    background: rgb(255, 255, 255);
  }
}
aside {
  background: white;
  width: 150px;
  padding: 16px ;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  z-index: 2;
  height: 100%;

  box-shadow: 0 0 10px #999;
  > h4 {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: 0.15s ease-out;
    font-weight: 700;
    margin-top:15px;
  }
  > ol {
    padding-right: 10px;
    > li {
      > a {
        display: block;
        width: 100%;
        transition: 0.25s;
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        &:hover {
          /* background: url("../../public/images/jlq.png") no-repeat 100%; */
          background-size: 15%;
          margin-left: 5px;
          color: #e32a2a;
          font-weight: bold;
        }
      }
      > .router-link-active {
        /* background-image: url(require("../../public/images/jlq.png")); */
        background-size: 15%;
        margin-left: 5px;
        color: #e32a2a;
        font-weight: bold;
      }
    }
  }
  > main {
    overflow: auto;
  }
  /* @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  } */
}
</style>
