let showdata = ()=>{
    console.log("This is data ");
}
showdata();

let showDetails = (id,name,age)=>{
    response = (`ID: ${id}, name:${name}, age${age}`);
    return response;
}
console.log(showDetails(12,"hoken",23));