// 模块化 
import print, { sum } from "./moduleOne";
import fun from './moduleTwo'
// import fs from 'fs' // 会报错的，请注意
// 原因: fs模块的导出方式为module.exports = {}是CommonJs, 没有默认导出的，所以需要进行按需拿取函数或者导出全部而不是导出默认 
// 解决1:
// import * as fs from 'fs'
// 解决2:
// 启用配置esModuleInterop
import fs from 'fs'
// TS中统一使用ES6模块化
console.log(sum(1,2))
fun()
print()
console.log(fs)

// 在TS中使用CommonJs
// 引入方式:
import obj = require('./moduleComminJsOne')
console.log(obj.sum(1,2)) 