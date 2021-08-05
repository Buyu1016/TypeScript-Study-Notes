// 类
class User{
    readonly id: string
    name: string
    age: number
    sex: 'male' | 'female' = 'male'
    phone?: string
    // email: string    // public email: string是简化写法

    // 访问修饰符
    //  public  公开
    //  private 私有，只能在内容访问到
    private smoke: number = 5
    private isSmoke: number = 0
    constructor(id: string, name: string, age: number, public email: string, sex) {
        this.id = id
        this.name = name
        this.age = age
        this.sex = sex
        this.email = email
    }
    smokeing() {
        if (this.isSmoke >= this.smoke) {
            console.log('吸烟有害健康，请适量吸烟')
            return
        }
        console.log('哇唔，吸一口仿佛升天')
        this.isSmoke ++
    }
}