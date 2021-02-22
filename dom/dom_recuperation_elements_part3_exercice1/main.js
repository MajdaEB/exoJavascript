// Exo1
let exercice = document.querySelector('h2');
console.log(exercice.innerText);

// Exo2
exercice.innerText = 'Exercice 1'

// Exo3
let p = document.querySelector('h2+p');
p.textContent = "exercice.innerText = 'Exercice 1'"

// Exo4
let section = document.querySelector("section");
console.log(section.id);

// Exo5
let h1 = document.querySelector("h1");
console.log(h1.className);
console.log(h1.classList);

// Exo6
let allH1 = document.querySelectorAll("h1");
allH1.forEach(e => {
    console.log(e.className);
});

// Exo7
let input = document.querySelector("input");
console.log(input.attributes);

// Exo8
console.log(input.attributes.type.value);

// Exo9
let input2 = document.querySelector("#inputPassword3");
input2.setAttribute("type", "password");
input2.setAttribute("value", "password");

console.log(input2);

// Exo10
input.attributes.type.value = "color";
input.setAttribute("type", "color");