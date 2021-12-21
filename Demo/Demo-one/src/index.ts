interface LoginData {
    state: string
    msg: string
    data: any
}

interface User {
    userName: string
    userPwd: string
}

class User {
    private static users: User[] = [];

    constructor(
        public userName: string,
        public userPwd: string
    ) {
        User.users.push({
            userName,
            userPwd
        });
    }
    
    static login(userName: string, userPwd: string): LoginData {
        for (const iterator of this.users) { 
            if (iterator.userName === userName && iterator.userPwd === userPwd) {
                return {
                    state: 'success',
                    msg: '登陆成功',
                    data: {}
                }
            }
        }
        return {
            state: 'error',
            msg: '登陆失败',
            data: {}
        }
    }

}

const user1 = new User('maomao', '123456');
console.log(User.login('cg', '123123'));
console.log(User.login('maomao', '123456'));



