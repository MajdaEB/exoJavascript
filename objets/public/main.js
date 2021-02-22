// Consignes 1

// // ## Exo 1
// let majda = {
//     nom : "El Biar",
//     prenom : "Majda",
//     age : 27,
//     taille : 163,
// }
// console.log(majda.prenom);

// // // Exo 2
// let jamal = {
//     nom : "Ikan",
//     prenom : "Jamal",
//     age : 34,
//     taille : 189,
// }

// // // Exo3
// let isaac = {
//     nom : majda.nom,
//     age : jamal.age,
//     taille : 150,
// }
// console.log(isaac.age, isaac.nom);

// // Exo 4
// let yasmina = {
//     nom : "Benyaich",
//     prenom : "Yasmina",
//     saluer() {
//         console.log(`Coucou${jamal.prenom}`);
//     }
// }

// Exo 5
// let personne1 = {
//     nom : "Mustafa",
//     age : 20,
// }
// let personne2 = {
//     nom : "Said",
//     age : 24,
// }
// let personne3 = {
//     nom : "Antoine",
//     age : 27,
// }
// let voleur = {
//     usurpation(personnes) {
//         this.nom = personnes;
//         this.age = personnes;
//     }
// }

// voleur.usurpation (personne2);

// console.log(voleur);




// ===============================================================

// Consignes 2

// Exo 1
// let personnage = {};
// personnage.nom = "El Biar"
// personnage.prenom = "Majda";
// personnage.sePresenter = function () {
//     console.log("Bonjour je m'appelle " + this.nom + " " + this.prenom);
// }
// personnage.sePresenter();

// Exo 2
// let personnage = {};
// personnage.prenom = "Majda";
// personnage.sePresenter = function () {
//     personnage.age = prompt("Quel âge avez-vous?");
//     alert(this.prenom + " a " + this.age + " ans.");
// }
// personnage.sePresenter();


// ========================================================================

// Consignes 3

// let françois = { 
//     panier : ["tomate", "carotte","pain","pommes"],
//     derober(personne, element1, element2){
//         this.panier.push(personne.panier.splice(personne.panier.indexOf(element1), 1).join());
//         this.panier.push(personne.panier.splice(personne.panier.indexOf(element2), 1).join());
//     }
// };

// let sergio = { 
//     panier : ["oeufs", "lait", "farine", "sucre"]
// };


// françois.derober(sergio, "oeufs", "sucre");

// console.log(françois, sergio);

// ================================================================================

// Consignes 4
// let vieille_dame = {
//     age: 854,
//     nom: {
//         prenom: "Jean",
//         nomF: "Descieute"
//     },
//     moral: "mal",
//     objet: "canne",
//     parler(x){
//         if (this.moral == "mal") {
//             alert(`Vous me dérangez, je vous frappe avec la ${this.objet}`);
//         } else if(this.moral == "bien") {
//             alert(`Bonjour ${x.nom.prenom} ${x.nom.nomF}`)
//         }
//     }
// }

// let vieil_homme = {
//     nom: {
//         prenom: "J'en-mi",
//         nomF: "Guelle"
//     },
//     adoucir(x){
//         x.moral = "bien";
//     }
// }

// vieille_dame.parler(vieil_homme);
// vieil_homme.adoucir(vieille_dame);
// vieille_dame.parler(vieil_homme);
// console.log(vieille_dame);



