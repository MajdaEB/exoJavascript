let age = parseInt(prompt("Entre votre âge"));
console.log(typeof age);
let nb = age.toString();
console.log(typeof nb);
let annee = prompt("Entre une année future"); 
let cetteannee = 2020;
let year = annee;
alert("En " + year + " tu auras " + (age + (year-cetteannee)) + " ans");
alert("Vous êtes né en " + (cetteannee - age));
 