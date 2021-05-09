import { h } from 'vue';
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import DocDemo from "./components/DocDemo.vue";

import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";

import MarkDown from './components/MarkDown.vue'

import intro from './markdown/intro.md'
import getStarted from './markdown/getStarted.md'
import install from './markdown/install.md'

const md = (content,key)=>{
  return h(MarkDown,{content:content,key:key})
}

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "intro", component: md(intro,'intro')},
        { path: "getStarted", component: md(getStarted,'getStarted')},
        { path: "install", component: md(install,'install')},

        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
