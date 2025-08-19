// O erro NaN tem como significado "not a number" e um exemplo de como aparentá-lo é:

let batatas = 0/0

alert ("Você tem "+ batatas+ " batatas")

/*12

const prod = {

    nome: perafone,
    preço: 30.000,
    emEstoque: false
}

const prod2 = {

    nome: teslafone,
    preço: 300.000,
    emEstoque: true
}

if(prod.perafone)
{
alert("Tem não")
}

if(prod2.teslafone)
{
alert("Tem sim")
}
*/

/*13

let pessoa1 ={
    nome:  "lucas",
    peso: 60,
    altura: 1.68,
    temperatura: 32
}

console.log("Nome da pessoa: ",pessoa1.nome)
console.log("Peso da pessoa: ", pessoa1.peso)
console.log("Altura da pessoa: ", pessoa1.altura)

if( pessoa1.temperatura >= 41){
    console.log("Hipertemia")
}

if( pessoa1.temperatura <= 41 && pessoa1.temperatura <= 39.6){
    console.log("Febre alta")
}

if( pessoa1.temperatura <= 37.6 && pessoa1.temperatura <= 39.5)
{
    console.log("Febre")
}

if(pessoa1.temperatura <= 36 && pessoa1.temperatura <= 37.5){

    console.log("Temperatura normal")
}

if( pessoa1.temperatura <= 35){
    console.log("Hipotermia")
}
*/

/* 14

let livro1 = {
    nome1: "",
    anodep1: 0,
    ndepa1: 0,
    autorb1: "",
}

let livro2 = {
    nome2: "",
    anodep2: 0,
    ndepa2: 0,
    autorb2: "",
}


livro1.nome1 = prompt("Digite o nome do primeiro livro: ")
livro1.anodep1 = Number(prompt("Digite o ano de lançamento do primeiro livro: "))
livro1.ndepa1 = Number(prompt("Digite o número de páginas do primeiro livro: "))
livro1.autorb1 = prompt("É de um autor brasileiro? ")


livro2.nome2 = prompt("Digite o nome do segundo livro: ")
livro2.anodep2 = Number(prompt("Digite o ano de lançamento do segundo livro: "))
livro2.ndepa2 = Number(prompt("Digite o número de páginas do segundo livro: "))
livro2.autorb2 = prompt("É de um autor brasileiro? ")


if(livro1.anodep1 > livro2.anodep2){
    console.log("O livro mais velho é", livro2.nome2)
} else {
    console.log("O livro mais velho é", livro1.nome1)
}


if(livro1.ndepa1 > livro2.ndepa2){
    console.log("O livro com mais páginas é", livro1.nome1)
} else {
    console.log("O livro com mais páginas é", livro2.nome2)
}


console.log("Os livros de autores brasileiros são:")
if(livro1.autorb1.toLowerCase() === "sim"){
    console.log(livro1.nome1)
}
if(livro2.autorb2.toLowerCase() === "sim"){
    console.log(livro2.nome2)
}
*/

/* 15
let filme = {
    nome: "",
    clas: 0,
}

filme.nome = String(prompt("Qual o nome do Filme? "))
filme.clas = String(prompt("Qual sua classificação indicativa? "))

console.log("O nome do filme é ", filme.nome)
console.log("Classificação indicativa: ", filme.clas)
*/


/* 24
let p1 = {
    nome: prompt("Nome do 1º Pokémon:"),
    tipo: prompt("Tipo (agua, fogo, terra):").toLowerCase(),
    poder: Math.floor(Math.random() * 10) + 1
};

let p2 = {
    nome: prompt("Nome do 2º Pokémon:"),
    tipo: prompt("Tipo (agua, fogo, terra):").toLowerCase(),
    poder: Math.floor(Math.random() * 10) + 1
};


if ((p1.tipo === "agua" && p2.tipo === "fogo") ||
    (p1.tipo === "fogo" && p2.tipo === "terra") ||
    (p1.tipo === "terra" && p2.tipo === "agua")) {
    p1.poder += 3;
} else if ((p2.tipo === "agua" && p1.tipo === "fogo") ||
           (p2.tipo === "fogo" && p1.tipo === "terra") ||
           (p2.tipo === "terra" && p1.tipo === "agua")) {
    p2.poder += 3;
}


console.log(p1.nome + " vs " + p2.nome);

if (p1.poder > p2.poder) console.log(p1.nome + " venceu!");
else if (p2.poder > p1.poder) console.log(p2.nome + " venceu!");
else console.log("Empate!");
*/