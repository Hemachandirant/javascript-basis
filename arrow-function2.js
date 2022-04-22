//age calculator

let ageCalculator = (yearofBirth) =>{
    currentYear = 2022;
    if(yearofBirth!=null && yearofBirth!=undefined){
        let age = currentYear-yearofBirth;
        console.log(age);
    }else{
        console.log("Enter valid year of birth");
    }

}

ageCalculator(2000);
