// 接口和类型兼容性
// 接口就是用于约束类，对象，函数的标准
// 接口可以继承

// 接口是不会出现在编译结果中
interface User { // 建议约束对象的时候使用接口进行约束
    name: string,
    age: number,
    print: () => void // 表示这个函数没有参数，返回值为void，没有返回值
}
// 暂时看来和type很是相似
const demo1:User = {
    name: 'CodeGorgeous',
    age: 21,
    print() {}
}

// 接口约束函数
interface Condition {
    (number: number): boolean
}
// 使用type约束的版本
type Condition2 = (number: number) => boolean
function sum(numbers: number[], callBack: Condition):void {
    numbers.forEach(item => {
        if (callBack(item)) {
            console.log(item)
        }
    })
}
sum([1, 2, 3, 4, 5], (number) => number % 2 === 1) // 1 3 5

// 接口继承
interface A {
    name: string
}
interface B extends A {
    age: number
}
interface C extends A, B {
    sex: boolean
}
const demo5:C= {
    name: 'CodeGorgeous',
    age: 21,
    sex: true
}
// type版本实现继承效果使用&进行继承
type D = {
    name: string
}
type E = {
    age: number
} & D
type F = {
    sex: boolean
} & E
const demo6:F = {
    name: 'CodeGorgeous',
    age: 21,
    sex: true
}
// 在继承方面：interface和type的区别
//  1: interface禁止更改父级的约束条件
//  2: type后续对父级的约束条件进行更改时，之后增加那个属性的约束条件，并不会覆盖 