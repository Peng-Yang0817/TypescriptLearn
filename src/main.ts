import "./ts/frist_typescript"

// 網頁添加文字
document.write("main.ts loading")

let isValid: boolean = true;
if (isValid) {
    console.log(`Valid is ${isValid}`);
    isValid = false;
}

// number
let count10: number = 10;
let count20: number = 20;
console.log(`${count10} - ${count20} = ${count10 - count20}`);

let a1: number = 10 // 十進制
let a2: number = 0b1000 // 二進制
let a3: number = 0o77 // 八進制
let a4: number = 0xa0 // 十六進制
console.log(a1 + "_" + a2 + "_" + a3 + "_" + a4)
console.log(`${a1}_${a2}_${a3}_${a4}`)

// string + number
let mess: string = " 對我來說就是零錢"
let money01: number = 100000000
console.log(money01 + mess)

//undefined、null
let nll: null = null
let udefined: undefined = undefined
console.log(nll)
console.log(udefined)

let a5: number = undefined
console.log(a5)

// Array
// defind01
let arr1: number[] = [1, 2, 3, 4]
console.log(arr1)
// defind02
let arr2: Array<number> = [5, 6, 7, 8]
console.log(arr2)

// tuple-元組
let arr3: [string, number, boolean] = ["Tim", 1000, false]
console.log(arr3)
console.log(arr3[0] == "Tom");
console.log(arr3[1] > 100);
console.log(arr3[2] == false);

// enum
enum Color {
    red = 1,
    blue = 4,
    green = 8,
}
let color1: Color = Color.blue
console.log(color1)
console.log(Color.red + "_" + Color.blue + "_" + Color.green)
//這邊輸出為: 1_4_8

// 物件
let studen: Studen = {
    name: "Tom",
    Age: 10
}
console.log(studen)

let Tom: Studen = { name: "Tom", Age: 10 }
let Jerry: Studen = { name: "Jerry", Age: 20 }
let Mei: Studen = { name: "Mei", Age: 30 }

let StudenList: Studen[] = [Tom, Jerry, Mei];
console.log(StudenList)
class Studen {
    name: string;
    Age: number;
}

console.log("======================================")
// void
function printMsg(): void {
    console.log("I just want to go home~~~")
}
console.log(printMsg())
// 這邊輸出為: I just want to go home~~~
//            undefined

// Object
function getObj(obj: object): object {
    console.log(obj)
    return {
        name: "卡卡西",
        age: 29,
    }
}
console.log(getObj({ name: "佐助", age: "man" }))
// print: {name: '佐助', age: 'man'}
//        {name: '卡卡西', age: 29}
// console.log(getObj('aa'))  it's error here
console.log(new String("aa")) //it's ok here
// print: String&nbsp;{'aa'}
console.log(String)
// print: String() { [native code] }
console.log("======================================")
let Studens: Studen[] = [];
Studens[0] = { name: "Tom1", Age: 10 }
Studens[1] = { name: "Tom2", Age: 10 }
Studens[2] = { name: "Tom3", Age: 10 }
Studens[3] = { name: "Tom4", Age: 10 }
console.log(Studens)
console.log("======================================")
// 聯合類型
function getData(data: string | number): string | number {
    return data
}
console.log(`getData(123)\n\t output: ${getData(123)}`)
console.log(getData("haha"))
// console.log(getData(true)) // it's error here
console.log("======================================")
// 類型斷言
// <string>只是斷言目前為string，但不意味將
function getData01(data: string | number): number {
    console.log(typeof (<string>data))
    console.log(typeof (data.toString()))

    if ((<string>data).length) {
        return (data as string).length
    } else {
        return data.toString().length
    }
}
console.log(getData01(587))
console.log(getData01("587"))
console.log("======================================")
// 類型推斷
let msg = 123
// msg = 'yayaya'   // 這邊會抱錯，因為上面TS會推斷msg為number，所以不能再賦予number以外的value
console.log(msg)

let msgAng // 這邊在宣告時，直接不放值，編譯器會自動宣告成any
msgAng = 123
msgAng = "yoyoyo"
console.log(msgAng)
console.log("======================================")

// 介面
interface IPerson {
    id: number
    name: string
    age: number
    sex: string
}
let person_1: IPerson = {
    id: 10,
    name: "Tim",
    age: 21,
    sex: "male"
}
console.log(typeof (person_1))
console.log(person_1)
person_1.id = 11
console.log(person_1)
console.log("======================================")

// readonly
interface IPerson_idReadOnly {
    readonly id: number
    name: string
    age: number
    sex: string
}
let person_2: IPerson_idReadOnly = {
    id: 1,
    name: "Yoei",
    age: 11,
    sex: "male"
}
// person_2.id = 11 // 因為id是ReadOnly，因此只能讀取
console.log(person_2)
console.log("======================================")

// ? 關鍵字
interface IPerson_questionMark {
    readonly id: number
    name: string
    age: number
    sex?: string
}
let person_3: IPerson_questionMark = {
    id: 1,
    name: "Yoei",
    age: 11
}
console.log(person_3)
// 因為介面只有sex是nullable，因此如果age沒有賦值編譯器就會抱錯
// let person_4: IPerson_questionMark = {
//     id: 1,
//     name: "Yoei",
//     sex: 'male'
// } 
console.log("======================================")

// 函數類型
// 1. 定義一個介面,用來做為某個函數的類型使用
// 定義此介面的方法必須接收兩個string參數，並且最終返回boolean類型
interface ISearchFun {
    (sourceData: string, substring: string): boolean
}

// 2. 定義一個函數,該類型就是上面定義的介面
const searchString: ISearchFun = function (
    sourceData: string,
    substring: string
): boolean {
    return sourceData.search(substring) > -1
}
// 3. 呼叫函數
console.log(searchString("Go home Bro", "Go"))
// 也可這樣寫
let searchString2: ISearchFun =
    function (data1: string, data2: string) {
        return data1.search(data2) > -1;
    }
console.log(searchString2("Go home Bro", "Go"))

console.log("======================================")

// 類實作與定義
interface IClass {
    readonly name: string
    studenList: Studen[]
    StudenInfo(): void
}

class class_1 implements IClass {
    readonly name: string = "A班";
    studenList: Studen[] =
        [
            { name: "Yoei", Age: 11 },
            { name: "Tim", Age: 20 },
            { name: "Mei", Age: 16 }
        ]
    constructor(name: string) {
        this.name = name
    }
    StudenInfo() {
        console.log(this.studenList)
    }
}

let class_one = new class_1("A班")
console.log(class_one)
class_one.StudenInfo()
console.log("======================================")

// 同個類實作多介面
// 1. 定義第一個介面
interface IFly {
    fly()
}

// 2. 定義第二個介面
interface ISwim {
    swim()
}

// 3. 定義一個類去實現IFly與ISwim,兩個介面
class Person2 implements IFly, ISwim {
    fly() {
        console.log("I can fly now. I'm Supper-Man.")
    }
    swim() {
        console.log("I can swim now")
    }
}

const person02: Person2 = new Person2()
person02.fly()
person02.swim()
console.log("======================================")

// 介面繼承介面
interface IFly {
    fly()
}

// 2. 定義第二個介面
interface ISwim {
    swim()
}
// 3. 使用介面去繼承其他介面
interface IAbility extends IFly, ISwim { }

// 4. 類別實作介面
class Person3 implements IAbility {
    fly() {
        console.log("I can fly now. I'm Supper-Man. i'm invincible.")
    }
    swim() {
        console.log("I can swim now. There's notthing can faster than me.")
    }
}

const person03: Person3 = new Person3()
person03.fly()
person03.swim()
console.log("======================================")

// 類別使用範例
class Person {
    // 定義屬性
    name: string
    age: number
    gender: string
    // 定義建構函數
    // 可以在屬性宣告後,直接賦值,當創建實體十,沒有填入,將會使用這邊輸入的預設值
    constructor(
        name: string = "Leo",
        age: number = 25,
        gender: string = "man"
    ) {
        // 對實體內的屬性進行初始化
        this.name = name
        this.age = age
        this.gender = gender
    }
    // 定義實體方法
    sayHi(msg: string) {
        console.log(`HI, my name is ${this.name}.`, msg)
    }
}

const person001: Person = new Person("Tim", 28, "man")
person001.sayHi("Go home.")
const person002: Person = new Person()
person002.sayHi("I want go home.")
console.log("======================================")

// 繼承
class Person_zhCh extends Person {
    // constructor(name: string, age: number, gender: string) {
    //     // 初始化父類別,這邊就是調用父類別的建構式
    //     super(name, age, gender)
    // }
    sayHi(msg: string) {
        console.log(`我的名是: ${this.name}! 我想說的是`, msg)
    }
}
const person003: Person_zhCh = new Person_zhCh("張三", 28, "man")
person003.sayHi("今晚吃啥?");
const person004: Person_zhCh = new Person_zhCh()
person004.sayHi("今晚吃啥?");
console.log("======================================")

// 類別的多型
class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }

    run(distance: number = 5) {
        console.log(`${this.name} is run about ${distance} meters`)
    }
}

// 定義第一個子類別
class Dog extends Animal {
    name: string
    constructor(name: string) {
        super(name)
        this.name = name
    }
    run(distance: number = 10) {
        console.log(`${this.name} is a dog,it is run about ${distance} meters`)
    }
}
// 定義第二個子類別
class Cat extends Animal {
    name: string
    constructor(name: string) {
        super(name)
        this.name = name
    }
    run(distance: number = 15) {
        console.log(`${this.name} is a cat,it is run about ${distance} meters`)
    }
}
let Dog01: Animal = new Dog("小黑")
let Cat01: Animal = new Cat("小花")
Dog01.run()
Cat01.run()

// 使用方式
console.log("\n\nHow to use polymorphism\n=================")
function showRun(ani: Animal) {
    ani.run()
}
showRun(new Dog("Barky"))
showRun(new Cat("Pagy"))
console.log("======================================")

class badGuy {
    readonly name: string
    Sex: string = "male"
    private Age: number = 18
    constructor(name: string = "tim") {
        this.name = name
    }
    Info() {
        console.log(`名稱:${this.name}，性別: ${this.Sex}，年齡: ${this.Age}`);
    }
}
let stu01: badGuy = new badGuy("阿財")
let stu02: badGuy = new badGuy()
console.log(stu01.name)
stu01.Info()
// 這是私有屬性，因此無法調用
// stu01.Age
console.log(stu02.name)
console.log("======================================")

class Person_static {
    static Name: string = "Leo"
    static sayHi() {
        console.log("こんにぎわ")
    }
}
console.log(Person_static.Name)
Person_static.sayHi()
console.log("======================================")

abstract class Animal_abs {
    abstract name: string
    // 抽象方法
    abstract eat()
    // 實例方法
    sayHi() {
        console.log("こんにぎわ_abs")
    }
}
class Dog_abs extends Animal_abs {
    name: string = "Tim"
    eat() {
        console.log("趴著吃_abs")
    }
}

const dog01: Dog_abs = new Dog_abs()
dog01.eat()
dog01.sayHi()
console.log("======================================")

const fullName = function
    (firstName: string = "東方", lastName?: string)
    : string {
    if (lastName) {
        return firstName + "_" + lastName
    } else {
        return firstName
    }
}

console.log(fullName())
console.log(fullName("諸葛"))
console.log(fullName("諸葛", "孔明"))
console.log("======================================")

function msg_dotdotdot(str1: string, str2: string, ...args: string[]) {
    console.log(str1)
    console.log(str2)
    console.log(args)
}

msg_dotdotdot("msg1", "msg2", "a", "b", "c", "d")
console.log("======================================")

// function add(var1: string, var2: string): string
// function add(var1: number, var2: number): number
function add(var1: string | number, var2: string | number): string | number {
    if (typeof (var1) != typeof (var2)) {
        return "error"
    }
    if (typeof var1 === "string" && typeof var2 === "string") {
        return var1 + var2
    } else if (typeof var1 === "number" && typeof var2 === "number") {
        return var1 + var2
    }
}

console.log(add("諸葛", "孔明"))
console.log(add(30, 60))
console.log(add("諸葛", 12))
console.log("======================================")

function getArr<T>(var1: T, var2: number): T[] {
    const arr: Array<T> = []
    // const arr: T[] = []  這樣也可以
    
    for (let i = 0; i < var2; i++) {
      arr.push(var1)
    }
    return arr
}

console.log(getArr<number>(123, 6))
console.log(getArr<string>("tim", 6))