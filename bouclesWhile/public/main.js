// ## Exercice 1

//   - À l'aide d'un prompt, choisissez un chiffre
//   - Déclarez une variable `compteur` qui commence à 0
//   - Au moyen d'une boucle `while`, `incrémentez` de 1 la variable compteur à `chaque itération` de la boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis

// let nb = parseInt(prompt("Nombre")); 
// let compteur = 0;

// while (compteur <= nb) {
//     console.log(compteur);
//     compteur++
// }

// ## Exercice 2

//   - Créez une variable de type array et insérez toutes les personnes de la classe
//   - A l'aide d'une boucle `while`, dites `bonjour + prenom` à chaque personne du tableau

// let classe = ["Abdel", "Amine", "Bilal", "Laurie", "Majda", "Yahya", "Yasmina", "Ayoub", "Camille", "Cem", "Mohammed", "Nghia", "Saïd", "Yassin", "Antoine", "Gauthier", "Mahad", "Salim"]; 
// let i = 0;

// while (classe[i]) {
//     console.log("Bonjour " + classe[i]);
//     i++;
// }

// ## Exercice 3
//   - Créez une variable classe contenant un array vide
//   - À l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//   - Au moyen d'une boucle `while`, insérez des étudiants dans la classe tant que celle-ci n'est pas remplie
//   - Une fois l'array "rempli", affichez tous les étudiants

// let classe = [];
// let maxEtudiants = prompt("Choisissez un nombre maximum d'étudiants.");


// while (classe.length < maxEtudiants) {
//     classe.push(prompt("Ajoutez un nom."));
//     if (classe.length == maxEtudiants) {
//         alert("La classe est complète!")
//     }
// }
// console.log(classe);ùù