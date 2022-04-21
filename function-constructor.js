function Account(name,age,balance,email){
    this.name = name;
    this.age = age;
    this.balance = balance;
    this.email = email;

}

let account = new Account('John',21,100000,"john@gmail.com");
console.log(account);
console.log(account.name);
console.log(account.balance);
