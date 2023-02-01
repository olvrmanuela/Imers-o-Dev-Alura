var numeroSecreto = parseInt(Math.random() * 1001 + 1)
var qtdeChutes = 0;
var tentativas = 11;
var totalDeChutes = [];


alert("Bem vindo ao jogo. \n Vamos começar? \n Dê ENTER ")

while (chute != numeroSecreto) {
    qtdeChutes++
    tentativas--


    var chute = prompt("Digite um número: \n você possui: " + tentativas + " chances \n\nChutes anteriores: " + totalDeChutes)

    if (chute == numeroSecreto) {

        alert('Acertou! \n Você usou ' + qtdeChutes + ' chances \n O Número Secreto é: ' + numeroSecreto)
        break;

    } else if (chute > numeroSecreto) {
        totalDeChutes.push(chute)

        alert('Errou! o número secreto é menor que ' + chute + '\n\n Chutes: ' + totalDeChutes)

    } else if (chute < numeroSecreto) {
        totalDeChutes.push(chute)

        alert('Errou! o número secreto é maior que ' + chute + '\n\nChutes: ' + totalDeChutes)
    }

    if (tentativas == 1) {
        alert('Você usou todas as chances! \n O número secreto é: ' + numeroSecreto + '\n\nTodos os chutes: ' + totalDeChutes)
        break
    }

}