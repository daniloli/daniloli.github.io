
var poltronas=[true,true,true,true,true,true,true];
var imagens =document.getElementsByTagName("img");
var x=1,y=0;;
function carregarPoltronas(){
    
    
    for(var i=0;i<imagens.length;i++){
        if(poltronas[i]){
            imagens[i].src = "img/closed.jpg";
            //alert(imagens[i].onclick)
        }else{
            imagens[i].src = "img/open.jpg";
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
                        alert("");
                        y++;
                        break;
                    case 1:
                        alert("");
                        y++;
                        break;
                    case 2:
                        alert("");
                        y++;
                        break;
                    case 3:
                        alert("");
                }
            }else{
                imagens[valor].src = "img/closed.jpg";
            }
            poltronas[valor]=false;
        }else{
            
            
            

        }
    }else{
        switch (x){
            case 1:
                alert("Você já abriu essa porta!");
                x++;
                break;
            case 2:
                alert("Essa porta parece aberta por acaso?");
                x++;
                break;
            case 3:
                alert("Sério?...");
                x++;
                break;
            case 4:
                alert("...");
                x++;
                break;
            case 20:
                alert("Parabéns cara você ganhou... feliz?");
        }
    }
}
function verificarPoltronas(){
    var quer =confirm("Tem certeza?");
    if (quer){
        carregarPoltronas();
    }
}