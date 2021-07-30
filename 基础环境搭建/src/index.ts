// 在node中搭建ts环境只需要npm i typescript即可
let a:string = 'hello typescript'; // :类型   限定变量类型
console.log(1)

// 使用第三方库简化编译流程
// ts-node: ts代码在内存中编译并运行

// 基本类型约束
// 类型约束可以约束变量/函数参数/函数返回值
const str:string = 'CodeGorgeous'
function myPrint(str:string):Array<string> {
    const str2:string[] = [str]
    return str2
}
const result:object = myPrint(str)
console.log(result)

function isOdd(n:number):boolean {
    if (n % 2 === 1) {
        return true
    }
    return false
}

// const str2:string = null;
// const num:number = undefined;

// 类型
/** 基本类型:
 *  :string 字符串
 *  :number 数字
 *  :boolean 布尔值
 *  :string[] 由字符串所组成的数组  完整写法为  :Array<string>
 *  :number[] 由数字所组成的数组    完整写法为  :Array<number>
 *  :object 对象
 *  null和undefined可以被当为任何类型的子类型,一般不希望这么做，则可以在配置文件中开启strictNullChecks为true更严格的空检查
*/

let str3:string | undefined;
if (typeof str3 === 'string') {
    str3.fixed() // 会自动提示出关于字符串相关的方法 
}

function print():void {
    console.log('hello world')
}

function printNever(msg:string):never {
    throw new Error(msg)
}

let demo:never;

let demo2: 1 | 2; // 字面量类型，只能取两者中的值
let demo3:[]; // 只能且永远赋值为一个空数组
let obj : {
    name:string
    age:number
} // obj有且只能有两个属性，且属性类型受约束 
obj = {
    name: 'CodeGorgeous',
    age: 21
}

let arr2:[string, number, boolean]; // 元祖类型 
arr2 = ['CodeGorgeous', 21, true];

let demo4:any; // 可以赋值为任何类型的数据
/** 其他类型:
 *  约束类型 | 约束类型 联合类型
 *  :void 通常用于约束函数返回值，表示该函数没有任何返回值
 *  :never 通常用于约束函数返回值，表示该函数永远不会结束，例如：throw new Error/死循环
 *          或者可以给变量约束为:never，表示永远不能被赋值
 *  字面量约束
 *  元祖类型约束 固定数组长度及其每一位的类型
 *  :any 任意类型，ts不会对其进行类型检查
*/

// 类型别名 
// 定义一个类型别名 type 名字 = 约束
type Shop = {
    name: string
    price: number
    isDiscount: boolean
}

// 可以在对象上用到别名
let obj2:Shop;
obj2 = {
    name: 'apple',
    price: 9.9,
    isDiscount: false
}
// 可以用在函数上
function printShop(name:string, price:number):Shop {
    return { 
        name,
        price,
        isDiscount: true
    }
}

// 函数的相关约束

// 说明返回参数的情况
/**
 * 得到和
 * @param a 
 * @param b 
 */
function printSum(a: number, b:number):number;
/**
 * 得到拼接字符串
 * @param a 
 * @param b 
 */
function printSum(a: string, b:string):string;
// 被约束后的函数，其中?表示此参数为可选
function printSum(a: number | string, b?: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a+b
    }
    printNever('参数应为同一种类型')
}
const result1 = printSum(1,2)

// 扑克牌小练习
type Arr = string[]
class Poker{
    isAbandon: boolean
    pokerArr: Arr
    decor: Arr
    constructor(isAbandon: boolean) {
        this.isAbandon = isAbandon
        this.pokerArr = []
        this.decor = ['♣️', '♠️', '♦️', '♥️']
    }
    // 创建牌组
    create():void {
        for(let i =1; i <= 13; i++) {
            for (const iterator of this.decor) {
                if (i <= 10) {
                    this.pokerArr.push(`${iterator}${i}`)
                } else if (i === 11) {
                    this.pokerArr.push(`${iterator}J`)
                } else if (i === 12) {
                    this.pokerArr.push(`${iterator}Q`)
                } else if (i === 13) {
                    this.pokerArr.push(`${iterator}K`)
                }
            }
        }
        // 当前牌组需要大小王
        if (this.isAbandon) {
            this.pokerArr.push('大王','小王')
        }
    }
    // 打印牌组 
    print():void {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌')
            return
        }
        for (const iterator of this.pokerArr) {
            console.log(iterator)
        }
    }
    // 清空牌组
    clear():void {
        this.pokerArr = []
        console.log('已清空牌组')
    }
    // 按照花色查询牌
    searchPoker(color: '♣️' | '♠️' | '♦️' | '♥️'):void {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌')
            return
        }
        for (const iterator of this.pokerArr) {
            if (iterator.indexOf(color) >= 0) {
                console.log(iterator)
            }
        }
    }
    // 打乱牌组
    shufflePoker():void {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌')
            return
        }
        this.pokerArr =  this.pokerArr.sort(item => Math.random() - 0.5)
    }
    
}
const poker = new Poker(true)
poker.create()
// poker.clear()
// poker.print()
// poker.searchPoker('♣️')
poker.shufflePoker()
poker.print()