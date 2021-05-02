<template >
    <div>
        ButtonDemo 文档
        <h1>实例1</h1>
        <Button @click="onClick">
            按钮
        </Button>
    </div>
</template>
<script>
import Button from '../lib/Button.vue'
export default {
    setup(){
        const onClick = ()=>{
            console.log('123')
        }
        return {onClick}
    },
    components:{Button}
}
</script>
<style lang="">
    
</style>