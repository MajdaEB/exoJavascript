// exo1
let ddiv = document.getElementsByTagName('div')[2].firstElementChild;
console.log(ddiv);
// exo2
let ddiv2 = document.getElementsByTagName('div')[2].lastElementChild;
console.log(ddiv2);
// exo3
let ddiv3 = document.getElementsByTagName('div')[2].children[0];
console.log(ddiv3.children);
// exo4
let ddiv4 = document.getElementsByTagName('div')[2].lastElementChild;
console.log(ddiv4.children);
// exo5
let i = document.getElementsByTagName('i')[0].parentElement;
console.log(i);
// exo6
let b = document.getElementsByTagName('b')[0].parentElement;
console.log(b);
// exo7
let pdiv = document.getElementsByTagName('div')[2].firstElementChild;
console.log(pdiv.nextElementSibling);