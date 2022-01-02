interface User {
    name: string
    age: number
    sex: "男" | "女"
}

// 快速根据一个类型得到一个新的类型
type UserReadonly = {
    readonly [prop in keyof User]: User[prop]
}

const user: UserReadonly = {
    name: "cg",
    age: 21,
    sex: "男"
}