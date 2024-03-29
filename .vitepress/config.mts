import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import siderbar from "./siderbar.mts";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMStudy",
  description:
    "个人学习文档库，javascript、Golang、c++、React、Vue等编程语言学习开发工具与软件文档使用的在线文档库",
  srcDir: "docs",
  themeConfig: {
    logo: "/avatar.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    search: {
      provider: "local",
    },
    sidebar: { ...siderbar } as any,
    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    footer: {
      copyright: "",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
