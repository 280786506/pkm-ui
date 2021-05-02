<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router';
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible  = ref(width > 500 ? true : false)
    provide('menuVisible' ,menuVisible)
    //参数一 提供使用的名称，参数二 变量值
    router.afterEach(()=>{
      console.log(width)
      if(width <= 500){
        menuVisible.value = false
      }
    })
  }
  
}
</script>
