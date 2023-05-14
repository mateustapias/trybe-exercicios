let createdH1 = document.createElement('h1');
createdH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(createdH1);

let createdMain = document.createElement('main');
createdMain.className = 'main-content';
document.body.appendChild(createdMain);

let createdSection1 = document.createElement('section');
createdSection1.className = 'center-content';
createdMain.appendChild(createdSection1);

let createdP = document.createElement('p');
createdP.innerText = 'tanto faz';
createdSection1.appendChild(createdP);

let createdSection2 = document.createElement('section');
createdSection2.className = 'left-content';
createdMain.appendChild(createdSection2);

let createdSection3 = document.createElement('section');
createdSection3.className = 'right-content';
createdMain.appendChild(createdSection3);

let createdImg = document.createElement('img');
createdImg.src = 'https://picsum.photos/200';
createdImg.className = 'small-image';
createdSection2.appendChild(createdImg);

let createdUl = document.createElement('ul');
createdSection3.appendChild(createdUl);
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < numbers.length; i += 1) {
  let createdLi = document.createElement('li');
  createdLi.innerText = numbers[i]
  createdUl.appendChild(createdLi);
}

for(let index = 0; index < 3; index += 1) {
  const createdH3 = document.createElement('h3');
  createdH3.innerText = index;
  createdMain.appendChild(createdH3);
}