// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style.css"; // 引入自定义 CSS 文件
import MyLayout from "./MyLayout.vue";
export default {
  ...DefaultTheme,
  // Layout: MyLayout,//可以控制每个页面的头部 和 底部 内容 插槽
};
