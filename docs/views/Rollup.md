# 关于 Rollup 的 相关 内容

## 一. 依赖项的安装

> ```bash
> pnpm i @babel/core @babel/preset-env @rollup/plugin-commonjs @rollup/plugin-babel  @rollup/plugin-node-resolve @rollup/plugin-typescript lodash rollup rollup-plugin-babel postcss rollup-plugin-postcss rollup-plugin-terser tslib typescript rollup-plugin-serve rollup-plugin-livereload -D
> ```

## 二.功能

#### 1. Tree-Shaking

> ```bash
> import {name,age} from './msg'
> console.log(name)
> ```

> 打包后 只会将用到的 输出
>
> ```bash
> ‘use strict'
> var name = 'name'
> console.log(name)
> ```

### 三：手写源码

> ```js
> pnpm i rollup magic-string acorn --save
> ```

1.  #### magic-string

    1. ```js
       let ms = new MagicString(string)
       截取 snip(start,end).toString()
       删除 remove(start,end).toString()
       ```

    2. ```js
       拼接;
       let bundle = new MagicString(string).Bundle();
       bundle.addSource({
         content: `var a = 1`,
         separator: "\n",
       });
       console.log(bundle.toString());
       ```

2.  #### AST

    1. ##### 语法树 内部 使用的是 acorn

    2. ```js
       const acorn = require("");
       const sourceCode = `import $ from 'jquery'`;
       //返回 语法树
       const ast = acorn.parse(sourceCode, {
         locations: true, //会显示 节点
         ranges: true,
         sourceType: "module",
         ecmaVersion: 8,
       });
       ast.body.forEach((stateMent) => {
         walk(statement, {
           enter(node) {
             console.log("进入节点", node.type);
           },
           leave(node) {
             console.log("进入节点", node.type);
           },
         });
       });
       //遍历语法树 先去 看 AST 的 结构
       const walk = (astNode, { enter, leave }) => {
         visit(astNode, null, enter, leave);
       };
       const visit = (node, parent, enter, leave) => {
         if (enter) {
           enter(node, parent);
         }
         //深度优先
         const keys = Object.keys(node).fielter(
           (key) => typeof node[key] == "object"
         );
         keys.forEach((key) => {
           let value = node[key];
           if (Array.isArray(value)) {
             value.forEach((val) => {
               if (val.type) {
                 visit(val, node, enter, leave);
               }
             });
           } else if (value && value.type) {
             //有的没有type
             visit(value, node, enter, leave);
           }
         });
         if (leave) {
           leave(node, parent);
         }
       };
       ```
    3. > scoped 作用域
       >
       > class Scope{
       >
       > }

### 扩展

> amd 是 requireJS 废弃
>
> ES es module
>
> umd => ( [ 依赖 ...], (){})
>
> cmd commJS
>
> iife var name (){ }

## AST 语法树
> import hello from './msg';
> import {oo} from './helo';
> console.log(hello,oo);
> var name = 1;
> let a = 2
> function ADD(){
> 	var name = 1;
>   	let age = 2
> }
> const hello1  = ()=> {
> 	return 1
> }
> export default name
> export {
> 	a
> }

### 输出

> Program: {
>
>​     type: “Program”,
>
>
>
>​     start: 0,
>
>
>
>​     end: 218,
>
>​     body: [
>
>​      {
>
>​       *//**ImportDeclaration*
>
>​       type: “ImportDeclaration”,
>
>​       start: 0,
>
>​       end: 26,
>
>​       specifiers: [
>
>​        {
>
>​         type: ”ImportDefaultSpecifier“,
>
>​         start: 7,
>
>​         end: 12,
>
>​         local: {
>
>​          type: “Identifier”,
>
>​          start: 7,
>
>​          end: 12,
>
>​          name: ”hello“,
>
>​         },
>
>​        },
>
>​       ],
>
>​       source: {
>
>​        type: “Literal”,
>
>​        start: 18,
>
>​        end: 25,
>
>​        value: ”./msg“,
>
>​        raw: “./msg”,
>
>​       },
>
>​      },
>
>​      {
>
>​       *//* *ImportDeclaration:*
>
>​       type: “ImportDeclaration”,
>
>​       specifiers: [
>
>​        {
>
>​         type: ”ImportSpecifier“,
>
>​         start: 7,
>
>​         end: 12,
>
>​         imported: {
>
>​          type: “Identifier”,
>
>​          start: 7,
>
>​          end: 12,
>
>​          name: ”oo“,
>
>​         },
>
>​         local: {
>
>​          type: “Identifier”,
>
>​          start: 7,
>
>​          end: 12,
>
>​          name: ”oo“,
>
>​         },
>
>​        },
>
>​       ],
>
>​       source: {
>
>​        type: “Literal”,
>
>​        start: 18,
>
>​        end: 25,
>
>​        value: ”./hello“,
>
>​        raw: “./hello”,
>
>​       },
>
>​      },
>
>​      *//* *ExpressionStatement:{},*
>
>​      {
>
>​       type: “ExpressionStatement”,
>
>​       expression: {
>
>​        type: ”CallExpression“,
>
>​        callee: {
>
>​         type: “MemberExpression”,
>
>​         object: {
>
>​          type: ”Identifier“,
>
>​          name: “console”,
>
>​         },
>
>​         property: {
>
>​          type: “Identifier”,
>
>​          name: ”log“,
>
>​         },
>
>​         computed: false,
>
>​         optional: [],
>
>​        },
>
>​        arguments: [
>
>​         {
>
>​          type: “Identifier”,
>
>​          name: ”hello“,
>
>​         },
>
>​         {
>
>​          type: “Identifier”,
>
>​          name: “oo”,
>
>​         },
>
>​        ],
>
>​       },
>
>​      },
>
>​      *//* *VariableDeclaration:{},*
>
>​      {
>
>​       type: ”VariableDeclaration“,
>
>​       declarations: [
>
>​        {
>
>​         type: “VariableDeclarator”,
>
>​         id: {
>
>​          name: ”name“,
>
>​         },
>
>​         init: {
>
>​          value: 1,
>
>​          raw: 1,
>
>​         },
>
>​        },
>
>​       ],
>
>​       kind: “var”,
>
>​      },
>
>​      {
>
>​       type: ”VariableDeclaration“,
>
>​       declarations: [
>
>​        {
>
>​         type: “VariableDeclarator”,
>
>​         id: {
>
>​          name: “a”,
>
>​         },
>
>​         init: {
>
>​          value: 2,
>
>​          raw: 2,
>
>​         },
>
>​        },
>
>​       ],
>
>​       kind: “let”,
>
>​      },
>
>​      {
>
>​       type: “FunctionDeclaration”,
>
>​       id: {
>
>​        type: “Identifier”,
>
>​        name: ”ADD“,
>
>​       },
>
>​       params: [{ name: ”a“ }, { name: “b” }],
>
>​       body: {
>
>​        type:“BlockStatement”,
>
>​        body: [
>
>​         {
>
>​          declarations: [
>
>​           {
>
>​            type: "VariableDeclarator",
>
>​            id: {
>
>​             type: "Identifier",
>
>​             name:“name",
>
>​            },
>
>​            init: {
>
>​             value: 1,
>
>​             raw: 1,
>
>​            },
>
>​           },
>
>​          ],
>
>​          kind: ”var“,
>
>​         },
>
>​         {
>
>​          type: ”ReturnStatement“,
>
>​          arguments: {
>
>​           type: “BinaryExpression | ....其他”,
>
>​           left: {
>
>​            name: ”a“,
>
>​           },
>
>​           operator:“+”,
>
>​           right: {
>
>​            name:"b",
>
>​           },
>
>​          },
>
>​         },
>
>​        ],
>
>​       },
>
>​      },
>
>​      {
>
>​       type: "ExportDefaultDeclaration",
>
>​       declaration: {
>
>​        type: "Identifier",
>
>​        name: "name“,
>
>​       },
>
>​      },
>
>​      {
>
>​       type: “ExportNamedDeclaration”,
>
>​       specifiers: [
>
>​        {
>
>​         local: {
>
>​          name: “a”,
>
>​         },
>
>​         exported: {
>
>​          name: ”a“,
>
>​         },
>
>​        },
>
>​       ],
>
>​      },
>
>​     ],
>
>​    },
>
>   