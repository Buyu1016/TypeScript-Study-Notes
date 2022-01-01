@test()
@test1()
class User {
    @test3
    @test4("名字")
    private name: string = "CodeGorgeous";

    @test5
    @test6("性别")
    private static sex: "男" | "女" = "男";
    
    private age: number = 21;

    @test7
    @test8("方法1")
    method1(): void {

    }

    @test9
    @test10("方法2")
    static method2(): void {

    }
}

function test() {
    console.log("test");
    return (target: new (...args: any[]) => object) => {
        console.log("test fn")
    }
}

function test1() {
    console.log("test1");
    return (target: new (...args: any[]) => object) => {
        console.log("test1 fn")
    }
}

/**
 * 普通成员的装饰器函数参数target指向原型对象, key为成员键名
 */
function test3(target: any, key: string) {
    console.log("test3", target, key);
    if (!target._props) {
        target._props = [];
    }
    target._props.push(key);
}

function test4(str: string) {
    console.log(str);
    return (target: any, key: string) => {
        console.log("test4", target, key);
    }
}

/**
 * 静态成员的装饰器函数参数target指向当前类, key为成员键名
 */
function test5(target: any, key: string) {
    console.log("test5", target, key);
}

function test6(str: string) {
    console.log(str);
    return (target: any, key: string) => {
        console.log("test6", target, key);
    }
}

/**
 * 成员方法的装饰器函数参数target指向原型对象, key为方法名, descriptor就是Object.defineProperty()的第三个参数对象描述
 */
function test7(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("test7", target, key, descriptor);
}

function test8(str: string) {
    console.log(str);
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        console.log("test8", target, key, descriptor);
    }
}

/**
 * 静态方法的装饰器函数参数target指向当前类, key为方法名, descriptor就是Object.defineProperty()的第三个参数对象描述
 */
function test9(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("test9", target, key, descriptor);
}
Object.defineProperty
function test10(str: string) {
    console.log(str);
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        console.log("test10", target, key, descriptor);
    }
}

const user = new User();
console.log((user as any)._props); // ["name"]