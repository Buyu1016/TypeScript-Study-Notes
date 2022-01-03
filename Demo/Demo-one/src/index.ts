interface User {
    name: string
    age: number
    pid?: string
}

// 全部可选
let user: Partial<User>

user = {}

// 全部必选
let user1: Required<User>

user1 = {
   name: "cg",
   age: 21,
   pid: "xxxxxxxxxxxxxxxxxxxx" 
}

// 全部为只读属性
let user2: Readonly<User>;
user2 = {
    name: "cg",
    age: 21
}

// user2.name = "gc"; name为readonly

let user3: Exclude<"prop1" | "prop2" | "prop3", "prop2">;

user3 = "prop1"
user3 = "prop3"
// user3 = "prop2" // 类型“"prop2"”不可分配给类型“"prop1" | "prop3"”

let user4: Extract<"prop1" | "prop2" | "prop3", "prop2">;

user4 = "prop2";
// user4 = "prop1"; // 类型“"prop1"”不可分配给类型“"prop2"”
// user4 = "prop3"; // 类型“"prop3"”不可分配给类型“"prop2"”

let user5: NonNullable<"prop1" | undefined | null | "prop4">

user5 = "prop1"
user5 = "prop4"
// user5 = undefined // 不能将类型“undefined”分配给类型“"prop1" | "prop4"”
// user5 = null // 不能将类型“null”分配给类型“"prop1" | "prop4"”

type test = () => User

let user6: ReturnType<test> 
user6 = {
    name: "cg",
    age: 21
}

class User3 {}

let user7: InstanceType<typeof User3>