
function mixinArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    let len = arr1.length
    let result: (T | U)[] = []
    if (arr1.length < arr2.length) len = arr2.length
    for (let i = 0; i < len; i++) {
        if (i < arr1.length) result.push(arr1[i])
        if (i < arr2.length) result.push(arr2[i])
    }
    return result
}

const result = mixinArray<number, string>([1, 3, 5, 2, 9],['a', 'c', 'b'])

console.log(result)
