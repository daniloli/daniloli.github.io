
var poltronas=[false,true,false,true,false,true,false,true,false];
var imagens =document.getElementsByTagName("img");
var x=1,y=0;
var flag=false;
var holder;
function carregarPoltronas(){
    
    
    for(var i=0;i<imagens.length;i++){
        if(poltronas[i]){
            imagens[i].src = "img/closed.jpg";
            //alert(imagens[i].onclick)
        }else{
            imagens[i].src = "";
        }
        
        
    }

}
var selecionado=true;
function selecionarPoltrona(valor){
    if(poltronas[valor]){    
        if (imagens[valor].src.match("img/closed.jpg")){
            
            
            document.getElementById(valor).src = "img/open.jpg";
            var quer =confirm("Tem certeza?");
            if (quer){
                switch(y){
                    case 0:
                        alert("Errou, porque o tesouro é você");
                        y++;
                        break;
                    case 1:
                        alert("Não tem nenhum tesouro atrás das portas... o tesouro é você!");
                        y++;
                        break;
                    case 2:
                        alert("Mas.. mas.. :c");
                        y++;
                        break;
                    case 3:
                        alert("Parabéns você achou o tesouro... :c");
                }

                poltronas[valor]=false;
            }else{
                imagens[valor].src = "img/closed.jpg";
            }
            
        }else{
            
            
            

        }
    }else{
        if(flag){
            if(imagens[valor].src.match("img/open.jpg")){
                if (x==7){
                
                    imagens[valor].src="img/voosh.jpeg";
                    holder=valor;
                }else{
                    imagens[valor].src="img/ole.jpeg";
                    imagens[holder].src="img/open.jpg";
                    holder=valor;
                }
                        
                    
                    //case 20:
                        //alert("Parabéns cara você ganhou... feliz?");
                
                x++;
                
                    

                    //imagens[valor-1].length="300px;";
                    //imagens[valor].src = "img/closed.jpg";
                 
            }else{
                alert("Cadê porta? Tem porta aqui não...");
            }
        }else{
            switch (x){
                case 1:
                    alert("Você já abriu essa porta!");
                    
                    break;
                case 2:
                    alert("Essa porta parece fechada por acaso?");
                    
                    break;
                case 3:
                    alert("Sério?...");
                    
                    break;
                case 4:
                    alert("...");
                    
                    break;
                case 5:
                    alert("Parou ne?...");
                    break;
                case 6:
                    alert("Ok... Vamos brincar entao");
                    flag=true;
                    break;
                //case 20:
                    //alert("Parabéns cara você ganhou... feliz?");
            }
            x++;
        }
    }
}
function verificarPoltronas(){
    var quer =confirm("Tem certeza?");
    if (quer){
        carregarPoltronas();
    }
}
