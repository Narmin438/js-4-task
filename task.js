// let num = 10;

// console.log(num < 13);      
// console.log(num <= 10);   
// console.log(num * 2 < 26);    
// console.log(num !== 20); 
// console.log(num + 5 == 15);


// let age = prompt("yasinizi daxil edin: ")
// if (age < 18) {
//     alert("icaze verilmedi")
// } else{
//     alert("icaze verildi")
// }


// task-1

let num = prompt("4 reqemli eded daxil edin: ")
if (num.length === 4){
    console.log((+num[0]) + (+num[1]) + (+num[2]) + (+num[3]));
}


// task-2

let name = prompt("Soyadinizi ve adinizi daxil edin: ");
let firstName = name.split(" ")[1];
console.log(`Salam, ${firstName}!`);