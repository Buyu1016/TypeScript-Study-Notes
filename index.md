# [TypeScript](https://www.typescriptlang.org/)

## 优势

1. 静态
2. 可选
3. 强类型

## 环境搭建

1. npm i [typescript](https://www.npmjs.com/package/typescript) -g
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
            - removeComments
                - Boolean
                - 是否编译时保留注释
            - esModuleInterop
                - Boolean
                - 是否启用es模块化交互非es模块导出
            - noEmitOnError
                - Boolean
                - ts代码有误的情况下是否取消编译, 并继续编译正确代码
            - noImplicitUseStrict
                - Boolean
                - 编译后的代码是否自动增添```"use strict"```
            - moduleResolution
                - String
                - 配置模块解析策略
            - strictPropertyInitialization
                - Boolean
                - 更加严格的检查类中的值是否初始化
    - include
        - String[]
        - 配置需要编译的文件夹
    - files
        - String[]
        - 单独配置需要编译的文件
- 第三方库
    - [ts-node](https://www.npmjs.com/package/ts-node)
        - 直接将ts代码在内存中完成编译并完成运行
        - 命令 ts-node 文件路径
    - [nodemon](https://www.npmjs.com/package/nodemon)
        - 监测文件变化
        - 命令 nodemon --watch ./src -e ts --exec ts-node ./src/index.ts
            - 此段命令意为当src文件夹下文件且文件后缀名为ts发生变化时运行ts-node ./src/index.ts该命令
    - [@types/node](https://www.npmjs.com/package/@types/node)
        - 用于向代码环境中增添node环境

## 类型约束

### 可以用于约束变量、函数参数、函数返回等

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

### 类型别名可实现类似于接口继承的效果, 使用``&```关键字进行链接, 这种称之为交叉类型

```ts
    type A = {
        name: string
    }

    type B = {
        age: number
    }

    type C = {
        phone: string
    } & A & B

    const user: C = {
        name: 'CodeGorgeous',
        age: 21,
        phone: "176xxxx0940"
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

## Ts中的模块化

### 在Ts中使用模块化和正常使用模块化一致, **注意: 导入的文件名不要带上后缀名.ts, 否则会报错**, 使用Es6模块化标准或者CommonJs标准都可以, 可以通过配置**module**来控制编译后js文件使用的模块化标准

- ### 模块解析策略(此处不详细解释, 详情请[点击这里](https://blog.csdn.net/yivisir/article/details/115575394))
    - classic: 经典解析策略
    - node: node解析策略

- ### 注意事项
    - 像是nodejs自带的库使用的是CommonJs模块化标准, 在ts使用后编译结果可能会有意外的错误, 建议这样导入```import * as fs from 'fs'```, 而不是```import fs from 'fs'```这样导入, 如果一定要这样导入, 那么需要配置esModuleInterop
    - 如果想要在ts中书写commonJs模块化的代码具有类型检查, 则需要这样导出```export = {导出的内容}```, 这样导入```import 变量 = require(文件路径)```
    - **尽量使用Es6模块化标准进行书写TypeScript**

## 接口

### 用于约束类、对象、函数的标准, 使用关键字interface进行定义, **接口可以继承**, 当直接给对象字面量赋值, 会进行更加严格的判定

```ts
    interface User {
        name: string,
        age: number,
        sex: 0 | 1,
        print(callback: (n: number) => {}): void
    }

    // 在约束对象时建议使用接口进行约束
    // type User = {
    //     name: string,
    //     age: number,
    //     sex: 0 | 1
    // }

    let user1: User = {
        name: 'maomao',
        age: 18,
        sex: 1,
        print(callback) {
            console.log(this)
            const result = callback(1)
        }
    }

    user1.print(demo)

    function demo (a) {
        console.log(a)
        return a
    }

    // 接口继承
    interface A {
        name: string
    }

    interface B extends A {
        age: number
    }

    interface C {
        sex: 0 | 1
    }

    interface D extends A, C {
        phone: string
    }

    const user2: B = {
        name: 'CodeGorgeous',
        age: 21
    }

    const user3: D = {
        name: 'admin',
        sex: 0,
        phone: "176xxxx0940"
    }
    // 交叉类型
    type A = {
        name: string
    }

    type B = {
        age: number
    }

    type C = {
        age: boolean
    } & A & B

    // C: never
    const user1:C = {
        name: '1', // never类型
        age: 1, // never类型
    }

```

- ### 接口的继承和类型别名的交叉类型的区别:
    - 子接口不能重复定义父接口的key的类型, 而交叉类型可以
    - 交叉类型中重复定义某个key类型则会使得类型进行叠加(经实测, 不同类型不管怎么叠加最后都会成为never类型)

## 类型兼容性

### 请在下面的代码中感受一下类型兼容性(鸭子辩型法)

```ts
    interface User {
        name: string,
        sex: '男' | '女'
    }

    // const user1:A = {name: 'admin', age: 10} // age: 10报错

    let user2: User

    const user3 = {
        name: 'admin',
        sex: '男' as '男', // 在这里可以进行类型断言
        age: 20
    }

    user2 = user3 // 这种操作可以称之为类型兼容性, 也称之为鸭子辨型法
```

## 类型断言

### 当写代码时十分明确该数据的类型, 可以使用关键字as进行类型断言, ``` 数据 as 类型```

## 类

### 在Ts中需要使用属性列表描述constructor内所创建的值

```ts
    class User {
        name: string
        private password: string
        readonly pid?: string
        sex: '男' | '女'
        constructor(name: string, password: string, pid?: string, sex: '男' | '女' = '男') {
            this.name = name
            this.password = password
            this.pid = pid
            this.sex = sex
        }
        private print() {
            console.log(this.password)
        }
    }

    const user1 = new User('cg', '123123', '123541325132412')
    // user1.pid = '2131254215123123' // 无法分配到 "pid" ，因为它是只读属性。
    // user1.print() // 方法也可以私有化, 属性“print”为私有属性，只能在类“User”中访问。
    console.log(user1) // 正常输出
    // user1.password = '3514124312' // 属性“password”为私有属性，只能在类“User”中访问。
```

## 泛型

### 附属于函数、类、接口、类型别名之上的类型称之为泛型

```ts
    // 函数中使用泛型
    // <T>用于定义一个泛型
    function mySplice<T>(arr: T[], i: number): T[] {
        let result: T[] = []
        result = arr.splice(0, i)
        return result
    }
    // <number>相当于给<T>进行赋值, 此时T就代表number
    const result = mySplice<number>([1,2,3,4,5,6], 3) // 这里result类型为number[]
    // 这里省略赋值, Ts则会自动根据传递的参数进行类型推导
    const result1 = mySplice([1,'2',true,8,5,[]], 3) // 这里推到为(string | number | boolean | never[])[]

    // 在类型别名/接口中使用泛型

    type A<T> = {
        name: T,
        id: T
    }


    type B<T> = (a: T, b: number) => boolean

    interface C<T> {
        (a: T, b: number): boolean
    }

    function myFilter<T>(arr: T[], callback: C<T>): T[] {
        const result: T[] = []
        arr.forEach((item, index) => {
            if (callback(item, index)) result.push(item)
        })
        return result
    }

    const result3 = myFilter<number>([1,2,3,4,5,6,7,8], (item, index) => item%2 === 0)

    console.log(result3)

    // 在类中使用泛型

    class ArrayHelper<T> {
        arr: T[]
        constructor(arr: T[]) {
            this.arr = arr
        }
        print(): T[] {
            return this.arr
        }
        indexOf(val: any): number {
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] === val) {
                    return i
                }
            }
            return -1
        }
        
    }

    const result4 = new ArrayHelper<number>([1,2,3,4,5])

    console.log(result4.print()) // 这里就会明确输出的是一个number[]
```

### 泛型约束

#### 使用关键字extends进行继承接口/类型别名的约束

```ts

type A = {
    a: number,
    b: number
}

interface B {
    a: number,
    b: number
}

// 使用关键字extends进行约束泛型, 可以继承接口、类型别名等
function sum<T extends B> (obj: T): number {
    return obj.a + obj.b;
}

const result = sum({
    a: 1,
    b: 2,
    c: 3
})

console.log(result) // 3
```

### 多泛型

```ts
    function mixinArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
        let len = arr1.length
        let result: (T | U)[] = []
        if (arr1.length < arr2.length) len = arr2.length
        for (let i = 0; i < len; i++) {
            if (i < arr1.length) result.push(arr1[i])
            if (i < arr2.length) result.push(arr2[i])
        }
        return result
    }

    const result = mixinArray<number, string>([1, 3, 5, 2, 9],['a', 'c', 'b'])

    console.log(result)
```

## 访问器

### 用于控制属性的读取(get)和赋值(set)

```ts
    class User {
        name: string
        constructor(name: string, private _age: number) {
            this.name = name
            this._age = _age
        }
        
        public set age(v : number) {
            console.log('开始赋值')
            this._age = v;
        }
        
        
        public get age() : number {
            console.log('开始读取')
            return this._age
        }
        
    }

    const user1 = new User('cg', 21)

    user1.age = 22
    console.log(user1) // User { _age: 22, name: 'cg' }
```

## 修饰符

- readonly
    - 只读修饰符
    - 不会在编译后显示
    - **细节注意:** 当该修饰符出现在这种情况下```const arr1: readonly number[] = [1, 2, 3]```时, 表示的是该数组是无法进行任何改变的(不能进行push等等这种操作), 出现在这种情况下```const Demo {readonly arr1: number[]}```时, 表示该数组是可以进行改变的(能进行push这种操作), 但是两种情况都不能允许对数据的地址产生任何改变

```ts
    interface User {
        readonly id: string,
        name: string,
        age: number,
    }

    const user1: User = {
        id: '1',
        name: 'maomao',
        age: 18
    }

    // user1.id = '2'   // 无法分配到 "id" ，因为它是只读属性
```

- public/private
    - 访问修饰符
    - 控制类中某个成员的访问权限
    - public 公开的权限, private 私有的权限, 只能够在类中进行
    - 不会在编译后显示
```ts
    class User {
        name: string
        private password: string
        readonly pid?: string
        sex: '男' | '女'
        constructor(name: string, password: string, pid?: string, sex: '男' | '女' = '男') {
            this.name = name
            this.password = password
            this.pid = pid
            this.sex = sex
        }
        private print() {
            console.log(this.password)
        }
    }

    const user1 = new User('cg', '123123', '123541325132412')
    // user1.pid = '2131254215123123' // 无法分配到 "pid" ，因为它是只读属性。
    // user1.print() // 方法也可以私有化, 属性“print”为私有属性，只能在类“User”中访问。
    console.log(user1) // 正常输出
    // user1.password = '3514124312' // 属性“password”为私有属性，只能在类“User”中访问。
```

## 在React中使用Ts

```ts
// ***index.tsx***
import Demo from '@/components/Demo'
import React, { useState } from 'react'

export default function IndexPage() {

  const [Num, setNum] = useState(0)

  return (
    <div>
      <h1>Hello React+Ts</h1>
      <Demo
        num={Num}
        onChange={(val) => {
          setNum(Num + val)
        }}
      />
    </div>
  );
}

// ***Demo/index.tsx***
import React from 'react'
import style from './index.less'

interface Props {
    num: number
    onChange?: (val: number) => void
}

// 两种写法
//  第一种
// export default function index(props: Props) {
//     return (
//         <div>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(-1)
//                 }}
//             >-</button>
//             <h1>{props.num}</h1>
//             <button
//                 className={style.button}
//                 onClick={() => {
//                     props.onChange && props.onChange(1)
//                 }}
//             >+</button>
//         </div>
//     )
// }

// 第二种

const index: React.FC<Props> = (props) => {
    return (
        <div>
            <button
                className={style.button}
                onClick={() => {
                    props.onChange && props.onChange(-1)
                }}
            >-</button>
            <h1>{props.num}</h1>
            <button
                className={style.button}
                onClick={() => {
                    props.onChange && props.onChange(1)
                }}
            >+</button>
        </div>
    )
}

export default index
```

