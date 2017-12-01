var h1 = document.getElementsByTagName('h1')[0];

h1.innerText = 'Le meilleur Burger';

var h2 = document.getElementsByTagName('h2')[1];

h2.innerHTML = 'Il est <strong>Délicieux</strong>, essayez-le !';

var pain = document.getElementById('top');

pain.style.width = '70%';

var boulette2 = document.getElementsByClassName('meatball')[1];

// boulette2.classList.add('pickle');
boulette2.className += ' pickle';

var boulette3 = document.getElementsByClassName('meatball')[2];

boulette3.style.width = '90px';

var tomate = document.getElementsByClassName('tomato')[0];

tomate.style.backgroundColor = 'orange';

var fromage = document.querySelectorAll('.cheese');

  for (var i = 0; i < fromage.length ; i++)
    document.getElementsByClassName('cheese')[i].style.borderRadius = '12%';

var patty1 = document.getElementsByClassName('patty')[1];

var cheese = document.getElementsByClassName('cheese')[0];

var newcheese = cheese.cloneNode(true);

  patty1.before(newcheese);

var painb = document.getElementsByClassName('bun-bottom')[0];

painb.setAttribute("id", "bottom");
// painb.id = 'bottom';

var link = document.querySelector('a');

link.setAttribute('target', ' ');
link.setAttribute('href', 'www.google.com');

function duplication (why){

var a = document.getElementsByClassName(why);

a = document.createElement('div');
a.classList.add(why);

return a;
};

var assiette = duplication('plate');
  // var fin = document.querySelector('.burger');
  var f = document.querySelector('.burger').children.length;
  // fin.appendChild(assiette);
  var fin = document.querySelector('.burger').children[f-1];

fin.after(assiette);
