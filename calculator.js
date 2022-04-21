function calculator(num1,num2,calcType){
    if(calcType=='Add'){
        return num1+num2;
    }
    if(calcType=="Sub"){
        return num1-num2;
    }
    if(calcType=='Mul'){
        return num1*num2;
    }
    if(calcType=='Div'){
        return num1/num2;
    }
    else{
        return "Enter valid Calc Type";
    }
}

var x = 12
var y = 12
console.log(`Addition of ${x} + ${y} = ${(calculator(x,y,'Add'))}`);
