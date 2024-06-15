import { defineConfig } from "vitepress";
import { set_sidebar } from "../docs/utils/index";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  title: "XMStudy",
  description:
    "个人学习文档库，javascript、Golang、c++、React、Vue等编程语言学习、开发工具与软件文档使用的在线文档库",
  // srcDir: "docs",
  base: "/docs/",

  themeConfig: {
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: false,
      next: false,
    },
    outline: {
      label: "内容索引",
      level: [2, 6],
    },
    logo: "/avatar.png",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "",
            items: [
              {
                text: "Vue",
                link: "/docs/views/Vue/index.md",
              },
              {
                text: "Uni App",
                link: "/docs/views/Vue/UniApp/index.md",
              },
            ],
          },
          {
            text: "",
            items: [
              {
                text: "React",
                link: "/docs/views/React/index.md",
              },
              {
                text: "React Native",
                link: "/docs/views/React/React Native/index.md",
              },
            ],
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "",
            items: [
              {
                text: "Golang",
                link: "/docs/views/GoLang/index.md",
              },
            ],
          },
          {
            text: "",
            items: [
              {
                text: "CPP",
                link: "/docs/views/CPP/index.md",
              },
            ],
          },
        ],
      },
      {
        text: "Linux",
        items: [
          {
            text: "Linux",
            link: "/docs/views/Linux/index.md",
          },
        ],
      },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    sidebar: {
      "/docs/views/Vue/": set_sidebar("/docs/views/Vue/"),
      "/docs/views/React/": set_sidebar("/docs/views/React/"),
      "/docs/views/GoLang/": set_sidebar("/docs/views/GoLang/"),
      "/docs/views/CPP/": set_sidebar("/docs/views/CPP/"),
      "/docs/views/Linux/": set_sidebar("/docs/views/Linux/"),
    },
    // font awesome 中有的
    socialLinks: [{ icon: "github", link: "https://github.com/xmstudy/docs" }],
  },
});
