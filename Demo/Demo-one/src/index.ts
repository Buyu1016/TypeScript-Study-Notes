// 在类型别名/接口中使用泛型

type A<T> = {
    name: T,
    id: T
}


type B<T> = (a: T, b: number) => boolean

interface C<T> {
    (a: T, b: number): boolean
}

function myFilter<T>(arr: T[], callback: C<T>): T[] {
    const result: T[] = []
    arr.forEach((item, index) => {
        if (callback(item, index)) result.push(item)
    })
    return result
}

const result3 = myFilter<number>([1,2,3,4,5,6,7,8], (item, index) => item%2 === 0)

console.log(result3)

// 在类中使用泛型

class ArrayHelper<T> {
    arr: T[]
    constructor(arr: T[]) {
        this.arr = arr
    }
    print(): T[] {
        return this.arr
    }
    indexOf(val: any): number {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === val) {
                return i
            }
        }
        return -1
    }
    
}

const result4 = new ArrayHelper<number>([1,2,3,4,5])

console.log(result4.print()) // 这里就会明确输出的是一个number[]
