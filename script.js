
const jokeipo = ["Pedra", "Papel","Tesoura"];
function escolhaComp(){
    var numeroAleatorio = Math.floor(Math.random() * 3)
    return jokeipo[numeroAleatorio];
}

function escolhaJogador(botaoEscolhido){
    var pcChoice = escolhaComp()
    var resultado 

    if(pcChoice === botaoEscolhido){
        resultado = "Empate!"
    }else if((pcChoice === jokeipo[0] && botaoEscolhido === jokeipo[1]) ||
             (pcChoice === jokeipo[1] && botaoEscolhido === jokeipo[2]) || 
             (pcChoice === jokeipo[2] && botaoEscolhido === jokeipo[0])){

        resultado = "Você Ganhou!"
    }else{
        resultado = "Você Perdeu!!"
    }
 
    document.getElementById('resultado').innerText = resultado;
}

