# [TypeScript](https://www.typescriptlang.org/)

[toc]

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
            - noImplicitAny
                - Boolean
                - 开启对隐式any的检查
            - noImplicitThis
                - Boolean
                - 开启对隐式this的检查
            - experimentalDecorators
                - Boolean
                - 关闭对使用装饰器的警告(因为在当前时间节点装饰器仍未正式上线Js)
            - declaration
                - Boolean
                - 打包项目是否自动生成声明文件
            - sourceMap
                - Boolean
                - 打包项目是否自动生成源码地图
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

可以用于约束变量、函数参数、函数返回等

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
    - : 字面量
        - 一般用于约束变量限定在某个值
        - 例如: let sex: "男" | "女";   这样sex就只能从男/女中取值
    - : [string, boolean, number]
        - 约定为一个固定长度的数组, 自定义数组内每个位置的数据类型
    - : new() => object
        - 约定为一个类或者构造函数

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

对一直的一些类型定义为固定名称, 方便之后使用, 通过关键字type进行定义

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

类型别名可实现类似于接口继承的效果, 使用``&```关键字进行链接, 这种称之为交叉类型

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

函数重载, 在函数实现前, 对于函数的多种情况进行声明

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

可选参数, 选择个别参数

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

用于约束值在某个范围的进行取得, 解决真实值与逻辑含义的混淆, 减少重复代码, 使用关键字enum定义枚举

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

在Ts中使用模块化和正常使用模块化一致, **注意: 导入的文件名不要带上后缀名.ts, 否则会报错**, 使用Es6模块化标准或者CommonJs标准都可以, 可以通过配置**module**来控制编译后js文件使用的模块化标准

- 模块解析策略(此处不详细解释, 详情请[点击这里](https://blog.csdn.net/yivisir/article/details/115575394))
    - classic: 经典解析策略
    - node: node解析策略

- 注意事项
    - 像是nodejs自带的库使用的是CommonJs模块化标准, 在ts使用后编译结果可能会有意外的错误, 建议这样导入```import * as fs from 'fs'```, 而不是```import fs from 'fs'```这样导入, 如果一定要这样导入, 那么需要配置esModuleInterop
    - 如果想要在ts中书写commonJs模块化的代码具有类型检查, 则需要这样导出```export = {导出的内容}```, 这样导入```import 变量 = require(文件路径)```
    - **尽量使用Es6模块化标准进行书写TypeScript**

## 接口

用于约束类、对象、函数的标准, 使用关键字interface进行定义, **接口可以继承**, 当直接给对象字面量赋值, 会进行更加严格的判定

接口与类型别名的区别: 接口可以继承类也可以被类所实现(通过关键字**implements**约束), 而类型别名不行

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

接口既可以继承接口也同样可以继承类

```ts
    class A {
        a: number = 1
        b: number = 2
    }

    class B {
        name: string = 'cg'
        age: number = 21
    }

    interface C extends A, B {
        sex: '男' | '女'
    }

    interface D extends C {
        interest: string[]
    }

    const c: D = {
        a: 1,
        b: 2,
        name: 'cg',
        sex: '男',
        age: 21,
        interest: ['划水']
    }
```

- ### 接口的继承和类型别名的交叉类型的区别:
    - 子接口不能重复定义父接口的key的类型, 而交叉类型可以
    - 交叉类型中重复定义某个key类型则会使得类型进行叠加(经实测, 不同类型不管怎么叠加最后都会成为never类型)

## 类型兼容性

请在下面的代码中感受一下类型兼容性(鸭子辩型法)

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

当写代码时十分明确该数据的类型, 可以使用关键字as进行类型断言, ``` 数据 as 类型```

```ts
    interface User {
        name: string
        sex: '男' | '女'
    }

    let user1: User;

    const user2 = {
        name: 'John',
        sex: '男' as '男'
    }

    user1 = user2;
```

## 类

在Ts中需要使用属性列表描述constructor内所创建的值

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

- 单根性
    - 每个类最多拥有一个父类
- 传递性
    - A extends B {}    C extends A {}  B也是C的父类
- 抽象类
    - 有时类只是一个非常抽象的一个单元, 该类不适合new对象只适合用做其他类的基类, 该类就称之为抽象类, 通过关键字**abstract**修饰该类定义为抽象类, 该关键字不会在编译后显示
- 抽象成员/方法
    - 抽象类内部需要定义某个成员可只知道成员的类型并不知道成员的值, 继承该抽象类的子类必须对该成员进行赋值, 那么在该抽象类中可以使用关键字**abstract **修饰该成员, **抽象成员是只能够出现在抽象类中**
- 静态成员
    - 用于附着在构造函数本体上的成员/方法而不是附着在实例上的成员/方法, 通过关键字**static**修饰该成员/方法即可
```ts
    abstract class People {
        // 抽象成员
        abstract name: string;
        abstract breathing(): void
        // 静态成员
        static isPeople() {}
    }
    // const people = new People(); // 报错: 无法创建抽象类的实例

    class Man extends People {
        name = 'boy'
        breathing() {
            console.log('大口喘息~~~');
        }
    }
    const man = new Man();

    class Woman extends People {
        name = 'girl'
        breathing() {
            console.log('缓缓呼吸~~~');
        }
    }
    const woman = new Woman();
```
- 类中实现接口
    - 规定类中所必须的一些成员可通过实现接口, 通过关键字**implements**进行规范
- 类型保护函数
    - 在某些情况下需要对类进行进一步规范但是在使用时因为Ts是静态的不会在运行时存在, 所以无法通过```类实例 instanceof 接口```这种方式判别类实例是否存在某个方法, 这是就需要进行类型保护函数, 通过该函数对类实例进行类型交叉, 最后形成```类实例 & 接口```该类型
    -   ```ts
        import { FireShow } from "./inserfaces";

        export abstract class Animal {
            
            abstract type: string;
            abstract skill: string[];

            constructor(
                public name: string,
                public age: number
            ) {

            }

            abstract say(): void
            // 训练项目
            train(project: string): void {
                if (this.skill.includes(project)) return
                this.skill.push(project);
            }
        }

        export class Dog extends Animal {
            type = "🐶";
            skill = ['捡球'];
            say(): void{
                console.log('汪汪汪!');
            }
        }

        export class Monkey extends Animal {
            type = "🐒";
            skill: string[] = ['跳跃火圈'];
            say(): void{
                console.log('咿咿咿~');
            }
        }

        export class Mouse extends Animal implements FireShow {
            type = "🐭";
            skill: string[] = ['倒立洗头'];
            say() {
                console.log('叽叽叽~');
            }
            dance():void {
                console.log('老鼠开始跳舞了');
            }
        }

        export class Tiger extends Animal {
            type = "🐯";
            skill: string[] = ['跳凳子'];
            say() {
                console.log('吼吼吼~!');
            }
        }

        const animals: Animal[] = [
            new Dog("狗一", 2),
            new Dog("狗二", 1),
            new Monkey("孙悟空", 9999),
            new Mouse('舒克', 1),
            new Tiger('虎一', 6)
        ];

        for (const iterator of animals) {
            if (hasFireShow(iterator)) {
                // 这里iterator变为Animal & FireShow
                iterator.dance();        
            }
        }

        // 类型保护函数
        function hasFireShow(animal: object): animal is FireShow {
            if ((animal as FireShow).dance) {
                return true;
            }
            return false;
        }
        ```
- 索引器
    -  帮助在配置开启更加严格的any隐式的情况下能够通过在类中配置```[props: string]: any```使得类实例可以通过```实例[val]```进行动态的访问或更改, 可以同时存在多个索引器, 但索引器不能冲突或重复
    -   ```ts
        class User {
            // 索引器
            [val: string | number | symbol]: any

            0 = "Hello";

            constructor(
                public name: string,
                public age: number
            ) {

            }
        }

        const user = new User('cg', 21);
        ```

## 泛型

附属于函数、类、接口、类型别名之上的类型称之为泛型

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

- 泛型约束

使用关键字extends进行继承接口/类型别名的约束

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

- 多泛型

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

用于控制属性的读取(get)和赋值(set)

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

- protected
    - 访问修饰符
    - 类中该成员只能在自身类或者子类中访问
    - 不会在编译后显示 
```ts
    class User {
        name: string
        private password: string
        readonly pid?: string
        protected sex: '男' | '女'
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

    const user = new User('cg', '123123', '123', '男');
    // console.log(user.sex); // 报错: 属性“sex”受保护，只能在类“User”及其子类中访问。

```

## this的指向约束

首先需要明白在Js中对于this指向的问题, this的指向是在调用的时候才会明确. 但是在一些情况下会带来问题, 这时候就需要对this对指向进行约束, 并在配置中开启**noImplicitThis**

```ts
    interface User {
        name: string
        age: number
        print(this: User, msg: string): void
    }

    const user: User = {
        name: 'cg',
        age: 21,
        print(msg: string) {
            console.log(this.name, this.age, msg);
        }
    }

    function print1(this: any, msg: string): boolean {
        console.log(this.name, this.age, msg);
        return true;
    }
```

## 装饰器

装饰器用于分离关注点, 为类、属性、参数、方法提供元数据, 会在编译后的Js代码中存在, 装饰器运行时间位于类定义之后, 修饰器关键字 **@**

多装饰器运行顺序取决于顺序, 例如:```@test1() \n @test2() \n @test3()```, 则这三个装饰器执行顺序为```test1() \n test2() \n test3() \n  test3 \n test2 \n test1```, 自行可以通过tsc编译后的js代码分析会更加清楚

装饰器函数写法:
```ts
    // 注意两种装饰器的书写方式
    // @test该种方式使用的装饰器函数的target参数为User类
    @test
    // @test1()该种方式使用的装饰器函数的str为自己传入参数, 返回函数的target为User类
    @test1("Hello")
    class User {}

    // 第一种方式
    function test(target: new (...args: any[]) => object) {}

    // 第二种方式
    function test1(str: string) {
        return (target: new (...args: any[]) => object) => {}
    }
```

```ts
    @test()
    @test1()
    class User {
        @test3
        @test4("名字")
        private name: string = "CodeGorgeous";

        @test5
        @test6("性别")
        private static sex: "男" | "女" = "男";
        
        private age: number = 21;

        @test7
        @test8("方法1")
        method1(): void {

        }

        @test9
        @test10("方法2")
        static method2(): void {

        }
    }

    function test() {
        console.log("test");
        return (target: new (...args: any[]) => object) => {
            console.log("test fn")
        }
    }

    function test1() {
        console.log("test1");
        return (target: new (...args: any[]) => object) => {
            console.log("test1 fn")
        }
    }

    /**
     * 普通成员的装饰器函数参数target指向原型对象, key为成员键名
     */
    function test3(target: any, key: string) {
        console.log("test3", target, key);
        if (!target._props) {
            target._props = [];
        }
        target._props.push(key);
    }

    function test4(str: string) {
        console.log(str);
        return (target: any, key: string) => {
            console.log("test4", target, key);
        }
    }

    /**
     * 静态成员的装饰器函数参数target指向当前类, key为成员键名
     */
    function test5(target: any, key: string) {
        console.log("test5", target, key);
    }

    function test6(str: string) {
        console.log(str);
        return (target: any, key: string) => {
            console.log("test6", target, key);
        }
    }

    /**
     * 成员方法的装饰器函数参数target指向原型对象, key为方法名, descriptor就是Object.defineProperty()的第三个参数对象描述
     */
    function test7(target: any, key: string, descriptor: PropertyDescriptor) {
        console.log("test7", target, key, descriptor);
    }

    function test8(str: string) {
        console.log(str);
        return (target: any, key: string, descriptor: PropertyDescriptor) => {
            console.log("test8", target, key, descriptor);
        }
    }

    /**
     * 静态方法的装饰器函数参数target指向当前类, key为方法名, descriptor就是Object.defineProperty()的第三个参数对象描述
     */
    function test9(target: any, key: string, descriptor: PropertyDescriptor) {
        console.log("test9", target, key, descriptor);
    }
    Object.defineProperty
    function test10(str: string) {
        console.log(str);
        return (target: any, key: string, descriptor: PropertyDescriptor) => {
            console.log("test10", target, key, descriptor);
        }
    }

    const user = new User();
    console.log((user as any)._props); // ["name"]
```

关于装饰器的第三方库:
    - [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
    - [class-transformer](https://www.npmjs.com/package/class-transformer)
    - [class-validator](https://www.npmjs.com/package/class-validator)

## 类型推算

- typeof
    - 使一个变量的类型与另一个变量的未知的类型始终保持一致
    -   ```ts
            class User {
                name: string = "cg"
                age: number = 21
            }

            // 注意User这种类型就是类的一个实例对象而不是类本身, typeof User或者 new () => User这种类型才是类本身
            function createUser(clas: typeof User): User {
                return new clas();
            }
        ```
- keyof
    - 用于动态获取类/接口/类型别名中的所有成员组成的联合类型
    -   ```ts
            // 类示例演示
            class User {
                name: string = "cg"
                age: number = 21
            }

            const user = new User();

            function printVal(obj: User, key: keyof User) {
                return obj[key];
            }

            printVal(user, "name"); // cg
            // printVal(user, "sex"); // 类型“"sex"”的参数不能赋给类型“keyof User”的参数

            interface User1 {
                name: string
                age: number
                sex: "男" | "女"
            }

            // 接口示例演示
            const user1: User1 = {
                name: "cg",
                age: 21,
                sex: "男"
            }

            function printVal1(obj: User1, key: keyof User1) {
                return obj[key];
            }

            printVal1(user1, "age"); // 21
            // printVal1(user1, "pid"); // 类型“"pid"”的参数不能赋给类型“keyof User1”的参数

            // 类型别名示例演示
            type User2 = {
                name: string
                age: number
                pid: string
            }

            const user2: User2 = {
                name: "cg",
                age: 21,
                pid: "xxxxxxxxxxxxxxxxxx"
            }

            function printVal2(obj: User2, key: keyof User2) {
                return obj[key];
            }

            printVal2(user2, "pid"); // xxxxxxxxxxxxxxxxxx
            // printVal2(user2, "sex"); // 类型“"sex"”的参数不能赋给类型“keyof User2”的参数
        ```
- in
    - 
    -   ```ts
            interface User {
                name: string
                age: number
                sex: "男" | "女"
            }

            // 快速根据一个类型得到一个新的类型
            type UserReadonly = {
                readonly [prop in keyof User]: User[prop]
            }

            const user: UserReadonly = {
                name: "cg",
                age: 21,
                sex: "男"
            }
        ```

在TS中已经预设好的类型推算
    - Partial<T>
        - 将T内的所有属性都变为是可选的
    - Required<T>
        - 将T内的所有属性都变为是必填的
    - Readonly<T>
        - 将T内的所有属性都变为是可读的
    - Exclude<T, U>
        - 将T内的类型中剔除U中含有的类型
        - 常用于联合类型处理
    - Extract<T, U>
        - 将T内的类型中剔除除U中含有的类型
        - 常用于联合类型处理
    - NonNullable<T>
        - 将T内的null类型和undefined类型剔除
    - ReturnType<T>
        - 获知T函数的返回值类型
    - InstanceType<T>
        - 获知T类的实例对象类型

## 声明文件

以 **.d.ts**结尾的文件就是声明文件, 用于在编写Ts代码时也想要知道原来Js代码编写的相关类型提示, 开发者编写的是Ts文件想要打包自动生成 **.d.ts**需要配置开启 **declaration**

自己为Js文件想要添加类型说明的话可以创建 **.d.ts**文件放到Js文件同级, 并且文件名除后缀外需要保持一致, 在.d.ts文件中使用关键字 **declare**标注相应变量的类型