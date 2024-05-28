const prompt = require('prompt-sync')();
/*
 10.0
Digite o comprimento do terreno: 30.0
Digite o valor do metro quadrado: 200.00
Area do terreno = 300.00
Preco do terreno = 60000.00 
*/
let largura = prompt('Digite a largura do terreno: ')
let comprimento = prompt('Digite o comprimento do terreno: ')
let valorM2 = prompt('Digite o valor do metro quadrado: ')

let area = largura*comprimento
let precoTerreno = area*valorM2

console.log(`Area do terreno = ${area.toFixed(2)}`)
console.log(`Preço do terreno = ${precoTerreno.toFixed(2)}`)