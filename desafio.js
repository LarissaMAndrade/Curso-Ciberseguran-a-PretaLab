/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

// Funcao que vai fazer o ranking de medalhas
function RankingMedalhas () {
    let paises = []; // Digito o nome do pais
    let medalhas = []; // Digito a quantidade de medalhas

    while (true) {
        let pais = prompt ("Digite o nome do pais ou sair para encerrar o programa:");

        if (pais.toLowerCase()== "sair"){//Encerra o programa se for digitado sair
            break;
        }

        let medalha = Number(prompt(`Digite as medalhas conquistadas por ${pais}:`));// Considerando number porque o número de medalhas é pequeno e inteiro

        if(!isNaN(medalha)){
            paises.push(pais);
            medalhas.push(medalha);
        } else {
            alert("Insira um valor válido de medalhas")
        }
        
    }

    for (let i = 0; i < medalhas.length - 1; i++){
        for (let j = 0; j < medalhas.length - 1 - i; j++) {
            if (medalhas[j] < medalhas [j+1]){
                // Passa a maior quantidade de medalha para a frente no array
                let medalha_campeao = medalhas[j+1];
                medalhas[j+1] = medalhas [j];
                medalhas[j] = medalha_campeao;

                // Passa o pais com mais medalhas para frente no array      
                let pais_campeao = paises[j+1];
                paises[j+1] = paises [j];
                paises[j] = pais_campeao;

            }
            }
        
}

    let ranking = "#Ranking de medalhas:\n";
    for (let i = 0; i<medalhas.length; i++){
        ranking += `${paises[i]}: ${medalhas[i]} medalhas\n`;
    }
    alert(ranking);

}

RankingMedalhas();