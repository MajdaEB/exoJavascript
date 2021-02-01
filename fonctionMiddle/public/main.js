// # Exo 1 reverseNumber

// - Créez une fonction `reverseNumber` qui prend un paramètre `nombre` et le retourne en inversé

// function reverseNumber(nombre){ 
//     return +nombre.toString().split('').reverse().join('')
//   }
// //   .split permet de diviser une chaîne de caractères àpd séparateur pour fournir un tableau de sous-chaînes
// //   .join crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau    
// alert(reverseNumber(851))

// # Exo 2 Pair

// - Créez une fonction `estPair` contenant un switch qui vérifie si un nombre est divisible par 2
// - Qui répond :
//   > "Le nombre `n` est pair, il est divisible par 2 : `n`/2 = `z`"
// - Dans le cas ou il est impair : "Ce nombre est impair, il n'est pas divisible par 2."

// function estPair(nombre) {
//     if (nombre%2 == 0) {
//         console.log("Le nombre `n` est pair, il est divisible par 2 : `n`/2 = `z`");
//     } else {
//         console.log("Ce nombre est impair, il n'est pas divisible par 2.");
//     }
// }
// estPair(5)

// # Exo 3 logIn

// - Créez une fonction `logIn` qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp".
// - Si oui, faites une alert "Vous êtes connecté".
// - Sinon, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp".

// function logIn() {
//     let mdp;
//     do {
//         mdp = prompt("Entrez votre mot de passe.");
//         if (mdp == "mdp") {
//             alert("Vous êtes connecté.");
//         } else {
//             alert("Mauvais mdp!");  
//         }
//     } while (mdp !== "mdp");
// };

// logIn();

let logIn = mdp => {
    if (mdp == "mdp") {
        return "ok"
    } else {
        return "raté"
    }
}

let mdp;
do {
    mdp = prompt("Mot de passe?")
} while logIn(mdp);
alert(logIn(mdp));