function traitement() {
    var burger = document.querySelector('.burger');
    burger.onclick = function() {
        this.classList.toggle('selected');
    };

    var h1 = document.getElementsByTagName('h1')[0];

    h1 = document.querySelector('h1');

    h1.innerText = "Le meilleur burger";

    h1.onclick = function() {
        alert('clic sur mon h1');
    }

    // var cheeses = document.getElementsByClassName('cheese');
    // var h1 = document.getElementById('id-du-h1');

    // var h1 = document.querySelector('h1');
    // var firstCheese = document.querySelectorAll('.burger .cheeses')[0];

    var h2 = document.querySelectorAll('h2')[1];
    // h2.innerHTML = "Il est délicieux, <strong>essayez-le</strong>!"
    h2.appendChild(document.createTextNode(' nouveau texte'));

    var topBun = document.getElementById('top');
    topBun.style.width = '79%';

    var mb = document.getElementsByClassName('meatball')[1];
    mb.classList.add('pickle');

    var cheese = document.querySelector('.cheese');
    var patty = document.querySelectorAll('.patty')[1];
    var newCheese = cheese.cloneNode(true);

    newCheese = document.createElement('div');
    newCheese.classList.add('cheese', 'dslkj');

    burger.insertBefore(newCheese, patty);
};

document.addEventListener("DOMContentLoaded", traitement);
