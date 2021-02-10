// 1.
let prenom = ["Antoine", "Ayoub", "Bilal", "Elias", "Laurie","Majda", "Nathan", "Yahya", "Yasmina"]
// 2.
console.log(prenom);
// 3.
prenom.forEach((element) => console.log(element.charAt(0)));
// 4.
prenom.forEach((element) => console.log(element.substring(1, 2)));
// 5.
prenom.forEach((element) => console.log(element.substring(1, 2) + element));
// 6.

// prenom.forEach((element,index) => {
// if(prenom.indexOf(element) % 2 == 0) {
//     if(index%2 == 0){
//         console.log(element)
//     }
// };