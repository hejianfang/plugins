import Vue from "vue";
import VueToast from "../components/ImgPreview.vue";

const ToastConstructor = Vue.extend(VueToast);

const instance = new ToastConstructor().$mount();

const Toast = (options = {}) => {
  if (typeof options === "string") {
    instance.url = options;
  } else if (typeof options === "object" && options.constructor !== Array) {
    instance.url = options.url;
  } else {
    if (options.constructor !== Array) {
      console.error(
        "hevue-img-preview 组件参数仅能接收字符串和对象，但您传入的是 " +
        typeof options +
        "\nhevue-img-preview parameter can only receive strings and objects, but what you pass in is " +
        typeof options
      );
    } else {
      console.error(
        "hevue-img-preview 组件参数仅能接收字符串和对象，但您传入的是 array\nhevue-img-preview parameter can only receive strings and objects, but what you pass in is array"
      );
    }
    return;
  }
  instance.mainBackground = options.mainBackground || "rgba(255,255,255,.6)";
  instance.controlColor = options.controlColor;
  instance.controlBackground = options.controlBackground || "rgba(109, 109, 109, .6)";
  instance.closeColor = options.closeColor || "rgba(109, 109, 109, .6)";
  instance.multiple = options.multiple;
  instance.nowImgIndex = options.nowImgIndex;
  instance.imgList = options.imgList;
  instance.keyboard = options.keyboard;
  instance.show = true;
  instance.instance = instance;

  document.body.appendChild(instance.$el);
};

export default Toast;
