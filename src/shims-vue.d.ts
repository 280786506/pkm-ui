// 通过创建 d.ts文件 告诉TS如何理解 .vue文件
declare module '*.vue'{
    import {ComponentOptions} from 'vue'
    const ComponentOptions:ComponentOptions
    export default ComponentOptions
}