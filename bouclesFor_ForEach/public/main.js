// ## Exo 1

// - Déclarez une variable qui se nomme `multiplicateur` valant 5
// - Utilisez une boucle for pour créer une table de multiplication allant jusqu'a 10 et apparaissant dans la console sous le format 5 x 1 = 5 etc.
// - Changez la valeur de `multiplicateur` ou remplacez-la par un prompt

// let multiplicateur = parseInt(prompt("Entrez un nombre"));
// for (let i = 0; i <=10; i++) {
    // console.log(multiplicateur + "x" + i + "=" + multiplicateur * i);
// }


// ## Exo 2

//   - La même chose mais en incrémentant par deux

// let multiplicateur = parseInt(prompt("Entrez un nombre"));
// for (let i = 0; i <=10; i +=2) { 
//     console.log(multiplicateur + "x" + i + "=" + multiplicateur * i);
// }


// ## Exo 3

//   - Faites une boucle descendante affichant les nombres pairs de 20 à 0
//     > Ex: 20-18-16-etc.

// for (let i = 20; i >= 0; i -= 2) {
//     console.log(i);
    
// }


// ## Exo 4

//   - Créez un tableau avec les prénoms des gens de la classe
//   - Avec l'aide d'une boucle, mettez les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme `longPrenoms`

// let classe = ["Abdel", "Amine", "Bilal", "Laurie", "Majda", "Yahya", "Yasmina", "Ayoub", "Camille", "Cem", "Mohammed", "Nghia", "Saïd", "Yassin", "Antoine", "Gauthier", "Mahad", "Salim"]; 

// let longPrenoms = [];

// classe.forEach(element => {
//     if (element.length > 5) {
//         longPrenoms.push(element)
//     }
// })
// console.log(longPrenom);

// ## Exo 5

//   - Créez un tableau qui se nomme `sommes` contenant une multitude de valeurs numériques et un tableau vide qui se nomme `grossesSommes`
//     > Ex: `let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];`
//   - Si une valeur de `sommes` excède 60, retirez la et ajoutez la à `grossesSommes`

// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
// let grossesSommes=[];

// sommes.forEach(nombre => {
//     if (nombre > 60) {
//         grossesSommes.push(nombre)
//     }
// })
// console.log(grossesSommes);

// ## Exo 6

//   - Voici un tableau :
//     `let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];`

//   - Vérifiez le type de chaque donnée du tableau `donnees` dans la console
//   - Créez 4 Tableaux : `typeString` , `typeNumber` , `typeObject` , `typeAutre`.
//   - Videz le tableau `donnees` dans les autres tableaux en fonction des types de donnée
//     > Indice : Utilisez bien des conditions (le `switch` par exemple)

// let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

// console.log("Tableau de départ :", donnees);

// let typeString =[]
// let typeNumber = []
// let typeObject = []
// let typeOther = []

// for (let i = donnees.length; i > 0; i--) {
//     switch (typeof donnees[0]) {
//         case "string":
//             typeString.push(donnees[0]);
//             donnees.shift();
//             break;
//         case "number":
//             typeNumber.push(donnees[0]);
//             donnees.shift();
//             break;
//         case "object":
//             typeObject.push(donnees[0]);
//             donnees.shift();
//             break;
//         default:
//             typeOther.push(donnees[0]);
//             donnees.shift();
//             break;
//     }  
// }

// console.log("Nombres : ", typeNumber);
// console.log("String : ", typeString);
// console.log("Objects : ", typeObject);
// console.log("Autres : ", typeOther);
// console.log("Données à l'arrivée : ", donnees);