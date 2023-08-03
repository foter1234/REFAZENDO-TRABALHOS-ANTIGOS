function conferirResposta()
{
    var respostaq1 =document.getElementsByName("q1");
    var respostamarcadaq1;
    var respostaq2 =document.getElementsByName("q2");
    var respostamarcadaq2;
    var respostaq3 =document.getElementsByName("q3");
    var respostamarcadaq3;
    var respostaq4 =document.getElementsByName("q4");
    var respostamarcadaq4;
    var respostaq5 =document.getElementsByName("q5");
    var respostamarcadaq5;
    var respostaq6 =document.getElementsByName("q6");
    var respostamarcadaq6;
    var respostaq7 =document.getElementsByName("q7");
    var respostamarcadaq7;
    var respostaq8 =document.getElementsByName("q8");
    var respostamarcadaq8;
    var respostaq9 =document.getElementsByName("q9");
    var respostamarcadaq9;
    var respostaq10 =document.getElementsByName("q10");
    var respostamarcadaq10;
    var correstas=0;
    var erradas =0;

    for(let i =0;i<respostaq1.length;i++)
    {
        if(respostaq1[i].checked)
        {
        respostamarcadaq1 = respostaq1[i].value;
        }
    }
    if(respostamarcadaq1==="d")
    {
    correstas++;
    }
    else
    {
     erradas++;
    }
    for(let i =0;i<respostaq2.length;i++)
    {
        if(respostaq2[i].checked)
        {
        respostamarcadaq2 = respostaq2[i].value;
        }
    }
    if(respostamarcadaq2==="c")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }


    for(let i =0;i<respostaq3.length;i++)
    {
        if(respostaq3[i].checked)
        {
        respostamarcadaq3 = respostaq3[i].value;
        }
    }
    if(respostamarcadaq3==="b")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    
    for(let i =0;i<respostaq4.length;i++)
    {
        if(respostaq4[i].checked)
        {
        respostamarcadaq4 = respostaq4[i].value;
        }
    }
    if(respostamarcadaq4==="b")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    
    for(let i =0;i<respostaq5.length;i++)
    {
        if(respostaq5[i].checked)
        {
            respostamarcadaq5 = respostaq5[i].value;
        }
    }
    if(respostamarcadaq5==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    
    for(let i =0;i<respostaq6.length;i++)
    {
        if(respostaq6[i].checked)
        {
        respostamarcadaq6 = respostaq6[i].value;
        }
    }
    if(respostamarcadaq6==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }


    for(let i =0;i<respostaq7.length;i++)
    {
        if(respostaq7[i].checked)
        {
        respostamarcadaq7 = respostaq7[i].value;
        }
    }
    if(respostamarcadaq7==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    
    for(let i =0;i<respostaq8.length;i++)
    {
        if(respostaq8[i].checked)
        {
        respostamarcadaq8 = respostaq8[i].value;
        }
    }
    if(respostamarcadaq8==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    
    for(let i =0;i<respostaq9.length;i++)
    {
        if(respostaq9[i].checked)
        {
        respostamarcadaq9 = respostaq9[i].value;
        }
    }
    if(respostamarcadaq9==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

    for(let i =0;i<respostaq10.length;i++)
    {
        if(respostaq10[i].checked)
        {
        respostamarcadaq10 = respostaq10[i].value;
        }
    }
    if(respostamarcadaq10==="a")
    {
    correstas++;
    }
    else
    {
    erradas++;
    }

   
document.getElementById("acertos").innerHTML="voce acertou "+correstas+" questões";
document.getElementById("erros").innerHTML="voce errou "+erradas+" questões";
}