// 这样设计的秒处：
//  1:值进行二进制有奇特的形式
//  2:更方便的进行对权限的组合使用，例如：读取+写入+删除  1011
enum Jurisdiction{
   Read = 1, // 0001
   Write = 2,// 0010
   Query = 4,// 0100
   Delete = 8// 1000
}

// 或运算
//  其底层是会进行二进制转换的
let myJurisdiction:Jurisdiction = Jurisdiction.Read | Jurisdiction.Write | Jurisdiction.Query | Jurisdiction.Delete ;
console.log(myJurisdiction) // 15   转换为二进制则为1111
// 且运算
//  底层逻辑：
//      1111 & 1000 看第一位的位置是否为true|false
console.log(( myJurisdiction & Jurisdiction.Delete ) === Jurisdiction.Delete)
/**
 * 查询权限拥有权
 * @param target 查询的目标
 * @param authorify 查询目标的权限
 */
function queryAuthority(target: Jurisdiction, authorify: Jurisdiction):boolean {
    return (target & authorify) === authorify;
}
console.log(queryAuthority(myJurisdiction, Jurisdiction.Delete))

// 去除权限
function removeAuthorify(target: Jurisdiction, authorify: Jurisdiction) {
    return myJurisdiction =  target ^ authorify
}
removeAuthorify(myJurisdiction, Jurisdiction.Delete)
console.log(queryAuthority(myJurisdiction, Jurisdiction.Delete))
