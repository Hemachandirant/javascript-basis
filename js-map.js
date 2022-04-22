// key-value Pairs and key can  be any type

let usermap = new Map();
usermap.set("id",100001);
usermap.set(12,"Hema");
usermap.set("available",true);
console.log(usermap);
usermap.set({id:12},{id:21,plot:"Hemchnad"});
console.log(usermap);

console.log(usermap.keys());
console.log(usermap.values());
