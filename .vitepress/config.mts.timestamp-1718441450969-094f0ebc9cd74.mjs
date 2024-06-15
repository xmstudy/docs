// .vitepress/config.mts
import { defineConfig } from "file:///F:/Blog/Docs/docs/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.2_@types+node@20.14.2_postcss@8.4.38_search-insights@2.13.0_typescript@5.4.5/node_modules/vitepress/dist/node/index.js";

// docs/utils/index.ts
import path from "node:path";
import fs from "node:fs";
var DIR_PATH = path.resolve();
var WHITE_LIST = /* @__PURE__ */ new Set([
  "README.md",
  ".vitepress",
  "node_modules",
  ".idea",
  ".vscode",
  ".husky",
  "assets"
]);
var isDirectory = (filePath) => fs.lstatSync(filePath).isDirectory();
var filterWhiteList = (files) => files.filter((file) => !WHITE_LIST.has(file));
function generateSidebarItems(currentPath, relativePath = "") {
  const entries = fs.readdirSync(currentPath);
  const validEntries = filterWhiteList(entries);
  return validEntries.map((entry) => {
    const fullPath = path.join(currentPath, entry);
    const entryIsDirectory = isDirectory(fullPath);
    if (entryIsDirectory) {
      return {
        text: entry,
        collapsed: true,
        items: generateSidebarItems(fullPath, `${relativePath}/${entry}`)
      };
    } else if (path.extname(entry) === ".md") {
      return {
        text: path.basename(entry, ".md"),
        link: `${relativePath}/${entry}`,
        items: []
      };
    }
  }).filter((item) => item !== void 0);
}
var set_sidebar = (subPath) => {
  const dirPath = path.join(DIR_PATH, subPath);
  const items = generateSidebarItems(dirPath, subPath);
  let reuslt = [
    {
      text: subPath.split("/").filter(Boolean).pop() || "\u6807\u9898",
      // 设置顶层文本
      items
      // 将所有生成的侧边栏项放入顶层项的items数组中
    }
  ];
  return reuslt;
};

// .vitepress/config.mts
var config_default = defineConfig({
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  title: "XMStudy",
  description: "\u4E2A\u4EBA\u5B66\u4E60\u6587\u6863\u5E93\uFF0Cjavascript\u3001Golang\u3001c++\u3001React\u3001Vue\u7B49\u7F16\u7A0B\u8BED\u8A00\u5B66\u4E60\u3001\u5F00\u53D1\u5DE5\u5177\u4E0E\u8F6F\u4EF6\u6587\u6863\u4F7F\u7528\u7684\u5728\u7EBF\u6587\u6863\u5E93",
  // srcDir: "docs",
  base: "/docs/",
  themeConfig: {
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium"
      }
    },
    docFooter: {
      prev: false,
      next: false
    },
    outline: {
      label: "\u5185\u5BB9\u7D22\u5F15",
      level: [2, 6]
    },
    logo: "/avatar.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "\u524D\u7AEF",
        items: [
          {
            text: "",
            items: [
              {
                text: "Vue",
                link: "/docs/views/Vue/index.md"
              },
              {
                text: "Uni App",
                link: "/docs/views/Vue/UniApp/index.md"
              }
            ]
          },
          {
            text: "",
            items: [
              {
                text: "React",
                link: "/docs/views/React/index.md"
              },
              {
                text: "React Native",
                link: "/docs/views/React/React Native/index.md"
              }
            ]
          }
        ]
      },
      {
        text: "\u540E\u7AEF",
        items: [
          {
            text: "",
            items: [
              {
                text: "Golang",
                link: "/docs/views/GoLang/index.md"
              }
            ]
          },
          {
            text: "",
            items: [
              {
                text: "CPP",
                link: "/docs/views/CPP/index.md"
              }
            ]
          }
        ]
      },
      {
        text: "Linux",
        items: [
          {
            text: "Linux",
            link: "/docs/views/Linux/index.md"
          }
        ]
      }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    },
    sidebar: {
      "/docs/views/Vue/": set_sidebar("/docs/views/Vue/"),
      "/docs/views/React/": set_sidebar("/docs/views/React/"),
      "/docs/views/GoLang/": set_sidebar("/docs/views/GoLang/"),
      "/docs/views/CPP/": set_sidebar("/docs/views/CPP/"),
      "/docs/views/Linux/": set_sidebar("/docs/views/Linux/")
    },
    // font awesome 中有的
    socialLinks: [{ icon: "github", link: "https://github.com/xmstudy/docs" }]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgImRvY3MvdXRpbHMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxCbG9nXFxcXERvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCbG9nXFxcXERvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0Jsb2cvRG9jcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuaW1wb3J0IHsgc2V0X3NpZGViYXIgfSBmcm9tIFwiLi4vZG9jcy91dGlscy9pbmRleFwiO1xyXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgaGVhZDogW1tcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9kb2NzL2Zhdmljb24uaWNvXCIgfV1dLFxyXG4gIHRpdGxlOiBcIlhNU3R1ZHlcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiXHU0RTJBXHU0RUJBXHU1QjY2XHU0RTYwXHU2NTg3XHU2ODYzXHU1RTkzXHVGRjBDamF2YXNjcmlwdFx1MzAwMUdvbGFuZ1x1MzAwMWMrK1x1MzAwMVJlYWN0XHUzMDAxVnVlXHU3QjQ5XHU3RjE2XHU3QTBCXHU4QkVEXHU4QTAwXHU1QjY2XHU0RTYwXHUzMDAxXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3XHU0RTBFXHU4RjZGXHU0RUY2XHU2NTg3XHU2ODYzXHU0RjdGXHU3NTI4XHU3Njg0XHU1NzI4XHU3RUJGXHU2NTg3XHU2ODYzXHU1RTkzXCIsXHJcbiAgLy8gc3JjRGlyOiBcImRvY3NcIixcclxuICBiYXNlOiBcIi9kb2NzL1wiLFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbGFzdFVwZGF0ZWQ6IHtcclxuICAgICAgdGV4dDogXCJVcGRhdGVkIGF0XCIsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcclxuICAgICAgICBkYXRlU3R5bGU6IFwiZnVsbFwiLFxyXG4gICAgICAgIHRpbWVTdHlsZTogXCJtZWRpdW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogZmFsc2UsXHJcbiAgICAgIG5leHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgbGFiZWw6IFwiXHU1MTg1XHU1QkI5XHU3RDIyXHU1RjE1XCIsXHJcbiAgICAgIGxldmVsOiBbMiwgNl0sXHJcbiAgICB9LFxyXG4gICAgbG9nbzogXCIvYXZhdGFyLnBuZ1wiLFxyXG5cclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6IFwiSG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTUyNERcdTdBRUZcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVnVlXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL1Z1ZS9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVbmkgQXBwXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL1Z1ZS9VbmlBcHAvaW5kZXgubWRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJcIixcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL1JlYWN0L2luZGV4Lm1kXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIvZG9jcy92aWV3cy9SZWFjdC9SZWFjdCBOYXRpdmUvaW5kZXgubWRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU0MEVcdTdBRUZcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiR29sYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL0dvTGFuZy9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ1BQXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL0NQUC9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkxpbnV4XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJMaW51eFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3ZpZXdzL0xpbnV4L2luZGV4Lm1kXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICB6aDoge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XCIsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcclxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1NTIwN1x1NjM2MlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaWRlYmFyOiB7XHJcbiAgICAgIFwiL2RvY3Mvdmlld3MvVnVlL1wiOiBzZXRfc2lkZWJhcihcIi9kb2NzL3ZpZXdzL1Z1ZS9cIiksXHJcbiAgICAgIFwiL2RvY3Mvdmlld3MvUmVhY3QvXCI6IHNldF9zaWRlYmFyKFwiL2RvY3Mvdmlld3MvUmVhY3QvXCIpLFxyXG4gICAgICBcIi9kb2NzL3ZpZXdzL0dvTGFuZy9cIjogc2V0X3NpZGViYXIoXCIvZG9jcy92aWV3cy9Hb0xhbmcvXCIpLFxyXG4gICAgICBcIi9kb2NzL3ZpZXdzL0NQUC9cIjogc2V0X3NpZGViYXIoXCIvZG9jcy92aWV3cy9DUFAvXCIpLFxyXG4gICAgICBcIi9kb2NzL3ZpZXdzL0xpbnV4L1wiOiBzZXRfc2lkZWJhcihcIi9kb2NzL3ZpZXdzL0xpbnV4L1wiKSxcclxuICAgIH0sXHJcbiAgICAvLyBmb250IGF3ZXNvbWUgXHU0RTJEXHU2NzA5XHU3Njg0XHJcbiAgICBzb2NpYWxMaW5rczogW3sgaWNvbjogXCJnaXRodWJcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20veG1zdHVkeS9kb2NzXCIgfV0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcQmxvZ1xcXFxEb2NzXFxcXGRvY3NcXFxcZG9jc1xcXFx1dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQmxvZ1xcXFxEb2NzXFxcXGRvY3NcXFxcZG9jc1xcXFx1dGlsc1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmxvZy9Eb2NzL2RvY3MvZG9jcy91dGlscy9pbmRleC50c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XHJcbmludGVyZmFjZSBJU2lkZWJhckl0ZW0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2xsYXBzZWQ/OiBib29sZWFuO1xyXG4gIGl0ZW1zOiBJU2lkZWJhckl0ZW1bXTtcclxuICBsaW5rPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBESVJfUEFUSCA9IHBhdGgucmVzb2x2ZSgpO1xyXG4vLyBcdTc2N0RcdTU0MERcdTUzNTUsXHU4RkM3XHU2RUU0XHU0RTBEXHU2NjJGXHU2NTg3XHU3QUUwXHU3Njg0XHU2NTg3XHU0RUY2XHU1NDhDXHU2NTg3XHU0RUY2XHU1OTM5XHJcbmNvbnN0IFdISVRFX0xJU1QgPSBuZXcgU2V0KFtcclxuICBcIlJFQURNRS5tZFwiLFxyXG4gIFwiLnZpdGVwcmVzc1wiLFxyXG4gIFwibm9kZV9tb2R1bGVzXCIsXHJcbiAgXCIuaWRlYVwiLFxyXG4gIFwiLnZzY29kZVwiLFxyXG4gIFwiLmh1c2t5XCIsXHJcbiAgXCJhc3NldHNcIixcclxuXSk7XHJcblxyXG4vLyBcdTUyMjRcdTY1QURcdTY2MkZcdTU0MjZcdTY2MkZcdTY1ODdcdTRFRjZcdTU5MzlcclxuY29uc3QgaXNEaXJlY3RvcnkgPSAoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4gPT5cclxuICBmcy5sc3RhdFN5bmMoZmlsZVBhdGgpLmlzRGlyZWN0b3J5KCk7XHJcblxyXG4vLyBcdThGQzdcdTZFRTRcdTc2N0RcdTU0MERcdTUzNTVcdTUxRkRcdTY1NzBcclxuY29uc3QgZmlsdGVyV2hpdGVMaXN0ID0gKGZpbGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+XHJcbiAgZmlsZXMuZmlsdGVyKChmaWxlKSA9PiAhV0hJVEVfTElTVC5oYXMoZmlsZSkpO1xyXG5cclxuLy8gXHU3NTFGXHU2MjEwXHU0RkE3XHU4RkI5XHU2ODBGXHU3Njg0XHU1MjE3XHU4ODY4XHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhckl0ZW1zKFxyXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXHJcbiAgcmVsYXRpdmVQYXRoOiBzdHJpbmcgPSBcIlwiXHJcbik6IElTaWRlYmFySXRlbVtdIHtcclxuICBjb25zdCBlbnRyaWVzID0gZnMucmVhZGRpclN5bmMoY3VycmVudFBhdGgpO1xyXG4gIGNvbnN0IHZhbGlkRW50cmllcyA9IGZpbHRlcldoaXRlTGlzdChlbnRyaWVzKTtcclxuICByZXR1cm4gdmFsaWRFbnRyaWVzXHJcbiAgICAubWFwKChlbnRyeSkgPT4ge1xyXG4gICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihjdXJyZW50UGF0aCwgZW50cnkpO1xyXG4gICAgICBjb25zdCBlbnRyeUlzRGlyZWN0b3J5ID0gaXNEaXJlY3RvcnkoZnVsbFBhdGgpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5SXNEaXJlY3RvcnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogZW50cnksXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogZ2VuZXJhdGVTaWRlYmFySXRlbXMoZnVsbFBhdGgsIGAke3JlbGF0aXZlUGF0aH0vJHtlbnRyeX1gKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZXh0bmFtZShlbnRyeSkgPT09IFwiLm1kXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGV4dDogcGF0aC5iYXNlbmFtZShlbnRyeSwgXCIubWRcIiksXHJcbiAgICAgICAgICBsaW5rOiBgJHtyZWxhdGl2ZVBhdGh9LyR7ZW50cnl9YCxcclxuICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdW5kZWZpbmVkKSBhcyBJU2lkZWJhckl0ZW1bXTtcclxufVxyXG5cclxuLy8gXHU4QkJFXHU3RjZFXHU0RkE3XHU4RkI5XHU2ODBGXHJcbmV4cG9ydCBjb25zdCBzZXRfc2lkZWJhciA9IChzdWJQYXRoOiBzdHJpbmcpOiBJU2lkZWJhckl0ZW1bXSA9PiB7XHJcbiAgY29uc3QgZGlyUGF0aCA9IHBhdGguam9pbihESVJfUEFUSCwgc3ViUGF0aCk7XHJcbiAgY29uc3QgaXRlbXMgPSBnZW5lcmF0ZVNpZGViYXJJdGVtcyhkaXJQYXRoLCBzdWJQYXRoKTtcclxuICAvLyBcdTU3MjhcdTk4NzZcdTVDNDJcdThCQkVcdTdGNkVcdTRFMDBcdTRFMkFcdTU2RkFcdTVCOUFcdTc2ODRcdTY1ODdcdTY3MkNcdUZGMENcdTVDMDZcdTYyNDBcdTY3MDlcdTk4NzlcdTY1M0VcdTUxNjVcdThGRDlcdTRFMkFcdTk4NzZcdTVDNDJcdTk4NzlcdTc2ODRpdGVtc1x1NEUyRFxyXG4gIGxldCByZXVzbHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IHN1YlBhdGguc3BsaXQoXCIvXCIpLmZpbHRlcihCb29sZWFuKS5wb3AoKSB8fCAoXCJcdTY4MDdcdTk4OThcIiBhcyBzdHJpbmcpLCAvLyBcdThCQkVcdTdGNkVcdTk4NzZcdTVDNDJcdTY1ODdcdTY3MkNcclxuICAgICAgaXRlbXM6IGl0ZW1zLCAvLyBcdTVDMDZcdTYyNDBcdTY3MDlcdTc1MUZcdTYyMTBcdTc2ODRcdTRGQTdcdThGQjlcdTY4MEZcdTk4NzlcdTY1M0VcdTUxNjVcdTk4NzZcdTVDNDJcdTk4NzlcdTc2ODRpdGVtc1x1NjU3MFx1N0VDNFx1NEUyRFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiByZXVzbHQ7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7OztBQ0EvQixPQUFPLFVBQVU7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QUFBLGdCQUNOLE1BQU07QUFBQSxjQUNSO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFLE1BQU07QUFBQSxnQkFDTixNQUFNO0FBQUEsY0FDUjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sTUFBTTtBQUFBLGNBQ1I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxJQUFJO0FBQUEsWUFDRixjQUFjO0FBQUEsY0FDWixRQUFRO0FBQUEsZ0JBQ04sWUFBWTtBQUFBLGdCQUNaLGlCQUFpQjtBQUFBLGNBQ25CO0FBQUEsY0FDQSxPQUFPO0FBQUEsZ0JBQ0wsZUFBZTtBQUFBLGdCQUNmLGtCQUFrQjtBQUFBLGdCQUNsQixRQUFRO0FBQUEsa0JBQ04sWUFBWTtBQUFBLGtCQUNaLGNBQWM7QUFBQSxnQkFDaEI7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLG9CQUFvQixZQUFZLGtCQUFrQjtBQUFBLE1BQ2xELHNCQUFzQixZQUFZLG9CQUFvQjtBQUFBLE1BQ3RELHVCQUF1QixZQUFZLHFCQUFxQjtBQUFBLE1BQ3hELG9CQUFvQixZQUFZLGtCQUFrQjtBQUFBLE1BQ2xELHNCQUFzQixZQUFZLG9CQUFvQjtBQUFBLElBQ3hEO0FBQUE7QUFBQSxJQUVBLGFBQWEsQ0FBQyxFQUFFLE1BQU0sVUFBVSxNQUFNLGtDQUFrQyxDQUFDO0FBQUEsRUFDM0U7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
