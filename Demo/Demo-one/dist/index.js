class User {
    constructor(name, password, pid, sex = '男') {
        this.name = name;
        this.password = password;
        this.pid = pid;
        this.sex = sex;
    }
    print() {
        console.log(this.password);
    }
}
const user = new User('cg', '123123', '123', '男');
