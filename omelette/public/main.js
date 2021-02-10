class Personne {
    constructor(nom, lieu, argent){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];
        this.seDeplacer = (depart, arrivee) => {
            this.lieu = arrivee.nom;
            arrivee.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this), 1);
            console.log(`${this.nom} se déplace de ${depart.nom} vers ${arrivee.nom}`);
        }
        this.payerArticle = (article) => {
            this.argent -= article.prix;
            console.log(`${this.nom} a payé ${article.prix} € pour acheter ${article.nom} `);
        }
        this.couper = (ingredient, outil) => {
            if(ingredient.etat == "entier"){
                outil.action(ingredient);
            }
        }
        this.melanger = (nomMelange, outil) => {

        }
    }
}

class Lieu{
    constructor(nom, personnes, paniers){
        this.nom = nom;
        this.personnes = personnes;
        this.paniers = paniers;
    }
}

class Ingredients {
    constructor (nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let elias = new Personne("Elias", "", 50);

let poivron = new Ingredients('poivron', 'entier', 1)
let oignon = new Ingredients('poivron', 'entier', 1)
let oeuf= new Ingredients('poivron', 'entier', 1)
let epice= new Ingredients('poivron', 'entier', 1)
let paprika= new Ingredients('poivron', 'entier', 1)
let tomate= new Ingredients('poivron', 'entier', 1)
let fromage= new Ingredients('poivron', 'entier', 1)

let maison = new Lieu ("Maison", []);
let epicerie = new Lieu ("Epicerie", [], [
    {nom: "Panier 1", contenu : []},
    {nom: "Panier 2", contenu : []},
    {nom: "Panier 3", contenu : []},
]);

epicerie.etagere = [poivrons, oignon, oeuf, epice, paprika, tomate, fromage]

let couteau = {
    nom : "couteau",
    action(ingredient){
        ingredient.etat = "coupé"
        console.log(`${ingredients.nom} est coupé`);
    }
}

let bol = {
    nom : "bol",
    contenu : [],
    melanger(monMelange){
        let newMelange = {
            nom : nomMelange,
            etat : "pas cuit",
        }
        while (this.contenu.length > 0) {
            this.contenu.shift();
        }
        this.contenu.push(newMelange);
    }
}

let poele = {
    nom : "poele",
    contenu : [],
    cuire(){
        console.log(`L'${this.contenu[0].nom} est en préparation`);
        setTimeout(() => {
            this.contenu[0].etat = "cuit"
            console.log(`${this.contenu[0].nom} est ${this.contenu[0].etat}`);
        }, 4000);
    }
}

maison.personnes.push(elias);
elias.lieu = maison.nom
console.log(`${elias.nom} est à la ${maison.nom}`);

elias.seDeplacer(maison, epicerie);

elias.mainDroite.push(epicerie.paniers[0]);
epicerie.paniers.splice(epicerie.paniers.indexOf(elias.mainDroite[0]),1);

console.log(`${elias.nom} a pris un ${elias.mainDroite[0].nom} avec sa main droite.`);

epicerie.etagere.forEach(e => {
    elias.mainDroite[0].contenu.push(e);
    console.log(`${elias.nom} a ajouté ${e.nom} dans le panier`);
    elias.payerArticle(e);
})

console.log(`Il rest à ${elias.nom} ${elias.argent} €` );

elias.seDeplacer(epicerie, maison);

while (elias.mainDroite[0].contenu.length > 0) {
    bol.contenu.push(elias.mainDroite[0].contenu.shift())
}

console.log(`${elias.nom} a mis tous les ingrédients dans le bol`);

elias.seDeplacer(maison, epicerie);

epicerie.paniers.push(elias.mainDroite.pop());

console.log(`${elias.nom} a remis le panier à l'${epicerie.nom}`);

elias.seDeplacer(epicerie, maison);

bol.contenu.forEach(e => {
    elias.couper(e, couteau)
});

bol.melanger("omelette")

console.log(`Le bol contient${bol.contenu[0].nom} ${bol.contenu[0].etat}`);

poele.contenu.push(bol.contenu.pop());
poele.cuire();

