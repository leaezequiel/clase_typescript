function getData() {
    var name =(<HTMLInputElement> document.getElementById("nombre")).value;
    var age = (<HTMLInputElement>document.getElementById("edad")).value;

    
    //document.body.removeChild(document.getElementById("aviso"));
    if (name == "") {
        document.getElementById("name").focus;
        let mensaje = document.createElement('h1');
        mensaje.textContent = "completa el nombre, por favor";
        mensaje.setAttribute("id", "aviso");

        document.body.appendChild(mensaje);
    }

    if (age == "") {
        document.getElementById("age").focus;
        let mensaje = document.createElement('h1');
        mensaje.textContent = "completa la edad, por favor";
        mensaje.setAttribute("id", "aviso");
        document.body.appendChild(mensaje);
    }

    console.log(name + " " + age);
}