const whereAreYouElement = document.getElementById('where-are-you');

const parentOfWhereAreYou = whereAreYouElement.parentElement;
parentOfWhereAreYou.style.color = 'red';

const firstChildOfChildElement = document.querySelector('#first-child-of-child');
firstChildOfChildElement.innerText = 'Adicionei um texto muahahahah';

console.log(parentOfWhereAreYou.firstElementChild);

console.log(whereAreYouElement.previousElementSibling);

console.log(whereAreYouElement.nextSibling);

console.log(whereAreYouElement.nextElementSibling);

console.log(parentOfWhereAreYou.lastElementChild.previousElementSibling);
