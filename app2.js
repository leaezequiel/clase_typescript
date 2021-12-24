function getData() {
    var name = document.getElementById("nombre").value;
    var age = document.getElementById("edad").value;
    //document.body.removeChild(document.getElementById("aviso"));
    if (name == "") {
        document.getElementById("name").focus;
    }
    if (age == "") {
        document.getElementById("age").focus;
    }
    console.log(name + " " + age);
}
