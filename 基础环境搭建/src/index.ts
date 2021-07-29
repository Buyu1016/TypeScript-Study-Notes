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
