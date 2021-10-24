# (TypeScript)[https://www.typescriptlang.org/]

## 优势

1. 静态
2. 可选
3. 强类型

## 环境搭建

1. npm i (typescript)[https://www.npmjs.com/package/typescript] -g
2. 使用命令行tsc 文件名进行编译

## 配置

- tsc命令
    - 命令后续加上选项参数
- 配置文件
    - tsconfig.json(可通过tsc --init来创建这个文件)
    - compilerOptions
        - Object
        - 编译选项
            - target
                - String
                - 配置编译后的代码版本标准
            - module
                - String
                - 配置编译后的代码模块化标准
            - lib
                - String[]
                - 配置默认情况下代码的环境
            - outDir
                - String
                - 配置编译后文件的输出位置
    - include
        - String[]
        - 配置需要编译的文件夹
    - files
        - String[]
        - 单独配置需要编译的文件
- 第三方库
    - (ts-node)[https://www.npmjs.com/package/ts-node]
        - 直接将ts代码在内存中完成编译并完成运行
        - 命令 ts-node 文件路径
    - (nodemon)[https://www.npmjs.com/package/nodemon]
        - 监测文件变化
        - 命令 nodemon --watch ./src -e ts --exec ts-node ./src/index.ts
            - 此段命令意为当src文件夹下文件且文件后缀名为ts发生变化时运行ts-node ./src/index.ts该命令

## Ts基本知识

### 类型约束

- 基本类型约束
