// 类型兼容性
// 基本类型: 必须完全匹配才行
// 对象: 子结构匹配法，拥有一些特征即可被认为匹配
//      当使用对象字面量赋值的时候，ts会进行更加严格的判断,暂时认为就是完全一样
// 函数: 参数可以少，但是不可以多传，如果约束要有返回值就一定要有，约束返回值无，那么就可有可无 

interface People{
    name: string,
    hobby: '赚钱',
    sound(): void,
    walk(): void,
    write(): void
}

const myMesage2 = {
    name: 'CodeGorgeous',
    age: 21,
    hobby: '赚钱' as '赚钱',
    sound(){},
    walk(){},
    write(){},
    pring(){}
}
// 能够这样进行兼容的 
//  思考: 为什么这里使用不会有问题？    原因: ts考虑到有可能这个数据是取自于服务器，充满着不确定性，只能依靠几个确定的值进行判别是否匹配
const demo9: People = myMesage2
// demo9.pring() 报错，只能使用到在接口中提前约束好的数据/方法
// 使用对象字面量
//  思考: 为什么这里使用会出现问题?     当你直接字面量赋值的时候，表明你自己已经明确知道当前对象的情况，不存在不确定性，所以进行完全匹配
// const demo8: People = {      会报错，age这个属性不符合接口约束
//     name: 'CodeGorgeous',
//     age: 21,
//     hobby: '赚钱' as '赚钱',
//     sound(){},
//     walk(){},
//     write(){}
// }

// 类型断言
//  当你明确知道某个值为某种类型时，就可以使用类型断言
//  关键字: as
