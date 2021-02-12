// class Patient{
//     constructor (nom, maladie, argent, poche, etat, traitement) {
//         this.nom = nom;
//         this.maladie = maladie;
//         this.argent = argent;
//         this.poche = poche;
//         this.etat = etat; 
//         this.traitement = traitement;
//         this.goTo = (lieu) => {
//             this.lieu = lieu.nom;
//             lieu.contenu.push(this)
//             console.log(`${this.nom} entre dans la salle d'attente`);
//         }
//         this.takeCare = () => {

//         }
//         this.paye = () => {
//             this.argent -= 
//         }
//     }
// }
// class Traitement {
//     constructor (nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// class Diagnostique {
//     constructor (maladie, traitement) {
//         this.maladie = maladie;
//         this.traitement = traitement;
//     }
// }

// let marcus = new Malades("Marcus", "mal indenté", 100, "", "malade", "");
// let optimus = new Malades("Optimus", "unsave", 200, "", "malade", "");
// let sangoku = new Malades("Sangoku", "404", 80, "", "malade", "");
// let darthVader = new Malades("DarthVader", "azmatique", 110, "", "malade", "");
// let semiColon = new Malades("Semicolon", "syntaxError", 60, "", "malade", "");


// let t1 = new Traitement(`ctrl+maj+f`, 60);
// let t2 = new Traitement(`saveOnFocusChange`, 100);
// let t3 = new Traitement(`CheckLinkRelation`, 60);
// let t4 = new Traitement(`Ventoline`, 40);
// let t5 = new Traitement(`f12+doc`, 20);

// let d1 = new Diagnostique("mal indenté", `ctrl+maj+f`);
// let d2 = new Diagnostique("unsave",`saveOnFocusChange`);
// let d3 = new Diagnostique("404",`CheckLinkRelation`);
// let d4 = new Diagnostique("azmatique",`Ventoline`);
// let d5 = new Diagnostique("syntaxError", `f12+doc`);

// let Docteur = {
//         nom : "Debugger",
//         argent : 0,
//         cabinet : [],
//         salleA: [marcus, optimus, sangoku,darthVader, semicolon],
//         patientIn(patient){
//             this.cabinet.push(patient);
//             this.salleA.splice(this.cabinet.indexOf(patient), 1);
//             console.log(`${patient.nom} est entré dans le cabinet`);
//         },
//         patientOut(patient){
//             if(patient == "mort") {
//                 return; 
//             }
//             this.salleA.personnes.push(patient);
//             this.cabinet.splice(this.cabinet.indexOf(patient), 1);
//             console.log(`${patient.nom} est sorti du cabinet`);
//         },
//         diagnostique(patient){
//             if (patient.argent >= 50) {
//                 switch (patient.maladie) {
//                     case "mal indenté":
//                        patient.traitement = t1;
//                         break;
//                     case "unsave":
//                         patient.traitement = t2;
//                         break;
//                     case "404":
//                         patient.traitement = t3;
//                         break;
//                     case "azmatique":
//                         patient.traitement = t4;
//                         break;
//                     case "syntaxError":
//                         patient.traitement = t5;
//                     break;
//                 }
//                console.log(`${patient.nom} a la maladie suivante : ${patient.maladie}`); 
//             } else {
//                 console.log(`${patient.nom} n'a pas assez d'argent.`);
//                 cimetiere.personnes.push(patient);
//                 this.cabinet.splice(this.cabinet.indexOf(patient), 1);
//                 patient.etat = 'Mort.'
//             }
//         }
// }

// let pharmacie = {
//     nom: "Pharmarcie",
//     argent: 0,
//     personnes:[],
//     donnerT(){

//     },
// }

// let cimetiere = {
//     nom : "cimetiere",
//     personnes : [],
// }


// // Début codePital
// Docteur.patientIn.


let titre = document.querySelectorAll("h1")[0];

titre.innerText = " New Titre"



