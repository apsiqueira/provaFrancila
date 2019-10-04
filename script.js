/**
*Prova de web Fran
*@utor Ademir Pablo Siqueira Antonio
*/


var idade=0,renda=0;


function checarLiberacao(){
    
    var idade = parseInt(document.getElementById("idade").value);
    var renda = parseFloat(document.getElementById("renda").value);
    
    if( idade<18){
       document.getElementById("output").innerHTML = "Carão Jovem-Necessário autorização dos responsaveis";
       

       }
    else if(idade>=18 && idade<=30 && renda<=2000){
        
        document.getElementById("output").innerHTML = "Cartão red- Limeite:R$"+(renda/2);
    }
    else if(idade>18 && idade<=30 && renda>2000){
        
        document.getElementById("output").innerHTML = "Cartão Green- Limeite:R$"+renda;
    }
    else if(idade>30 && renda>2000){
        
        document.getElementById("output").innerHTML = "Cartão Blue- Limeite:R$"+renda*2;
    }
    
    
    
    
}