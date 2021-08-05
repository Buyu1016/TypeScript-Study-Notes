// 优化Poker
// 扑克牌小练习
import { Color, Point, specialPoint } from './enums'
export class Poker3 {
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
            const arr: specialPoint[] = [{
                type: 'JOKER'
            }, {
                type: 'joker'
            }]
            for (const iterator of arr) {
                this.pokerArr.push(iterator.type)
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

const result = new Poker3(true)
result.create()
result.print()