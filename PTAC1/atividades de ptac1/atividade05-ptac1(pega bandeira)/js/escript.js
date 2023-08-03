const NUME_BANDEIRAS=50;
const TEMPO_INICIAL=10;

var pontos;
var tempo;
var timer;

function contarTempo(){

    tempo--;
    document.getElementById("tempo").textContent=tempo;
    if(tempo<=0)

    {
        clearInterval(timer);
        alert("voce conseguiu" +pontos+"pontos");
        iniciarJogo();
    }
}

function iniciarJogo(){

    pontos =0;
    tempo =TEMPO_INICIAL;
    var tela= document.getElementById("tela");
    tela.innerHTML='';
    for(let i=0;i<NUME_BANDEIRAS;i++){
    var bandeira= document.createElement("Img");
    bandeira.src ="imagens/bandeirazul.png";
    bandeira.id= "band"+i;

    bandeira.onclick= function(){
    //alert("clicou na bandeira"+i);
    pegarBandeira(this)
    }
       
    tela.appendChild(bandeira);
    }   
    time = setInterval(contarTempo,1000); 
}

function pegarBandeira(elemento){

elemento.src="imagens/bandeiravermelha.png";
elemento.onclick= null;
//pontos++;
document.getElementById("pontos").innerHTML = ++pontos;

}