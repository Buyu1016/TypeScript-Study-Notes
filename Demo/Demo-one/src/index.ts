class User {
    name: string
    private password: string
    readonly pid?: string
    protected sex: '男' | '女'
    constructor(name: string, password: string, pid?: string, sex: '男' | '女' = '男') {
        this.name = name
        this.password = password
        this.pid = pid
        this.sex = sex
    }
    private print() {
        console.log(this.password)
    }
}

const user = new User('cg', '123123', '123', '男');
// console.log(user.sex); // 报错: 属性“sex”受保护，只能在类“User”及其子类中访问。

