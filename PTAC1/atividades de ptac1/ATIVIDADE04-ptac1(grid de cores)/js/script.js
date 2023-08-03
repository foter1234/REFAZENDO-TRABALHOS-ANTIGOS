function mudarMath(){
    document.getElementById("teste").innerHTML= Math.random()*100;
}
function corAleatoria(){
    var r,g,b;
    r = Math.floor(Math.random()*300);
    g = Math.floor(Math.random()*300);
    b = Math.floor(Math.random()*300);

    return 'rgb('+r+','+g+','+b+')';
}
function alterarColorido(elemento){

    var novaCor= corAleatoria(elemento); 
    elemento.style.backgroundColor = novaCor;

}
function mudarPar(elemento){
    var pares = document.getElementsByClassName("quadrado par")
    var novaCor = corAleatoria();
    for(let i of pares){
        i.style.backgroundColor = novaCor
    }
}
  function mudarImpar(elemento){
      var impar = document.getElementsByClassName("quadrado impar")
      var novaCor = corAleatoria();
      for (let i of impar){
        i.style.backgroundColor = novaCor
    }
}
