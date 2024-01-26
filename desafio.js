let nome = prompt("Qual é o seu nome?");
console.log("Muito prazer, " + nome + "!");

let primeiroNumero = parseInt(prompt("Vamos realizar uma soma. Digite o primeiro número inteiro:"));
let segundoNumero = parseInt(prompt("Agora digite o segundo número inteiro:"));
let soma = primeiroNumero + segundoNumero;
console.log("O resultado da soma é: " + soma + ".");

let primeiraFrase = prompt("Por fim, criar uma frase. Digite texto qualquer.");
let segundaFrase = prompt("Agora digite outro texto qualquer que faça sentido com o primeiro digitado.");
let concatenacao = primeiraFrase + " " + segundaFrase;
alert("A frase criada é: " + concatenacao);
