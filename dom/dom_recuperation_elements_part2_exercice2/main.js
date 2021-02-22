// exo1
let h3 = document.getElementsByTagName('div')[0].firstElementChild;
console.log(h3);

// exo2
let titreNiv3 = document.getElementsByTagName('h3')[1];
console.log(titreNiv3);

// exo3
console.log(titreNiv3.previousElementSibling);

// exo4
console.log(document.getElementsByClassName('petitParagraphe')[0].nextElementSibling);

// exo5
console.log(document.getElementsByClassName('important')[0].parentElement);

// exo6
console.log(document.getElementById('listElements').parentElement.firstElementChild);

// exo7
console.log(document.getElementsByClassName('important')[3].nextElementSibling);

// exo8
console.log(document.getElementById('textGeneral').nextElementSibling.nextElementSibling);

// exo9
console.log(document.getElementsByTagName('span')[1].parentElement.nextElementSibling);

// exo10
let nicolas = document.getElementsByTagName('b')[2];
console.log(nicolas.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

// exo11
console.log(document.querySelector('.grandParagraphe'));

// exo12
let li = document.querySelectorAll('li');
li.forEach(element => {
    console.log(element.innerTexte);
});