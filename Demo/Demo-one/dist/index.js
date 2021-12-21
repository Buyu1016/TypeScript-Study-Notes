class User {
    constructor(userName, userPwd) {
        this.userName = userName;
        this.userPwd = userPwd;
        User.users.push({
            userName,
            userPwd
        });
    }
    static login(userName, userPwd) {
        for (const iterator of User.users) {
            if (iterator.userName === userName && iterator.userPwd === userPwd) {
                return {
                    state: 'success',
                    msg: '登陆成功',
                    data: {}
                };
            }
        }
        return {
            state: 'error',
            msg: '登陆失败',
            data: {}
        };
    }
}
User.users = [];
const user1 = new User('maomao', '123456');
console.log(User.login('cg', '123123'));
console.log(User.login('maomao', '123456'));
