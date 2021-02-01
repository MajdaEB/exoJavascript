// # Exo 1 Classe
let classe = [];
let add = (student) => {
    if (classe.includes(student)) {
        console.log(student + " est déjà dans la classe");
    } else {
        classe.push(student);
        console.log(student + " rentre dans la classe");
    }
};

let remove = (student) => {
    if (classe.includes(student)) {
        classe.splice(classe.indexOf(student));
        console.log(student + " sort de la classe");
    } else {
        console.log(student + " n'est pas dans la classe");
    }
};

add ("Antoine");
add ("Saïd");
add ("Abdel");
add ("Nathan");
add ("Yasmina");
remove ("Salim");
add ("Gauthier");
remove ("Saïd");
remove ("Yasmina");

console.log(classe);

// # Exo 2 Premier
