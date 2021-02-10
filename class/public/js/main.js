// // Exercice 1

// // Création d'une class
// class Personnage {
//     constructor(nom, age, ville) {
//         this.nom = nom;
//         this.age = age;
//         this.ville = ville;
//         // Méthode
//         this.sePresenter = () => {
//             console.log(`Bonjour je m'appelle ${this.nom}!`);
//         }
//     }
// }

// // 2 instances
// let majda = new Personnage('El Biar', 27, 'Bruxelles');
// let isaac = new Personnage('Ikan', 10, 'Bruxelles');

// // Comment lancer une méthode sur les instances
// majda.sePresenter();
// isaac.sePresenter();

// // ========================================================================================

// // Exercice 2
// class Lieux {
//     constructor(nom, contenu, ingredients) {
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }

// let maison = new Lieux("maison", []);
// let epicerie = new Lieux("epicerie", [], []);
// let cuisine = new Lieux("cuisine", [], []);

// class Ingredients{
//     constructor(nom, etat, prix) {
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }

// let poivron = new Ingredients("poivrons", "entier", 1);
// let oignon = new Ingredients("oignon", "entier", 2);
// let oeuf = new Ingredients("oeufs", "entier", 4);
// let epice = new Ingredients("epice", "moulu", 3.25);
// let paprika = new Ingredients("paprika", "moulu", 1.5);
// let fromage = new Ingredients("fromage", "coupé", 1.6);

// class Personne {
//     constructor (nom, lieu, argent, panier) {
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.seDeplacer = (lieu) => {
//             this.lieu = lieu.nom;
//             lieu.contenu.push(this)
//             console.log(`${this.nom} se déplace dans ${lieu.nom}`);
//         }
//         this.payer = (article) => {
//             this.argent -= article.prix;
//             this.panier.push(article);
//         }
//         this.couper = (article) => {
//             if (article.etat == 'entier') {
//                 article.etat = 'coupé'
//             }
//         }
//     }
// }

// let personnage = new Personne("Maxime", 'néant', 100, []);

// personnage.payer(oignon);
// personnage.seDeplacer(maison);
// console.log(personnage);
// console.log(maison);

// ================================================================================================

// Exercice 3

// class Objet {
//     constructor (nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let armoire = new Objet("armoire", 150);
// let coussin = new Objet("coussin", 15);

// let boite = ["armoire", "coussin"];

// class Personnage {
//     constructor (nom, sac, argent) {
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         this.prendre = (objet) => {
//             this.sac.push(objet.shift());
//         }
//         this.acheter = (nom, objet) => {
//             this.argent -= objet.prix;
//             nom.argent += objet.prix;
//             this.sac.push(objet);
//             nom.sac.splice(nom.sac.indexOf(objet), 1);
//         }
//     }   
// }

// let jamal = new Personnage("Jamal", [], 200);
// let majda = new Personnage("Majda", [], 200);

// jamal.prendre(boite);
// majda.prendre(boite);

// majda.acheter(jamal, armoire);

// =============================================================================================

// Exercice 4
// class Lieu {
//     constructor (nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// let molengeek = new Lieu("MolenGeek", []);
// let snack = new Lieu("Snack", []);
// let maison = new Lieu("Maison", []);

// class Personne {
//     constructor (nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         this.seDeplacer = (depart, destination, moyenT) => {
//             if (moyenT == null) {
//                 depart.personnes.splice(depart.personnes.indexOf(this), 1);
//                 destination.personnes.push(this);
//                 console.log(`${this.nom} se dirige à ${destination.nom} à pied`);
//             } else {
//                 moyenT.embarquer(depart, destination, this)
//             }
//         }
//     }
// }

// class Bus {
//     constructor(personnes, caisse){
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = (depart, destination, passager) => {
//             if (passager.argent >= 2.80) {
//                 passager.argent -= 2.80;
//                 this.caisse += 2.80;
//                 depart.personnes.splice(depart.personnes.indexOf(passager), 1);
//                 destination.personnes.push(passager);
//                 console.log(`Bonjour, ${passager.prenom}, bienvenu(e) à bord, nous allons à ${destination.nom}`);
//             } else {
//                 depart.personnes.splice(depart.personnes.indexOf(passager), 1);
//                 destination.personnes.push(passager);
//                 console.log(`Veuillez quitter mon bus`);
//                 console.log(`C'est n'est pas grave, ${passager.nom} va se déplacer à pied`);
//             }
//         }
//     }
// }

// let majda = new Personne("El Biar", "Majda", 10);
// let jamal = new Personne("Ikan", "Jamal", 100);
// let delijn = new Bus([], 10);

// maison.personnes.push(majda);
// said.seDeplacer(maison, molengeek, delijn);
// said.seDeplacer(molengeek, snack, delijn);
// said.seDeplacer(snack, molengeek);
// said.seDeplacer(molengeek, maison, delijn);

