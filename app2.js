function getData() {
    var name = document.getElementById("nombre").value;
    var age = document.getElementById("edad").value;
    //CREE UNA VARIABLE BOOLEANA QUE FUNCIONA COMO "SEGURO", SE ACTIVA CUANDO YA HAY UN H1 
    var puedeEscribir=true;
    
    try {
        // código...
        if (document.body.children.namedItem("aviso") != null)
            document.body.removeChild(document.getElementById("aviso"));
            //DESACTIVAMOS EL SEGURO COMO AL PRINCIPIO
            var puedeEscribir=true;
    }
    catch (err) {
        // manipulación de error
        console.log("no hubo error anteriormente");
    }

    //document.body.removeChild(document.getElementById("aviso"));
    //LA VARIABLE SEGURO SE ACTIVA 
    if (name == "" && puedeEscribir == true ) {
        document.getElementById("nombre").focus;
        var mensaje = document.createElement('h1');
        mensaje.textContent = "completa el nombre, por favor";
        puedeEscribir= false;
        mensaje.setAttribute("id", "aviso");
        document.body.appendChild(mensaje);
    }

    //LA VARIABLE SEGURO SE ACTIVA 
    if (age == "" && puedeEscribir == true) {
        document.getElementById("edad").focus;
        var mensaje = document.createElement('h1');
        mensaje.textContent = "completa la edad, por favor";
        puedeEscribir= false;
        mensaje.setAttribute("id", "aviso");
        document.body.appendChild(mensaje);
    }
    console.log(name + " " + age + " ");
}
