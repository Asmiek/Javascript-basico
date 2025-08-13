let num1 = prompt("Qual é o primeiro número")
num1 = Number(num1)

let num2 = prompt("Qual é o segundo número")
num2 = Number(num2)


const operação = prompt("Qual é sua operação?")

if(operação == "Multiplicação"){
    let Final = num1 * num2
    alert ("A multiplicação dos dois números é igual a "+ Final)
}

if(operação == "Divisão" ){
    if(num1 || num2 == 0){
    alert("Não envolva 0 nos cálculos")
    }

    else{
    let Final = num1 / num2
    alert ("A divisão dos dois números é igual a "+ Final)
    }
}

if(operação == "Soma"){
    let Final = num1 + num2
    alert ("A soma dos dois números é igual a "+ Final)
}

if(operação == "Subtração"){
    let Final = num1 - num2
    alert ("A subtração dos dois números é igual a "+ Final)
}