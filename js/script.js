const img = document.getElementById("lamp")
var a = false


function cor(x){
    let i = img
    if(x == 1){
        if(a == false){
            i.innerHTML = "<img src=\'img/lampada.png\' id=\'l\'></img>"
            a = true
        }else{
            i.innerHTML = "<img src=\'img/lampadabranca.png\' id=\'l\'></img>"
            a = false
        }
    }else if(x == 2){
        i.innerHTML = "<img src=\'img/lampadavermelha.png\' id=\'l\'></img>"
    
    }else if(x == 3){
        i.innerHTML = "<img src=\'img/lampadaverde.png\' id=\'l\'></img>"
    }
    if(x == 4){
        i.innerHTML = "<img src=\'img/lampadaazul.png\' id=\'l\'></img>"
    }else if(x == 5){
        i.innerHTML = "<img src=\'img/lampadabranca.png\' id=\'l\'></img>"
    }
    else if(x == 6){
        i.innerHTML = "<img src=\'img/lampadaamarela.png\' id=\'l\'></img>"
    }
    else if(x == 7){
        i.innerHTML = "<img src=\'img/lampadalaranja.png\' id=\'l\'></img>"
    }
}