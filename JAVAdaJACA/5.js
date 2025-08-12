let bat = prompt ('Quantos anos você tem ?')
bat = Number(bat)
let man = prompt ('Quantos meses você tem ?')
man = Number(man)
 
let meses = (bat*12)
meses = meses + man 

let dias = meses * 30

console.log ("você tem aproximadamente "+ meses + " ou "+ dias + " dias ")