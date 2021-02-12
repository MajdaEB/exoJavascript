// exo1
let h1 = document.getElementsByTagName('h1')[1];
console.log(h1.innerHTML);

// exo2
let li = document.getElementsByTagName('li')[3];
console.log(li.innerText);

// exo3
console.log(document.getElementsByTagName('p')[0].innerText.toUpperCase());

// exo4
[...document.getElementsByTagName('li')].forEach(element => {
    console.log(element.innerText.toUpperCase());
}) // les 3 petits points nous permettent de créer un vrai tableau et d'appliquer les méthodes liées aux tableaux. 

