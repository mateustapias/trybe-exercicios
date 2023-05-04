// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaClientes(cliente) {
//   if (typeof cliente != 'string') {
//     console.log('ERRO');
//   } else {
//     clientesTrybeBank.push(cliente)
//   }
//   return clientesTrybeBank;
// }
// console.log(adicionaClientes('Mateus'));

// ### ###
// let clientesTrybeBank = ['Ada', 'Mateus', 'John', 'Gus'];

// function removeClientes(cliente) {
//   if (typeof cliente != 'string') {
//     return 'ERRO';
//   } else {
//     let clienteEncontrado = false;
//     for (let i = 0; i < clientesTrybeBank.length; i += 1) {
//       if (clientesTrybeBank[i] === cliente) {
//         clienteEncontrado = true;
//         clientesTrybeBank.splice(i, 1);
//         return clientesTrybeBank;
//       };
//     };
//     if (!clienteEncontrado) {
//       return 'ERRO';
//     };
//   };
// };
// console.log(removeClientes('Mateus'));

// ### ###
let clientesTrybeBank = ['Ada', 'Mateus', 'John', 'Gus'];

function validClient(cliente) {
  return (typeof cliente === 'string');
}

function removeClientes(cliente) {
  if (validClient(cliente)) {
    let clienteEncontrado = false;
    for (let i = 0; i < clientesTrybeBank.length; i += 1) 
      if (clientesTrybeBank[i] === cliente) {
        clienteEncontrado = true;
        clientesTrybeBank.splice(i, 1);
        return clientesTrybeBank;
      }
    if (!clienteEncontrado) {
      return 'ERRO';
    }
  }
}
console.log(removeClientes('Mateus'));