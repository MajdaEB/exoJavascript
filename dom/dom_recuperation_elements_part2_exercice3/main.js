// Exo1
console.log(document.querySelector('#content'));

// Exo2
console.log(document.querySelectorAll('#content')[0]);

// Exo3
console.log(document.querySelector('.important'));

// Exo4
console.log(document.querySelectorAll('.important')[0]);

// Exo5
let li = document.querySelectorAll('li');
li.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

// Exo6
let p = document.getElementById('content');
console.log(p.getElementsByClassName('grandParagraphe')[0]);