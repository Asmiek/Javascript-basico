let nota1 = prompt ("Qual é o valor da nota 1??")
let nota2 = prompt ("Qual é o valor da nota 2??")
let nota3 = prompt ("Qual é o valor da nota 3??")
let peso1 = prompt ("Qual é o peso da nota 1??")
let peso2 = prompt ("Qual é o peso da nota 2??")
let peso3 = prompt ("Qual é o peso da nota 3??")

nota1 = nota1 * peso1
nota2 = nota2 * peso2
nota3 = nota3 * peso3

let notaG = nota1+nota2+nota3 / 3

console.log ("sua média é de "+ notaG)