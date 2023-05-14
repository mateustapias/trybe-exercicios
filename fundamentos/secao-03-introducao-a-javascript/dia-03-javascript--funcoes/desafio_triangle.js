function checkIntegerPositive (l1, l2, l3) {
  for (let value of checkIntegerPositive.arguments)
    return ((value * 10) % 10 === 0 && value > 0);
}
console.log(checkIntegerPositive(9, 7, 8));

function checkItsATriangle (l1, l2, l3) {
  return (l1 < (l2 + l3) && l2 < (l1 + l3) && l3 < (l1 + l2));
}
console.log(checkItsATriangle(9, 7, 8));

function checkWitchTriangle (l1, l2, l3) {
  let triangleType = '';
  if (l1 === l2 && l2 === l3) {
    triangleType = 'equilátero';
  } else if (l1 != l2 && l1 != l3 && l2 != l3) {
    triangleType = "escaleno";
  } else {
    triangleType = 'isósceles';
  }
  return triangleType;
}
console.log(checkWitchTriangle(9, 7, 8));

function checkPerimeterTriangle (l1, l2 ,l3) {
  return (l1 + l2 + l3);
}
console.log(checkPerimeterTriangle(9, 7, 8));

function infoTriangle (l1, l2, l3) {
  if (checkIntegerPositive(l1, l2, l3) && checkItsATriangle(l1, l2, l3)) {
    return  ('O triângulo é ' + checkWitchTriangle(l1, l2, l3) + ' e seu perímetro vale ' + checkPerimeterTriangle(l1, l2, l3) + ' cm.');
  } else {
    return 'Não é um triângulo';
  }
}
console.log(infoTriangle(9, 7, 8));