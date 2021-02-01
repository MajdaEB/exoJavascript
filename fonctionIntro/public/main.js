// # Exo 1 Additionner

// - Créez une fonction qui prend deux paramètres et en retourne la somme.
// - Faites un console.log du résultat (_hors de la fonction_).

// let maSomme = (nb1, nb2) => {
//     console.log(nb1 + "+" + nb2 + "=" + (nb1 + nb2));
// }; 
// maSomme(3,50);

// # Exo 2 Soustraire

// - Créez une fonction qui prend deux paramètres et en retourne la différence du second au premier.
// - Faites un console.log du résultat (_hors de la fonction_).

// let maSoustraction = (nb1, nb2) => {
//     console.log(nb1 + "-" + nb2 + "=" + (nb1 - nb2));
// };
// maSoustraction(3,50);

// # Exo 3 Multiplication
// - Créez une fonction qui prend deux paramètres et en retourne le produit.
// - Faites un console.log du résultat (_hors de la fonction_).

// let maMultiplication = (nb1, nb2) => {
//     console.log(nb1 + "*" + nb2 + "=" + (nb1 * nb2));
// };
// maMultiplication(3,50);

// # Exo 4 Division

// - Créez une fonction qui prend deux paramètres et en retourne le quotient du premier par le second.
// - Faites un console.log du résultat (_hors de la fonction_).

// let maDivision = (nb1, nb2) => {
//     console.log(nb1 + "/" + nb2 + "=" + (nb1 / nb2));
// };
// maDivision(18, 3);

// # Exo 5 Modulo

// - Créez une fonction qui prend deux paramètres et en retourne le reste de la division du premier par le second.
// - Faites un console.log du résultat (_hors de la fonction_).

// let monModulo = (nb1, nb2) => {
//     console.log(nb1 + "%" + nb2 + "=" + (nb1 % nb2));
// };
// monModulo(19, 3);

// # Exo 6 Carré

// - Créez une fonction qui prend un paramètre et en retourne le carré.
// - Faites un console.log du résultat (_hors de la fonction_).

// let monCarre = (nb1) => {
//     console.log(nb1 + " au carré = " + (nb1 * nb1)));
// };
// monCarre(4);

// # Exo 7 Exposant

// - Créez une fonction qui prend deux paramètres et en retourne le premier exposant le second.
// - Faites un console.log du résultat (_hors de la fonction_).

// let monCarre = (nb1, nb2) => {
//     console.log(nb1 + " puissance " + nb2 + "= " + (nb1 ** nb2)); '^' permet aussi de faire un exposant.
// };
// monCarre(3, 4);

// # Exo 8 Capitalize

// - Créez une fonction `capitalize` qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule.

// function capitalize(a) {
//     return (a + '').charAt(0).toUpperCase()+a.substr(1).toLowerCase();
// };
// capitalize('je suis fatiguée');
// console.log(capitalize('je suis fatiguée'));

// # Exo 9 Calcul

// - Créez une fonction `calcul` ayant 3 paramètres.
//   > nbr1, nbr2, operator
// - Il faut donc pouvoir mettre deux nombres, choisir entre + - \* ou / et obtenir une réponse.
// - _(Utilisez un switch)_
// let operator = prompt("Choisissez un opérateur mathématique.")
// let calcul = (nb1, nb2) => {
//     switch (operator) {
//         case "+":
//             console.log(nb1 + "+" + nb2 + "=" + (nb1+nb2));
//             break;
//         case "-":
//             console.log(nb1 + "-" + nb2 + "=" + (nb1-nb2));
//             break;
//         case "/":
//             console.log(nb1 + "/" + nb2 + "=" + (nb1/nb2));
//             break;
//         case "*":
//             console.log(nb1 + "*" + nb2 + "=" + (nb1*nb2));
//             break;
//         default:
//             alert("Problème d'opérateur")
//             break;
//     } 
// }
// calcul (4, 2); 