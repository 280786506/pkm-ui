<template>
  <div class="gulu-tabs">
    {{ name }}
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :class="{ selected: t.name === selected }"
        @click="select(t.name, index)"
        :ref="el=>{if(el) navItems[index] = el}"
      >
        {{ t.title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>

    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :is="current"
        :key="current.props.name"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, onUpdated, ref } from 'vue';

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])
    const defaults = context.slots.default();
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>()

    const x = ()=>{
const divs = navItems.value
      const result = divs.filter(
        div => 
        div.classList.contains('selected')
      )[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'

      const {left:left1} = container.value.getBoundingClientRect()
      const {left:left2} = result.getBoundingClientRect()

      const left = left2 -left1
      indicator.value.style.left = left + 'px' 
    }

    onMounted(x)
    onUpdated(x)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("子组件必须是Tab标签");
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props;
    });

    const select = (selected: String) => {
      context.emit("update:selected", selected);
    };

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.name === props.selected;
      })[0];
    });

    return { defaults, titles, select, current,navItems,indicator,container };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
  &-nav-indicator{
    position: absolute;
    height: 3px;
    background: $blue;
    left: 0;
    bottom: -1px;
    width: 100px;
    transition: all 0.25s;
  }
}
</style>
