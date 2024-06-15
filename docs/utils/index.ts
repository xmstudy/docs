import path from "node:path";
import fs from "node:fs";
interface ISidebarItem {
  text: string;
  collapsed?: boolean;
  items: ISidebarItem[];
  link?: string;
}

const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = new Set([
  "README.md",
  ".vitepress",
  "node_modules",
  ".idea",
  ".vscode",
  ".husky",
  "assets",
]);

// 判断是否是文件夹
const isDirectory = (filePath: string): boolean =>
  fs.lstatSync(filePath).isDirectory();

// 过滤白名单函数
const filterWhiteList = (files: string[]): string[] =>
  files.filter((file) => !WHITE_LIST.has(file));

// 生成侧边栏的列表
function generateSidebarItems(
  currentPath: string,
  relativePath: string = ""
): ISidebarItem[] {
  const entries = fs.readdirSync(currentPath);
  const validEntries = filterWhiteList(entries);
  return validEntries
    .map((entry) => {
      const fullPath = path.join(currentPath, entry);
      const entryIsDirectory = isDirectory(fullPath);

      if (entryIsDirectory) {
        return {
          text: entry,
          collapsed: true,
          items: generateSidebarItems(fullPath, `${relativePath}/${entry}`),
        };
      } else if (path.extname(entry) === ".md") {
        return {
          text: path.basename(entry, ".md"),
          link: `${relativePath}/${entry}`,
          items: [],
        };
      }
    })
    .filter((item) => item !== undefined) as ISidebarItem[];
}

// 设置侧边栏
export const set_sidebar = (subPath: string): ISidebarItem[] => {
  const dirPath = path.join(DIR_PATH, subPath);
  const items = generateSidebarItems(dirPath, subPath);
  // 在顶层设置一个固定的文本，将所有项放入这个顶层项的items中
  let reuslt = [
    {
      text: subPath.split("/").filter(Boolean).pop() || ("标题" as string), // 设置顶层文本
      items: items, // 将所有生成的侧边栏项放入顶层项的items数组中
    },
  ];
  return reuslt;
};
