// 在node中搭建ts环境只需要npm i typescript即可
let a = 'hello typescript'; // :类型   限定变量类型
console.log(1);
// 使用第三方库简化编译流程
// ts-node: ts代码在内存中编译并运行
// 基本类型约束
// 类型约束可以约束变量/函数参数/函数返回值
const str = 'CodeGorgeous';
function myPrint(str) {
    const str2 = [str];
    return str2;
}
const result = myPrint(str);
console.log(result);
function isOdd(n) {
    if (n % 2 === 1) {
        return true;
    }
    return false;
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
let str3;
if (typeof str3 === 'string') {
    str3.fixed(); // 会自动提示出关于字符串相关的方法 
}
function print() {
    console.log('hello world');
}
function printNever(msg) {
    throw new Error(msg);
}
let demo;
let demo2; // 字面量类型，只能取两者中的值
let demo3; // 只能且永远赋值为一个空数组
let obj; // obj有且只能有两个属性，且属性类型受约束 
obj = {
    name: 'CodeGorgeous',
    age: 21
};
let arr2; // 元祖类型 
arr2 = ['CodeGorgeous', 21, true];
let demo4; // 可以赋值为任何类型的数据
// 可以在对象上用到别名
let obj2;
obj2 = {
    name: 'apple',
    price: 9.9,
    isDiscount: false
};
// 可以用在函数上
function printShop(name, price) {
    return {
        name,
        price,
        isDiscount: true
    };
}
