// 1. Create an Author class and a Book class.

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    get name(){
        return this._name;
    }
    get email(){
        return this._email;
    }
    get gender(){
        return this._gender;
    }
    set name (name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }
    set gender(gender) {
        this._gender = gender;
    }
    toString(){
        return JSON.stringify(this);
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    set title(title){
        this._title = title
    }
    set author(author){
        this._author = author;
    }
    set price(price){
        this._price = price;
    }
    set quantity(quantity){
        this._quantity = quantity
    }
    getProfit(){
        return this._price * this._quantity
    }
    toString(){
        return JSON.stringify(this);
    }
}


// 2. Create an Account class. Account should have: id, name, balance.

class Account {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }
    static lastIdNumber = 0
    #id = Account.lastIdNumber++
    getId(){
        return this.#id
    }
    get name(){
        return this._name
    }
    get balance(){
        return this._balance
    }
    set name(name){
        return this._name = name
    }
    set balance(balance){
        return this._balance = balance
    }
    static identifyAccounts(accountFirst,accountSecond){
        if(accountFirst.#id === accountSecond.#id){
            return true
        }
        else{
            return false
        }
    }
    credit(amount){
        return this._balance+=amount
    }
    debit(amount){
        if(amount > this._balance){
            return "Amount exceeded balance."
        }
        else{
            return this._balance-=amount
        }
    }
    transferTo(anotherAccount, amount){
        if(amount > this._balance){
            return "Amount exceeded balance."
        }
        else{
            this._balance-=amount
            anotherAccount._balance += amount
            return this._balance
        }
    }
    toString(){
        return `Dear ${this._name}. Your account balance is $${this._balance}`
    }
}

// 3. Write classes: Person, Student, Staff.

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    get gender(){
        return this._gender
    }
    get age(){
        return this._age
    }
    set firstName(firstName){
        return this._firstName = firstName
    }
    set lastName(lastName){
        return this._lastName = lastName
    }
    set gender(gender){
        return this._gender = gender
    }
    set age(age){
        return this._age = age
    }
    toString(){
        return JSON.stringify(this)
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age)
        this.programs = programs
        this.year = year
        this.fee = fee
    }
    get programs(){
        return this._programs
    }
    get year(){
        return this._year
    }
    get fee(){
        return this._fee
    }
    set programs(programs){
        return this._programs = programs
    }
    set year (year){
        return this._year =year
    }
    set fee (fee){
        return this._fee = fee
    }
    passExam(program, grade){
        if(grade >= 50){
            return this.year++
        }
        else{
            return this.year
        }
    }
    toString (){
        return JSON.stringify(this)
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age)
        this.program = program
        this.pay = pay
    }
    get program(){
        return this._program
    }
    get pay(){
        return this._pay
    }
    set program (program){
        return this._program = program
    }
    set pay (pay){
        return this._pay = pay
    }
    toString(){
        return JSON.stringify(this)
    }
}