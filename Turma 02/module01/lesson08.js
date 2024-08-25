const prompt = require('prompt-sync')()

const num1 = Number(prompt('Digite um numero: '))

if(num1 > 0) {
    console.log('O numero imformado é positivo!')
} else if (num1 < 0) {
    console.log ('O numero informado é negativo!')
} else {
    console.log('O numero e zero');
}