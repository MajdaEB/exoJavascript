let array = ["coding 15", "coding 16", "coding 17"];

console.log(array);

// Afficher le nombre d'éléments dans le tableau
console.log(array.length); 

// Afficher les éléments 1 à 1
array.forEach(console.log);
// ou
console.log(...array);

// Ajouter 2 éléments à LA FIN du tableau
array.push("Majda", 42);
console.log(array);

// Ajouter 2 éléments AU DEBUT
array.unshift(false, 3.14);
console.log(array);

// Supprimer le dernier élément
array.pop(); 
console.log(array); 

// Supprimer le 1e élément
array.shift();
console.log(array);

// Remplacer un élément
array.splice(1,1,'salami');
console.log(array);

// Afficher position d'un élément dans l'array
console.log(array.indexOf("test"));

// Effacer un élément ciblé (autre que le premier ou dernier)
array.splice(3, 1);
console.log(array);

// Inverser l'ordre de l'array
array.reverse();
console.log(array);

// Ajouter un élément en 3e position
array.splice(2,0, "John");
console.log(array);

// Créer une variable qui reçois un array [4,5,2,1,3]
let monArray = [4,5,2,1,3];
console.log(monArray);

// Utiliser une méthode pour ordonner l'array
console.log(monArray.sort());

// Utiliser une méthode pour afficher l'array sous forme de string
let string = monArray.toString();
console.log(string);

// Bonus : lier les éléments de l'array par un symbole lors de l'affichage en string (-> "1/2/3/4/5")
string = monArray.join("/");
console.log(string);

// Utiliser une méthode qui permet de faire revenir la chaine de caractères en un tableau
string = string.split("/");
console.log(string);