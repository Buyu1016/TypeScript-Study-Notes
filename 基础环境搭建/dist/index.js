let a = 'hello typescript';
console.log(1);
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
let str3;
if (typeof str3 === 'string') {
    str3.fixed();
}
function print() {
    console.log('hello world');
}
function printNever(msg) {
    throw new Error(msg);
}
let demo;
let demo2;
let demo3;
let obj;
obj = {
    name: 'CodeGorgeous',
    age: 21
};
let arr2;
arr2 = ['CodeGorgeous', 21, true];
let demo4;
let obj2;
obj2 = {
    name: 'apple',
    price: 9.9,
    isDiscount: false
};
function printShop(name, price) {
    return {
        name,
        price,
        isDiscount: true
    };
}
function printSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    printNever('参数应为同一种类型');
}
const result1 = printSum(1, 2);
class Poker {
    constructor(isAbandon) {
        this.isAbandon = isAbandon;
        this.pokerArr = [];
        this.decor = ['♣️', '♠️', '♦️', '♥️'];
    }
    create() {
        for (let i = 1; i <= 13; i++) {
            for (const iterator of this.decor) {
                if (i <= 10) {
                    this.pokerArr.push(`${iterator}${i}`);
                }
                else if (i === 11) {
                    this.pokerArr.push(`${iterator}J`);
                }
                else if (i === 12) {
                    this.pokerArr.push(`${iterator}Q`);
                }
                else if (i === 13) {
                    this.pokerArr.push(`${iterator}K`);
                }
            }
        }
        if (this.isAbandon) {
            this.pokerArr.push('大王', '小王');
        }
    }
    print() {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        for (const iterator of this.pokerArr) {
            console.log(iterator);
        }
    }
    clear() {
        this.pokerArr = [];
        console.log('已清空牌组');
    }
    searchPoker(color) {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        for (const iterator of this.pokerArr) {
            if (iterator.indexOf(color) >= 0) {
                console.log(iterator);
            }
        }
    }
    shufflePoker() {
        if (this.pokerArr.length === 0) {
            console.log('需要先创建一副牌');
            return;
        }
        this.pokerArr = this.pokerArr.sort(item => Math.random() - 0.5);
    }
}
const poker = new Poker(true);
poker.create();
poker.shufflePoker();
poker.print();
