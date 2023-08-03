function calcularIMC(){
    var peso = parseFloat(document.getElementById("txtPeso").value,10);
    var altura = parseFloat(document.getElementById("txtAltura").value,10);
    var imc =peso/(altura*altura);
    document.getElementById("resposta").innerHTML="IMC: "+imc.toFixed(2);
    if(imc<18)
{
    document.getElementById("conclusao").innerHTML="abaixo do peso";
    document.getElementById("conclusao").style.color="blue";
    document.getElementById("conclusao").style.backgroundColor="yellow";

}
else
{
    if(imc>18 && imc<=24)
    {
        document.getElementById("conclusao").innerHTML="peso ideal"
        document.getElementById("conclusao").style.color="green";
        document.getElementById("conclusao").style.backgroundColor="yellow";
    }
    else
{
    if(imc>24 && imc<30)
    {
        document.getElementById("conclusao").innerHTML="acima do peso";
        document.getElementById("conclusao").style.color="yellow";
        document.getElementById("conclusao").style.backgroundColor="black";
    }
    else
    {
        document.getElementById("conclusao").innerHTML="sobrepeso";
        document.getElementById("conclusao").style.color="red";
        document.getElementById("conclusao").style.backgroundColor="black";
    }
}
}
}
 function addLista(){
     const elemento = document.createElement("li");
     const  texto = document.createTextNode(document.getElementById("adicionar").value);
     
     elemento.appendChild(texto);
     document.getElementById("minhaLista").appendChild(elemento);
 }

