var nome = prompt("Seu nome por favor.");
var celsius = prompt("Valor em celsius à ser convertido.");
var kelvin = parseInt(celsius) + 273.15;
var fahreinheit = parseInt(celsius) * 1.8 + 32;
fahreinheit = fahreinheit.toFixed(2);
alert(
    "Olá " +
    nome +
    ", " +
    celsius +
    "° celsius é equivalente a " +
    kelvin +
    "° kelvin ou a " +
    fahreinheit +
    "° fahreinheit."
);