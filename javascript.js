/*function especialidad(){
    let turno = prompt("ingrese especialidad: "); 
    let fecha = prompt("ingrese fecha: ");
    let hora = prompt("ingrese hora: ");
    if(turno == "ginecologo" ){
        console.log("su reserva es:\n "+ turno + "\n "+"el dia: " + fecha +"a las: " + " \n" + hora+"hs");
    }else if(turno!= "ginecologo"){
        alert("no tenemos esa especialidad");
    }
    if(turno == "clinico"){
        console.log("su reserva es:\n "+ turno +"\n "+ fecha+ "\n " + hora)
    }else if(turno!= "clinico"){
        alert("no tenemos esa especialidad");
    }
    if(turno == "psiquiatra"){
        console.log("su reserva es:\n "  + turno + "\n" + fecha + "\n " + hora)
    }else if(turno!= "psiquiatra"){
        alert("no tenemos esa especialidad");
    }else{
        prompt("continue con su solicitud");
    }
   return turno,fecha,hora;

    
}
especialidad();*/

function clinica(){
    let turno = prompt("ingrese especialidad: ");
if(turno=="ginecologia"||turno=="clinico"||turno=="psiquitria"){
    let fecha = prompt("ingrese fecha del turno: ");
    let hora = prompt("ingrese la hora de su turno: ");
    alert("su reserva es:\n "+ turno + "\n "+"el dia: " + fecha +"a las: " + " \n" + hora + " hs");
}else{
    alert("disculpe no disponemos de esa especialidad");
}

}
clinica();


