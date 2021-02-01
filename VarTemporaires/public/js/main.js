// Variables temporaires

// let a = 1; // 2
// let b = 2; // 3
// let c = 3; // 1

// let temp = a;
// a = b;
// b = c;
// c = temp;

// console.log(a);
// console.log(b);
// console.log(c);


// Exo 1
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let a = 1; // 4
let b = 2; // 3
let c = 3; // 2
let d = 4; // 1

// Etape 1 : inverser valeur a et d
let temp = a;
a = d;
d = temp;

// Etape 2 : inverser valeur b et c
temp = b;
b = c;
c = temp;


console.log(a, b, c, d);

// Exo 2
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let e = 1; // 2
let f = 2; // 3
let g = 3; // 4
let h = 4; // 1

let vt = e;

e = f;
f = g;
g = h;
h = vt;

console.log(e, f, g, h);

// Exo 3
// Afficher 3, 4, 2, 1 en se servant d'une variable temporaire
let tableau = [1, 2, 3, 4];

let temp = tableau[0];

tableau[0]=tableau[2]; //1 vers 3
tableau[2]=tableau[1]; //3 vers 2
tableau[1]=tableau[3]; //2 vers 4
tableau[3] =temp; //4 vers 1

console.log(tableau);


// == / == égalité
// != / !=== différence
// 9 > 5 == 5 plus grand que 5 / < plus petit que
// >= plus grand ou égal à / <= plus petit ou égal à
// || == ça OR ça
// && == ça AND ça doivent être vrai

// Exemple
// true || true == true
// true || false == true
// false || true == true
// false || false = false 

// true && true == true
// true && false == false
// false && true == false
// false && false = false 

// ! == NOT == "pas" -> le contraire du résultat
// !true == false
// !false == true