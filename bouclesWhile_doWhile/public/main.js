// ## Exo 1 Boucles simples

//   1. Créez une boucle qui demande une valeur à l'utilisateur tant que celui-ci n'entre rien
//   2. Créez une boucle qui demande un chiffre à l'utilisateur tant que celui-ci écrit un chiffre plus petit que 10
//   3. Créez une boucle while qui affiche un console.log indiquant chaque itération
//      > ☢ Ceci créera normalement une boucle infinie ☢
//   4. Créez une boucle while qui affiche un console.log indiquant chaque itération en commençant à 3 et s'arrêtant à 6
//   5. Créez une boucle qui affiche l'itération et qui s'incrémente de 2


// 1.
// let valeur;

// do {
//     valeur = prompt("Entrez une valeur svp");
// } while (!valeur.trim());

// 2.
// let nb;

// do {
//     nb = prompt("Entrez un chiffre.")
// } while (nb < 10 || isNaN(nb));

// 3.
// let i = 1;

// while (i == i) {
//     console.log(i);
//     i++;
// }
// 4.
// let i = 3
// while (i <=6) {
//     console.log(i);
//     i++;
// }
// 5.
// let i = 0
// while (i<=20) {
//     console.log(i);
//     i += 2;
// }
// ## Exo 2

//   - Créez un tableau de 4 légumes du nom de `panierLegumes`
//   - Vider le tableau `panierLegumes` pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
// let legumes = ["poireau", "carotte", "choux", "brocoli"];
// let caisseLegumes = [];

// while (legumes.length > 0) {
//     caisseLegumes.push(legumes.shift());
//     console.log(legumes);
//     console.log(caisseLegumes);
// }

// ## Exo3

//   - Préparez une énigme, puis posez la à l'utilisateur via un prompt
//   - Faites une boucle `while` qui va vérifier si l'utilisateur répond correctement à l'énigme
//     - Tant qu'il se trompe, reposez la question.
//     - S'il a juste, faites une alerte qui le félicite.
// let question = prompt("Quel animal miaule?");
// let reponse = "chat";

// while (question !== reponse) {
//     enigme = prompt("Raté!")
// }
// alert("T'as réussi!");


// Exo 4

// - Refaites l'exo 4 avec `do...while`
// let question = prompt("Quel animal miaule?");
// let reponse = "chat";

// do {
//     question = prompt("Quel animal miaule?");
//     alert("T'as raté!");
// } while (reponse !== question);
// alert("T'as réussi!")

// Exo 5

//   - Créez une variable contenant l'année actuelle
//   - Créez un programme qui génère une année de façon aléatoire entre 1970 et 2018 (ex: -> `let randomYear`). L’utilisateur doit donner le bon âge en répondant à la question suivante :
//     > Si je suis né(e) en 1988(`randomYear`), quel âge ai-je aujourd’hui ?
//   - L’utilisateur a trois essais. S’il donne la bonne réponse ou qu’il échoue ses trois essais, on sort de la boucle
//   - Finir en affichant quelques chose de pertinant.

// let annee = new Date().getFullYear();
// let randomYear = Math.floor(Math.random() * (annee - 1970) + 1970);
// let question;
// let reponse = annee - randomYear;
// let i = 1;

// do {
//     do {
//         question = prompt("Si je suis né en " + randomYear + ", quel âge ai-je aujourd'hui? ")
//     } while (!question);
//     i++;
// } while (question != reponse && i <= 3);

// if (question == reponse) {
//     alert("C'est pertinent! ")
// }    else {
//     alert("T'as raté!")
// }

// ## Exo6
//   - Demandez à l'utilisateur de remplir un panier de fruits jusqu'à en obtenir 8
//   - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//   - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit : "Merci bon appétit"
//   - Chaque fruit entré par l'utilisateur doit finir par être ortographié avec une première lettre majuscule et le reste en minuscule
//   - Lui montrer son panier

// let fruits = []
// while (fruits.length < 8) {
//     fruits.push(prompt("Ajoutez un fruit:").toLowerCase())
// }
// let modif = prompt(fruits + ". Voulez-vous retirer un fruit ? ")
// if (fruits.indexOf(modif) > 0) {
    
//     fruits.splice(fruits.indexOf(modif),1)
// }
// let i = 0
// let fruits2 = []
// while (i < fruits.length) {
//     fruits2.push(fruits[i].charAt(0).toUpperCase() + fruits[i].slice(1));
//     i++;
// }
// alert(fruits2)