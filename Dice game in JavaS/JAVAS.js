

function funcao(event) {

    event.preventDefault()

    let nomeJ1 = (nome1.value);
    let nomeJ2 = (nome2.value);

    let dado;
    let i=0;

    let dadoA;
    let dadoB;
    
    while(i<=2){
        i++;
        
        if(i==1){
            dadoA=Math.trunc(Math.random(dado)*6+1);
        }
        else if(i==2){
            dadoB=Math.trunc(Math.random(dado)*6+1);
        }
    }
    

    exibir.innerHTML = ''

        exibir.innerHTML = 
        `<div class="nome1"> 1° Jogador 
        [${nomeJ1}]
         primeiro dado = ${dadoA}</div>	
	<br />		
        <div class="nome2"> 2° jogador 
        [${nomeJ2}]
         segundo dado = ${dadoB}</div>`
        
        if(dadoA>dadoB){
            campeao.innerHTML =  `<p> o jogador ${nomeJ1} venceu com a pontução de ${dadoA}</p>`
 
        }
        else if(dadoA<dadoB){
            campeao.innerHTML =  `<p> o jogador ${nomeJ2} venceu com a pontução de ${dadoB}</p>`
        }
        else{
            campeao.innerHTML =  `<p> o jogador ${nomeJ1} empatou com jogador ${nomeJ2}</p>`
        }
    }

form.addEventListener('submit',funcao)
