<template>
  <div class="home">
    <div class="topnavAndBanner">
      <TopNav />
      <div class="banner">
        <h1>PKM-UI</h1>
        <h2>基于VUE3.0的UI框架</h2>
        <p class="actions">
          <a href="#">
            <Button>
              <svg>
                <use xlink:href="#icon-huaban88"></use>
              </svg>
              GitHub
            </Button>
          </a>
          <router-link to="/doc/getStarted"
            ><Button>
              <svg>
                <use xlink:href="#icon-ultra-ball"></use>
              </svg>
              开始</Button
            ></router-link
          >
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-source-code"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁,易读易懂</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Button from "../lib/Button.vue";
export default {
  components: { TopNav, Button },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(
    90deg,
    rgba(225, 244, 250, 1) 0%,
    rgba(158, 204, 253, 1) 100%
    
  ); */
  background: rgb(243, 249, 254);
  position: relative;
}
.topnavAndBanner {
}
.banner {
  color: #333;
  padding: 150px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    /* font-size: 48px; */
    font-size: 78px;
    font-weight: bold;
    margin: 0;
    line-height: 48px;
  }
  > h2 {
    /* font-size: 18px; */
    font-size: 32px;
    line-height: 28px;
    margin: 60px 0 30px 0;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      display: inline-block;
      $h: 28px;
      > div {
        > button {
          display: flex;
          padding: 10px;
          > svg {
            margin-right: 5px;
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 62px;
    }
    > h2 {
      font-size: 24px;
    }
  }
}
.features {
  @media (min-width: 500px) {
    margin: 64px auto;
    width: 400px;
  }
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 350px;
      margin: 10px auto;
      display: grid;
      align-content: flex-start;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      padding: 20px;
      background: #fff;
      > svg {
        grid-area: icon;
        width: 72px;
        height: 72px;
      }
      > h3 {
        grid-area: title;
        margin: 0;
        font-size: 28px;
        color: #1f2f3d;
        font-weight: 400;
      }
      > p {
        grid-area: text;
        font-size: 20px;
        color: #99a9bf;
        line-height: 32px;
        margin-top: 10px;
      }
    }
  }
}
</style>
