/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let numberOne = prompt('Insira o primeiro número:')
let numberTwo = prompt('Insira o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`O resultado da soma é: ${sum}`)
alert(`O resultado da subtração é: ${sub}`)
alert(`O resultado da multiplicação é: ${mult}`)
alert(`O resultado da divisão é: ${div}`)
alert(`O resultado do resto da divisão é: ${rest}`)


if (rest === 0) {
    alert(" A soma dos números é par")
}else {
    alert(" A soma dos números é impar")
}

if ( numberOne == numberTwo) {
    alert('Os números iseridos são iguais')
} else{
    alert('Os números iseridos são diferentes')
}