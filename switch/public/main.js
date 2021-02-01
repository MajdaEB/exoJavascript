// ## 1. ToDo

// - À l'aide d'un prompt, récupérez un jour de la semaine.
// - Au moyen d'un `switch`, affichez ce que vous avez prévu de faire ce jour-ci.

// let jour = prompt("Un jour de la semaine").toLowerCase();

// switch (jour) {
//     case ("lundi"):
//         console.log("On est lundi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.");
//         break;
//     case ("mardi"):
//         console.log("On est mardi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.");
//         break;
//     case ("mercredi"):
//         console.log("On est mercredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.");
//         break;
//     case ("jeudi"):
//         console.log("On est jeudi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.");
//         break;
//     case ("vendredi"):
//         console.log("On est vendredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.");
//         break;
//     case ("samedi"):
//         console.log("On est samedi. Tu n'as rien à faire. ");
//         break;
//     default:
//         console.log("Le dimanche, on se repose!");
// }


// ## 2. Sortez couverts

// - À l'aide d'un prompt, récupérez un type de météo.
// - Au moyen d'un `switch`, affichez une réaction appropriée au temps.

// let météo = prompt("Quel temps fait-il aujourd'hui?");

// switch (météo) {
//     case ("il neige"):
//          console.log("Il neige. J'ai besoin de mes raquettes.");
//          break;
//      case ("soleil"):
//          console.log("Il fait ensoleillé. J'ai besoin de ma crème solaire.");
//          break;
//      case ("pluie"):
//          console.log("Il pleut. J'ai besoin d'un parapluie.");
//          break;
//      default:
//          console.log("Mets ce que tu veux!");
// }

// ## 3. Les 2 font la pair

// - À l'aide d'un prompt, récupérez un nombre.
// - Au moyen d'un `switch`, déterminez si le nombre donné est pair ou impair. Pensez à prendre en compte si l'utilisateur entre autre chose qu'un nombre.
// - Affichez une alert différente dans chaque situation.

// let nb = parseInt(prompt("Entrez un nombre."));

// switch ( nb%2) {
//     case (0):
//     console.log(nb + " est un nombre pair.");    
//         break;

//     default:
//     console.log(nb + " est un nombre impair.");
//         break;
// }

// ## 4. Maths "avancée"
// - À l'aide d'un prompt, récupérez trois informations : un premier nombre, un opérateur mathématique et un second nombre.
// - Au moyen d'un `switch`, effectuez le calcul correspondant et affichez en le résultat sous un format : `nbr1 op nbr2` = `réponse`.

let nb1 = prompt("Entrez un nombre svp.");
let opérateur = prompt("Entrez un opérateur mathématique svp.");
let nb2 = prompt("Entre un 2e nombre.");
let résultat = (nb1 + opérateur + nb2); 

switch (nb1 + opérateur + nb2) {
    case ("résultat"):
        alert(nb1 + opérateur + nb2 + "=" + résultat)
        break;

    default:
        break;
}