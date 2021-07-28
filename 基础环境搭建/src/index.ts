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
/**
 *  :string 字符串
 *  :number 数字
 *  :boolean 布尔值
 *  :string[] 由字符串所组成的数组  完整写法为  :Array<string >
 *  :number[] 由数字所组成的数组    完整写法为  :Array<number>
 *  :object 对象
 *  :any 任意类型，ts不会对其进行类型检查
 *  null和undefined可以被当为任何类型的子类型,一般不希望这么做，则可以在配置文件中开启strictNullChecks为true更严格的空检查
 */