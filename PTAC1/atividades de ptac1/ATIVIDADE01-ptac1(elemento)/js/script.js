function mudarTitulo(){
    const elemento = document.getElementById("titulo 1");
    elemento.innerHTML="novo titulo";
}
function MudarParaSOL(){
    const elemento = document.getElementById("imagem");
    elemento.src ="img/sol.jpg";
}
function MudarParaLua(){
    const elemento = document.getElementById("imagem");
    elemento.src ="img/lua.jpg";
}
 function validarDados(formulario){
     let x =document.forms["nomeForm"]["txtNome"].value;
     if(x==""){
     alert("O campo e obrigatorio ")
     return false
     }
    }
  function mudarLetra(){
      let nome = document.getElementById("myname");
      nome.value.toUpperCase();
  }
 function mudarEntrou(lucas){
     lucas.innerHTML="entrou"
 }
 function mudarSair(){
  document.getElementById("testemouse").innerHTML="saiu"
 }
