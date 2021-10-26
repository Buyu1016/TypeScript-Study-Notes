interface Callback {
    (n: number, i: number): boolean
}

function sum(arr: number[], callback: Callback): number {
    let s: number = 0
    arr.forEach((item, index) => {
        if (callback(item, index)) {
            s += item
        }
    })
    return s
}

const result = sum([1,2,3,4,5,6], (i) => i % 2 === 0)

console.log(result)
