function getData() {
    var name =(<HTMLInputElement> document.getElementById("nombre")).value;
    var age = (<HTMLInputElement>document.getElementById("edad")).value;

    
    //document.body.removeChild(document.getElementById("aviso"));
    if (name == "") {
        document.getElementById("name").focus;
       
    }

    if (age == "") {
        document.getElementById("age").focus;
    }

    console.log(name + " " + age);
}