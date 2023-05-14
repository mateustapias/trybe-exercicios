let siblingElement = document.createElement('section');
let elementoPai = document.getElementById('pai');
elementoPai.appendChild(siblingElement);

let childElement1 = document.createElement('section');
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(childElement1);

let childElement2 = document.createElement('section');
let elementoPrimeiroFilho = document.getElementById('primeiroFilhoDoFilho');
elementoPrimeiroFilho.appendChild(childElement2);

console.log(childElement2
  .parentElement
  .parentElement
  .nextElementSibling);