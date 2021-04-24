function convert(param1){
    var factor;
    f = document.getElementById('from').value
    t = document.getElementById('to').value

    if(f == t){
        factor = 1
    }
    else if(f == 'EUR' && t == 'USD'){
        factor = 1.06;
    }
    else if(f == 'USD' && t == 'EUR'){
        factor = 1/1.06;
    }

    if(param1 == "C"){
        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
    }
    if(param1 == "F"){
        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
    }

}``