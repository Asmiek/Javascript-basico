Atividades revisão Mano Gilbas ("As não contidas aqui estão na pasta nesse mesmo repositório")
2 - Temos 3 formas de estilizar nosso código sendo elas: o Inline ( Aplicando o estilo em extremidades específicas do código), o Interno (Utilizado para páginas HTML inteiras) e o externo(Armazenado em arquivo separado .css para várias páginas HTML)

Inline: //<p style="color: blue; text-align: center;"></p>

Interno:
//<style>
body{
    color: red;
    background-image: -o-linear-gradient();
}
</style>

Externo:
// Ligado com  <link rel="stylesheet" href="2.css">
//No arquivo 2.css: 
h1 {
    color: aliceblue;  
    text-align: center;
    background-size: auto;
}

///////////////////////////

3 - A <div> é como um bloco de conteúdo, utilizando a linha toda. Já o <span> age como parte da linha, não quebrando as linhas. O div é melhor para estruturar layouts e o span para estilizar partes específicas

///////////////////////////

4 - O <head> no código HTML é formado pelos conceitos iniciais de uma página, nele pode conter o Favicon, o Nome da página que fica contido na aba e o link para o código CSS externo

///////////////////////////

5 - a lista <ol> é ordenada, ou seja, a ordem importa, como um passo a passo. Já a lista <ul> é não ordenada, ou seja a ordem não importa, como uma listagem de itens

Ordenada 
<ol>
  <li>Primeiro passo</li>
  <li>Segundo passo</li>
  <li>Terceiro passo</li>
</ol>

Não ordenada
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

///////////////////////////

6 - O display controla como o elemento se comportará, sendo por bloco, linha ou outros, definindo se ficará alinhado lado a lado, se repeitará margens, e etc
o block ocupará toda a linha, começará em uma nova linha
o inline usará só o necessário 
e o inline-block é a mistura dos dois

///////////////////////////

9 - Esse atributo é usado na tag <a>, usada para adicionar um link ao código, para abrir a página de destino em um nova aba no navegador.É necessário um cuidado, pois a nova aba ganha acesso à página que abriu o link por meio do objeto window.opener, que pode ser explorado por sites maliciosos, como,  exemplo, redirecionar para páginas falsas.

///////////////////////////


10. A propriedade flex serve para dizer como cada elemento vai se comportar dentro de um container, permitindo distribuir de forma proporcional o espaço dentro do container.Por exemplo, se um item tiver flex: 2 e outro flex: 1, o primeiro ocupará o dobro de espaço do segundo. Dessa forma, a propriedade flex facilita a construção de layouts responsivos e organizados.

///////////////////////////

11. Esse elemento é usado para criar efeitos de animações simples, ou seja, uma mudança de suave de estado para outro em vez de acontecer de uma forma instantânea, como mudar a cor de um botão quando ele está sendo selecionado.

///////////////////////////

16. Podemos usar const, var e let no código do JavaScript.O Var é o mais antigo, tem escopo de função ( vale dentro de toda a função) e permite redeclarar a variável no mesmo lugar, o que pode gerar problemas no código.O let é o mais moderno, tem escopo de bloco( só vale dentro das chave que ele foi criado e não pode ser redeclarado, mas o valor pode ser alterado.Já o const também tem escopo de bloco, mas não permite alterar o valor depois de definido.Porém em um objeto, podemos mudar o conteúdo interno, mas não trocar a variável interna.

///////////////////////////

17. let y = 20;
const z = 30;

console.log("1) x =", x); // 1) x = undefined 

x = 15;
y = 25;

console.log(x); // 15
console.log(y); // 25
console.log(z); // 30
var x = 10;

{
    var a = 100;
    let b = 200;
    const c = 300;


console.log(a); // 100
console.log(b); // 200
console.log(c); // 300
}

console.log(a);         // 100 
console.log(typeof b);  // "undefined" 
console.log(typeof c);  // "undefined"

{
    var m = "var da função";
    let n = "let da função";
    const o = "const da função";
    console.log(m); // "var da função"
    console.log(n); // "let da função"
    console.log(o); // "const da função"
}

console.log(typeof m); // "string" 
console.log(typeof n); // "undefined" 
console.log(typeof o); // "undefined"

///////////////////////////


18 - Java é um linguagem compilada e orientada a objetos, usada principalmente para criar grandes aplicações, como sistemas corporativos ou sistemas de jogos.Já o JavaScript é uma linguagem interpretada, mais leve e criada para deixar as páginas da web mais interativas.

///////////////////////////


19 - No JavaScript, == compara apenas os valores, fazendo conversão de tipo se necessário, enquanto === compara valor e tipo. Por exemplo, 5 ==’5’ é verdadeiro, mas 5 === ‘5’ é falso, porque os tipos são diferentes. O === é mais seguro para evitar erros.

///////////////////////////
 
21 - Os operadores lógicos são usados para combinar e inverter condições em estruturas de decisão, como IF.O operador && retorna verdadeiro se todas as condições forem verdadeiras, o || retorna verdadeiro se pelo menos umas das condições forem verdadeiras.Já o operador ! inverte o valor lógico de uma condição, como em sim em não.

///////////////////////////

21 - Sim.Para isso, podemos usar a notação de ponto ou a notação de colchetes, atribuindo um valor à nova propriedade desejada. Por exemplo, se temos um objeto pessoa com nome e idade , podemos adicionar uma propriedade altura usando pessoa.altura= 1.75 ou  pessoa[“altura”] = 1.75.

///////////////////////////

22 - No JavaScript, undefined  significa que uma variável foi declarada, mas ainda não recebeu valor, enquanto null  é um valor que o programador atribui intencionalmente para indicar que a variável está vazia.

///////////////////////////


23 - Em JavaScript, um objeto é uma estrutura que permite armazenar valores e funções organizados em propriedades, que são pares de chave e valor. Ele é usado para representar entidades do mundo real ou agrupar informações relacionadas em um único elemento. Um objeto é declarado usando chaves {} e suas propriedades são definidas dentro delas. Por exemplo, podemos criar um objeto pessoa com as propriedades nome, idade e uma função saudação, que permite acessar os dados ou executar ações relacionadas a esse objeto.




