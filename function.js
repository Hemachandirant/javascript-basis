function Name(name){
    console.log(`His Name is ${name}` );
}

Name("Hemachandiran");

function details(name,age,place,work){
    console.log(`His name is ${name} of age ${age} living in ${place} and working as a ${work}`);
}

details("Hemachandiran",21,"Chennai","Engineer");

function place(name="London",Climate='Windy'){
    console.log('This place '+name +' is '+Climate);
}
place();
place("America","Hot");