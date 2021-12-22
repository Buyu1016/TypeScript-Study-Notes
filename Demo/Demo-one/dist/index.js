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
        for (const iterator of this.users) {
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
const str = 'CodeGorgeous';
const base64_str = window.btoa(str);
const str_base64 = window.atob(base64_str);
console.log(`字符串: ${str}, base64加密字符串: ${base64_str}, base64解密字符串: ${str_base64}`);
