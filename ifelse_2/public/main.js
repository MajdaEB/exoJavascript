// ## 1. Les réponses booléenes (part 1)
// let nb1 = parseInt(prompt("Entrez un nombre"));
// let nb2 = parseInt(prompt("Entrez un 2e nombre"));


// if (isNaN(nb1) || isNaN(nb2)) {
//     alert("Entrez un nombre");
// } else if (nb1 == nb2) {
//     alert(nb1 + " est égal à " + nb2); {
// } else {
//     alert(nb1 + " est différent de " + nb2);
// }

// ## 2. Les réponses booléennes (part 2)
// let nb1 = parseInt(prompt("Un nombre"));
// let nb2 = parseInt(prompt("Un autre nombre"));

// if (isNaN(nb2) || isNaN(nb2)) {
//     alert("Entrez un nombre");
// } else if (nb1<nb2) {
//     alert(nb1 + " est plus petit que " + nb2);
// } else {
//     alert(nb1 + " n'est pas plus petit que " + nb2)
// }

// ## 3. Les réponses booléenes (part 3)
// let nb1 = parseInt(prompt("Un nombre"));
// let nb2 = parseInt(prompt("Un autre nombre"));
// let nb3 = parseInt(prompt("Un 3e nombre"));

// if (isNaN(nb2) || isNaN(nb2)) {
//     alert("Entrez un nombre");
// } else if(nb1 + nb2 > nb3) {
//     alert("La somme de " + nb1 + " + " + nb2 + " est plus grand que " + nb3);
// } else {
//     alert("La somme de " + nb1 + " + " + nb2 + " n'est pas plus grand que " + nb3);
// }

// ## 4. Strings et calculs
// let phrase = prompt("Ecrivez une phrase"); 
// let longueur = parse.Int(prompt("D'après vous, combien de caractères composent cette phrase?"));

// let x = phrase.length - longueur

// if (phrase.length == longueur) {
//     alert("Correct")
// } else {
//     alert("Faux, vous êtes à " + x + " caractères de la bonne réponse.")
// }

// ## 5. Des maths sans Maths
// let nb1 = parseInt(prompt("Nombre 1"));
// let nb2 = parseInt(prompt("Nombre 2"));

// if (nb1 >= nb2) {
//     alert=(nb1 - nb2)
// } else {
//     alert=(nb2 - nb1)
// }

// ## 6. Qui ~~a la plus grosse~~ est le plus grand ?
// let nb1 = parseInt(prompt("Nombre 1"));
// let nb2 = parseInt(prompt("Nombre 2"));
// let nb3 = parseInt(prompt("Nombre 3"));

// if (isNaN(nb1) || isNaN(nb2) || isNaN(nb2)) {
//     alert("Veuillez entrée des nombres svp")
// } else if (nb1 > nb2 && nb1> nb3) {
//     alert("Nombre 1");
// } else if (nb2 > nb3 && nb2> nb1) {
//     alert("Nombre 2");
// } else if (nb3 > nb2 && nb3> nb1) {
//     alert("Nombre 3");
// } else {
//     alert("Les 3 sont nombres sont égaux.");
// }   

// ## 7. Respect des consignes
// let prenom = prompt("Quel est votre prénom?"); 


// if (prenom == 0) {
//     alert("Bonjour de prénom");
// } else {
//     alert("Bonjour " + prenom + "!");
// }

// ## 8. Abonnez-vous
// let abo = confirm("Voulez-vous vous abonner?");
// if (abo) {
//     let choix = prompt("Luxe ou Normal?").trim.toLowerCase();
//     if (choix == "Luxe") {
//         alert("Félicitation pour votre abonnement à la formule de Luxe !");
//     } else if (choix == "Normal") {
//         alert("Merci pour votre abonnement!");
//     } else
//     let refus = confirm("Es-tu sûr?");
//     if (refus) {
//         alert("Au revoir !");
//     } else { 
//         choix = prompt("Luxe ou Normal?");
//          {
//             if (choix == "Luxe") {
//                 alert("Félicitation pour votre abonnement à la formule de Luxe !");
//             } else if (choix == "Normal") {
//                 alert("Merci pour votre abonnement!");
//             } else {
//             alert("Au revoir !");    
//         }
// } else {
//     alert("Au revoir. ")     
// }
// if (confirm("Voulez-vous souscrire un abonnement?")) {
//     let abo = prompt("Souhaitez-vous la formule Luxe ou Normal?");
//     if (abo == "Luxe") {
//         alert("Félicitation pour votre abonnement à la formule Luxe !")
//     } else {
//         alert("Merci pour votre abonnement.")
//     }
// } else {
//     alert(confirm("Etes-vous certain? "));
//         if (confirm == true) {
//             let abo = prompt("Souhaitez-vous la formule Luxe ou Normal?");
//             if (abo == "Luxe") {
//                 alert("Félicitation pour votre abonnement à la formule Luxe !");
//             } else {
//                 alert("Merci pour votre abonnement.");
//             }
//         } else {
//             alert("Je suis triste!");
//         }
// }

// ## 9. Questions pour un codeur
// let question1 = prompt("Quel animal miaule?").toLowerCase(); 
// let question2 = prompt("Qu'est-ce qui est jaune et qui attend?").toLowerCase();

// let reponse1 = "chat";
// let reponse2= "Jonathan";

// if (question1 == reponse1 && question2 == reponse2) {
//     alert("Félicitations");
//     } else if (question1 == reponse1 || question2 == reponse2) {
//         alert("Vous y êtes presque!");    
// } else {
//     alert("Vous avez échoué!");
// }

// ## 10. C'est moi qui dit qui entre et qui n'entre pas
// let age = parseInt(prompt("Quel âge avez-vous?"));

// if ((age > 18 )) {
//     alert("Vous êtes majeur, vous pouvez réserver.");
// } else if ((age < 0)) {
//             alert("Revenez quand vous serez né!");
// } else if (age == 18) {
//     alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");     
// } else if (age == "") {
//     alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");    
// } else {
//     alert("Vous êtes mineur, revenez plus tard.");
// }

// ### Bonus 1
// let annee = prompt("Quel est votre année de naissance?");
// let date = new Date();
// let age = date.getFullYear() - annee;

// if (age > 18 ) {
//     alert("Vous êtes majeur, vous pouvez réserver.");
// } else if (age < 0) {
//             alert("Revenez quand vous serez né!");
// } else if (age == 18) {
//     alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");     
// } else if (annee == 2021) { //à corriger
//     alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");    
// } else {
//     alert("Vous êtes mineur, revenez plus tard.");
// }

// ### Bonus 2
// let age = prompt("Quel âge avez-vous?"); 

// if (((age || (age+"ans") || (age+(" ans"))) > "18"  )) {
//     alert("Vous êtes majeur, vous pouvez réserver.");
// } else if (((age || (age+"ans") || (age+(" ans"))) < "0"  )) {
//             alert("Revenez quand vous serez né!");
// } else if (((age || (age+"ans") || (age+(" ans"))) == "18"  )) {
//     alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");     
// } else if (((age || (age+"ans") || (age+(" ans"))) == ""  )) {
//     alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");    
// } else {
//     alert("Vous êtes mineur, revenez plus tard.");
// }

// ## 11. Mais oui, c'est ~~clair~~ Logique (opérateus logiques)
let question1 = confirm("Voulez-vous partir en vacances ?");
let question2 = confirm("Est-ce que vous êtes riche ?");
let question3 = confirm("Est-ce que vous avez un chat ?");

if (!question1) {
    alert("Pas de problème, ne partez pas en vacances.");
}
if (!question2 || question3) {
    alert("Même si vous vouliez partir, vous ne pourriez pas partir...");
}
if (question2 && !question3) {
    alert("Vous pourriez partir en vacances si vous le vouliez.");
}
// if (question1 && question2 && !question3) {
//     alert("Tout est parfait, partez en vacances!");
// }
if (!(!question1 || question2 || !question3)) {
    alert("Tout est parfait, partez en vacances!");
}
