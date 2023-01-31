//Atividade 1 + Desafio 2
// var valorEmDolar = 10;
//var cotacaoDoDolar = 5.12;
//var nomeDaPessoa = "Teuzin";
//var valorEmReal = valorEmDolar * cotacaoDoDolar;
//valorEmReal = valorEmReal.toFixed(2);
//alert("Olá " + nomeDaPessoa + ", o valor em Real é R$ " + valorEmReal);

// Desafio 1+2
var nome = prompt("Digite seu nome por favor.");
var valorEmBtc = prompt(
    "Digite o valor em BTC que você quer converter para o Euro."
);
var cotacaoDaBtc = 21231.88; // cotação de 31 de jan., 20:37 UTC
var valorEmEuro = valorEmBtc * cotacaoDaBtc;
valorEmEuro = valorEmEuro.toFixed(2);
alert(
    "Olá " +
    nome +
    ", o valor de " +
    valorEmBtc +
    "BTC em Euro é de €" +
    valorEmEuro
);
