// function verificaPalíndromo (str) {
//   let reverseStr = ''
//   for (let i in str) {
//     reverseStr += str[str.length - 1 -i];
//   }
//   return (reverseStr === str);
// }
// console.log(verificaPalíndromo('arara'));

let array1 = [2, 3, 6, 7, 10, 1];
let array2 = [9, 1, 3, 5, 7];
function indiceDoMaior (array) {
  let biggestNum = 0;
  let biggestNumIndex = 0;
  for (let i in array) {
    if (array[i] > biggestNum) {
      biggestNum = array[i];
      biggestNumIndex = i;
    }
  }
  return parseInt(biggestNumIndex);
}
console.log(indiceDoMaior(array1));
console.log(indiceDoMaior(array2));

array1 = [2, 3, 6, 7, 10, 1];
array2 = [2, 4, 6, 7, 10, 0, -3];
function indiceDoMenor (array) {
  let biggestNumIndex = indiceDoMaior(array);
  let smallestNum = array[biggestNumIndex];
  let smallestNumIndex = biggestNumIndex;
  for (let i in array) {
    if (array[i] < smallestNum) {
      smallestNum = array[i];
      smallestNumIndex = i;
    }
  }
  return smallestNumIndex;
}
console.log(indiceDoMenor(array1));
console.log(indiceDoMenor(array2));

let words = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra (words) {
  let biggestWord = '';
  let biggestWordSize = 0;
  for (let word of words) {
    if (word.length >= biggestWordSize) {
      biggestWordSize = word.length;
      biggestWord = word;
    }
  }
  return biggestWord;
}
console.log(maiorPalavra(words));

array1 = [2, 3, 3, 3, 2, 5, 8, 2];
array2 = [2, 3, -2, 3, -2, 2, 3];

function maisRepetido(array) {
  let sortedArray = array.sort();
  let mostUsedTimes = 0;
  let mostUsed = 0;
  let i2, uses;
  for (let i = 0; i < sortedArray.length; i += 1) {
    i2 = i;
    uses = 0;
    while ((sortedArray[i2] === sortedArray[i2 + 1]) && i2 < sortedArray.length) {
      uses += 1;
      i2 += 1;
    }
    if (uses > mostUsedTimes) {
      mostUsedTimes = uses;
      mostUsed = sortedArray[i];
    }
  }
  return mostUsed;
}
console.log(maisRepetido(array2));

function somatorio (num) {
  if (num < 0) return 'ERRO';
  let sum = 0;
  for (let n = 0; n <= num; n += 1) {
    sum += n
  }
  return sum;
}
console.log(somatorio(5));
console.log(somatorio(1));
console.log(somatorio(-10));

function criaArray (palavra) {
  let palavraArray = []
  for (let v of palavra)
    palavraArray.push(v);
  return palavraArray;
}

function verificaFimPalavra (palavra1, palavra2) {
  let palavra1Array = criaArray(palavra1);
  let palavra2Array = criaArray(palavra2);
  let word1End = palavra1Array.splice(palavra1.length - palavra2.length);
  for (let i = 0; i < word1End.length; i += 1) {
    if (word1End[i] != palavra2Array[i]) {
      return false;
    }
  }
  return true;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
