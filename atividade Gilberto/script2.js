const filme1 ={
nome: prompt("Qual é o nome do filme 1"),
genero: prompt("Qual é o genero do filme 1"),
nota: prompt("Qual é a nota do filme 1")
}

filme1.nota = Number(filme1.nota)

const filme2 ={
nome: prompt("Qual é o nome do filme 2 "),
genero: prompt("Qual é o genero do filme 2"),
nota: prompt("Qual é a nota do filme 2")
}

filme2.nota = Number(filme2.nota)

alert( JSON.stringify(filme1) + " Dados do filme 1       "+ JSON.stringify(filme2) + " Dados do filme 2")

if (filme1.nota > filme2.nota)
{
    alert("O filme 1 é melhor pra vc assistir")
}

if (filme1.nota < filme2.nota)
{
    alert("O filme 2 é melhor pra vc assistir")
}
