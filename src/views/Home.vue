<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>名称</h1>
      <h2>说明 --UI框架</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>
<style lang="sass"></style>
