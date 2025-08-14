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

5 a lista <ol> é ordenada, ou seja, a ordem importa, como um passo a passo. Já a lista <ul> é não ordenada, ou seja a ordem não importa, como uma listagem de itens

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




