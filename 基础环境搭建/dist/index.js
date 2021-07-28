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
// 类型
/**
 *  :string 字符串
 *  :number 数字
 *  :boolean 布尔值
 *  :string[] 由字符串所组成的数组
 *  :number[] 由数字所组成的数组
 *  :object 对象
 *  :any 任意类型，ts不会对其进行类型检查
 */ 
