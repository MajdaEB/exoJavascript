// ## Exo 2(les tableaux)
// 1. Créer un tableau avec 5 éléments, affiche dans la console le 3 eme élément
let array = ["bla", "bli", "blo", "blu", "blabla"];
console.log(array[2]);
// 2. Affiche dans la console le 1er élément et le dernier élément
console.log(array[0], array[array.length - 1]);
// 3. Affiche dans la console le 2eme élémént avec toutes ses lettres en majuscule saufe la derniere
console.log(array[1].substring(0, array[1].length -1).toUpperCase() + array[1].slice(- 1).toLowerCase()); 
// 4. Affiche dans la console le 4eme élément du tableau mais uniquement sa première lettre
console.log(array[3].charAt(0));
// 5. Affiche dans la console le 5eme élément du tableau mais sans sa première lettre
console.log(array[array.length - 1].substring(1));
// 6. Affiche dans la console seulement les 2 premieres lettres du 1er element , la premiere que tu mettras en minuscule et la seconde en majuscule
console.log(array[0].substring(0,1).toUpperCase() + array[0].substring(1,2).toLowerCase());
// 7. Affiche dans la console la concaténation du premier élément avec le 3eme élément
console.log((array[0]+array[2]));
// 8. Affiche dans la console la premiere moitié du 2eme élément avec la seconde moitié du dernier élément
console.log(tab[1].substring(0, Math.round(tab[1].length/2)) + tab[tab.length -1].substring(Math.round(tab[tab.length -1].length/2)));
// 9. Affiche dans la console les deux première lettre du 3eme élément en majuscule avec tout le 5eme élément en minuscule
console.log(array[2].substring(0,2).toUpperCase() + array[4].toLowerCase());
// 10. Créer une variable dans la quelle tu stockeras la concaténation des deux premières lettre de chaque élément du tableau dont la premiere lettre sera en minuscule et la seconde sera en majuscule et affiche le résultat dans la console
let stock = 
array.forEach((element) => console.log(element.substring(0,1).toLowerCase() + element.substring(1,2).toUpperCase()));
