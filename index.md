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
            - strictNullChecks
                - Boolean
                - 是否开启更加严格的空类型检查
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

#### 可以用于约束变量、函数参数、函数返回等

- 所有类型约束
    - : string
        - 约束为字符串类型
    - : number
        - 约束为数字类型
    - : boolean
        - 约束为布尔类型
    - : number[] / : string[] / : boolean[] / : object[]
        - 约束为由数字/字符串/布尔/对象组成的数组类型
        - 第二种写法为 : Array<number> / : Array<string> / : Array<boolean> / : Array<object>
    - : object
        - 约束为对象类型
    - : any
        - 约束为任意类型
        - 可以跳过类型检查
    - : undefined
        - 约定为undefined类型
        - **特别注意:** 在配置文件未开启strictNullChecks时, undefined是可以被赋值在string类型上存在的
    - : null
        - 约定为null类型
        - **特别注意:** 在配置文件未开启strictNullChecks时, null是可以被赋值在string类型上存在的
    - : string | undefined / : number | null / ...
        - 约定为字符串或者undefined类型/数字或者null等等
    - : void
        - 一般用于约束函数不能返回任意值
    - : never
        - 一般用于约束函数永远不会结束
        - 例如: 死循环、抛出错误...
    - : 字面量1
        - 一般用于约束变量限定在某个值
        - 例如: let sex: "男" | "女";   这样sex就只能从男/女中取值
    - : [string, boolean, number]
        - 约定为一个固定长度的数组, 自定义数组内每个位置的数据类型

```ts
    let str1: string = 'Code'
    let num1: number = 1
    let bool1: boolean = true
    let any1: any = '123'
    let boolArr: boolean[] = [true, true]
    let obj1: object = {}
    let name1: string | undefined = undefined


    function sum(a: number, b: number): number {
        return a + b
    }

    function demo1(): void {
        console.log('芜湖')
    }

    function demo2(): never {
        throw new Error('已错误')
    }

    let sex: "男" | "女";
    // sex = 1 // 报错
    sex = "男"

    let arr1: [string, boolean]
```

## 类型别名

### 对一直的一些类型定义为固定名称, 方便之后使用, 通过关键字type进行定义

```ts
    // 定义一个类型别名
    type Name = string
    type Age = number
    type Sex = "男" | "女"

    // 可以嵌套使用类型别名
    type User = {
        name: Name,
        age: Age,
        sex: Sex
    }

    let user1: User = {
        name: 'maomao',
        age: 18,
        sex: "女"
    }

    function getAllUser(): User[] {
        return [{
            name: 'maomao',
            age: 18,
            sex: "女"
        }, {
            name: 'CodeGorgeous',
            age: 21,
            sex: "男"
        }]
    }
```

## 函数的约束

### 函数重载, 在函数实现前, 对于函数的多种情况进行声明

```ts
    function merge(a: string, b: string): string
    function merge(a: number, b: number): number

    function merge(a: string | number, b: string | number): string | number {
        if (typeof a === 'string' && typeof b === 'string') return a + b
        else if (typeof a === 'number' && typeof b === 'number') return a + b
        else throw new Error('传入的两个参数类型不一致')
    }
    
    // merge(1,"2") // 报错
    merge(1,2) // number
    merge("1", "2") // string
```

### 可选参数, 选择个别参数

```ts
    /**
     * 得到两数乘积
     * @param a 
     * @param b 
     */
    function merge(a: number, b: number): number
    /**
     * 得到拼接结果
     * @param a 
     * @param b 
     * @param c 
     */
    function merge(a:number, b: number, c: string): string

    function merge(a: number, b: number, c?: string) {
        if (c) {
            return a + b + c
        } else {
            return a * b
        }
    }
```

## Poker小练习

```ts
    class Poker {
        pokerPoint: string[]
        color: string []
        poker: string []

        constructor() {
            this.pokerPoint = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
            this.color = ["♣", "♦", "♠", "♥"]
            this.poker = []
        }
        // 创建牌组
        createPoker(ifLock?: boolean) {
            for (const iterator of this.pokerPoint) {
                for (const color of this.color) {
                    this.poker = [...this.poker, `${color}${iterator}`]
                }
            }
            if (ifLock) { // 说明需要54张排
                this.poker = [...this.poker, 'joker', "JOKER"]
            }
        }
        // 看牌
        printPoker() {
            for (const iterator of this.poker) {
                console.log(iterator)
            }
        }
        // 洗牌
        upsetPoker() {
            this.poker.sort(item => {
                return Math.random() - 0.5
            })
        }
    }

    const poker = new Poker()
    poker.createPoker(true)
    poker.printPoker()
    console.log('开始打乱顺序')
    poker.upsetPoker()
    poker.printPoker()
```


## 枚举

### 用于约束值在某个范围的进行取得, 解决真实值与逻辑含义的混淆, 减少重复代码, 使用关键字enum定义枚举

- 枚举规则
    - enum xxx {key: value, key1: value1}
    - value只能为字符串/数字
    - value为数字时会进行自增
    - 一个枚举的value一定不要同时出现string和number

```ts
    enum Sex {
        male = '男',
        female = '女'
    }
    console.log(Sex) // { male: "男", female: '女}
    const user1 = {
        name: 'maomao',
        sex: Sex.female
    }

    const user2 = {
        name: 'CodeGorgeous',
        sex: Sex.male
    }

    console.log(user1, user2) // { name: 'maomao', sex: '女' } { name: 'CodeGorgeous', sex: '男' }
    
    enum Level {
        level1,
        level2,
        level3,
        level4 = 9,
        level5,
        level6
    }

    console.log(Level)
```
