interface User {
    name: string
    age: number
    print(this: User, msg: string): void
}

const user: User = {
    name: 'cg',
    age: 21,
    print(msg: string) {
        console.log(this.name, this.age, msg);
    }
}

function print1(this: any, msg: string): boolean {
    console.log(this.name, this.age, msg);
    return true;
}
