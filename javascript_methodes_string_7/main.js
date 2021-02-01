// Exo 1
// let mot = prompt("Entrez un mot");
// let lettre = prompt("Entrez la lettre que vous voulez retirer du mot" + mot);
// alert(mot.replace(lettre, ""));

// Exo 2
// let mot = prompt("Entrez un mot: ");
// let longueurMot = mot.length;
// alert( mot.replace( mot.charAt( Math.trunc( Math.random() * longueurMot) ), "")); 

// Exo 3
let prénom = prompt("Entrez votre prénom: "); 
let nom = prompt("Entrez votre nom: ");
let age = parseInt(prompt("Entre votre âge"));
let taille = prompt("Entrez votre taille").toLowerCase(); 

let lettre1 = prompt("Premiere lettre: " + nom);
let lettre2 = prompt("Deuxième lettre: " + nom);
nom = nom.replace(lettre1, lettre1.toUpperCase());
nom = nom.replace(lettre2, lettre2.toUpperCase());
alert(nom)

let prénom2 = prénom.replace(prénom.charAt(Math.trunc(Math.random() * prénom.length)),);

