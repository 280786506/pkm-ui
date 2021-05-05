import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content,ok,cancel,closeOnClickOverlay } = options;
  console.log(closeOnClickOverlay)
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove()
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        // Dialog属性
        {
          visible: true,
          'closeOnClickOverlay':closeOnClickOverlay,
          "onUpdate:visible": (newVisible) => {
            if (newVisible == false) {
                close()
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
