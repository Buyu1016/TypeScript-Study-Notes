interface User {
    name: string;
    age: number;
    pid?: string;
}
declare let user: Partial<User>;
declare let user1: Required<User>;
declare let user2: Readonly<User>;
declare let user3: Exclude<"prop1" | "prop2" | "prop3", "prop2">;
declare let user4: Extract<"prop1" | "prop2" | "prop3", "prop2">;
declare let user5: NonNullable<"prop1" | undefined | null | "prop4">;
declare type test = () => User;
declare let user6: ReturnType<test>;
declare class User3 {
}
declare let user7: InstanceType<typeof User3>;
