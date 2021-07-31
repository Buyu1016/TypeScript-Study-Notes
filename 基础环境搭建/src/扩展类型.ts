// 扩展类型
//  类型别名 ｜ 枚举 ｜ 接口 ｜ 类

// 字面量类型的缺点
type identity = '先生' | '女士'
const my:identity = '先生' // 问题点：如果我此时更改type别名的约束值，则会影响到后续代码的复制，如果此时代码已经处于半成品/成品状态，这样会改动过多代码

// 解决方法：枚举
/**
 * 枚举写法：
 *  enum 枚举名{
 *      枚举字段 = 值1,
 *      枚举字段 = 值2,
 *      ......
 *  }
 * 枚举规则：
 *  枚举字段对应值只能为string/number
 *  值为number时会有特殊效果，下一个枚举字段如果没有赋值的话就会自动为上一个值的自增
 */
enum sex{
    male = '男',
    female = '女'
}
const mySex:sex = sex.male // 这样相当于赋值就不会写死

enum Grade{
    'grade1',
    'grade2',
    'grade3'
}
const myGrade:Grade = Grade.grade3  
console.log(myGrade)

// 改造扑克牌游戏
// 扑克牌小练习
enum Color{
    heart = '♥️',
    spade = '♠️',
    block = '♦️',
    blossom = '♣️'
}
enum Point{
    one = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = 'J',
    twelve = 'Q',
    thirteen = 'K'
}
// 特殊点数
enum specialPoint{
    JOKER = '大王',
    joker = '小王'
}
class Poker2 {
    isAbandon: boolean
    pokerArr: string[]
    constructor(isAbandon: boolean) {
        this.isAbandon = isAbandon
        this.pokerArr = []
    }
    // 创建牌组
    create():void {
        // 使用枚举属性后
        for (const iterator of Object.values(Color)) {
            for (const item of Object.values(Point)) {
                this.pokerArr.push(`${iterator}${item}`)
            }
        }
        // 当前牌组需要大小王
        if (this.isAbandon) {
            for (const iterator of Object.values(specialPoint)) {
                this.pokerArr.push(iterator)
            }
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
const poker2 = new Poker2(true)
poker2.create()
// poker2.print()