let function1 = function Name(){
    console.log("My Name is John");
}

let function2  = function Age(callback){
    console.log(12);
    callback();
}

function2(function1);

function2(function(){
    console.log("Hello Solar system");
})