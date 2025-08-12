let dis = prompt ("Qual é a distância ?")
let vel = prompt ("Qual é a velocidade média ?")
let gas = prompt ("Qual é o preço da gasolina ?")
let con = prompt ("Qual é quanto seu carro consome por km? ?")

dis = Number(dis)
vel = Number(vel)
gas = Number(gas)
con = Number(con)

let qtg = dis*con

console.log ("Você vai demorar "+ dis/vel + " horas pra chegar ")
console.log ("Você vai gastar "+ dis*con + "L de gasolina ")
console.log ("Você vai gastar "+ qtg*gas + "R$ de gasolina ")