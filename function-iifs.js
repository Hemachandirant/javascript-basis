(function(){
    console.log("Iam a Immediately invoked function expression");
})();

(function(){
    let Name = 'Javascript';
    let Age = 21;
    function display(){
        console.log(Name);
        console.log(Age);
    }
    display();
})();