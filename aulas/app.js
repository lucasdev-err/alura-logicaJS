alert('Boas vindas ao jogo do número secreto');
// definição de variaveis
let multiplicador = 100
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao numero secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${multiplicador}`);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // se for veradeiro, para o loop
        break;
    } else {
        // se nao, verificar se o chute é maior ou menor que o numero secreto
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        // incrementar o numero de tentativas
        tentativas++;
    }
    
}
// quando o loop para no break ele vem pra ca e aqui define se a mensagem de sucesso é no plural ou singular
/* if (tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
} */

// outra forma de fazer a mesma coisa usando operador ternario
// tentativas maior que 1? sim:nao
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);