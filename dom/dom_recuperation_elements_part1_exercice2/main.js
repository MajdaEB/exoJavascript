// exo 1
let myBody = document.body;  
// exo2
console.log(myBody.children[0]); // ou .firstElementChild
// exo3
console.log(myBody.lastElementChild);
// exo4
let exo4 = document.getElementsByTagName('div')[0].children; //donne que les éléments (balises)
console.log(exo4); ou //console.log(exo4.childrenNodes); donne éléments + text
// exo5
let li = document.getElementsByTagName("li")[0].nextElementSibling;
console.log(li);
// exo6
let li2 = document.getElementsByTagName("li")[1].previousElementSibling;
console.log(li2);
