function Employee(name,age,email,dept,salary){
    this.name = name;
    this.age = age;
    this.email = email;
    this.dept = dept;
    this.salary = salary;
}

//add new properties to prototype
Employee.prototype.branch = 'BG';
Employee.prototype.nationality = 'Indian';

//add new methods to prototype
Employee.prototype.increaseSalary = function(amount){
    this.salary+=amount;
    console.log("New Increased salary is ",this.salary);
}
let employee = new Employee('John',23,'john@gmail.com','Engineering',201211);


console.log(employee);
console.log(employee.nationality);
console.log(employee.increaseSalary(1000000));