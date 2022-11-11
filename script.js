var btnGreet = document.getElementById("btnSaludo")
var txtName = document.getElementById("txtNombre")
var txtGreet = document.getElementById("txtSaludo")

var lista = [
    "hello",
    "bonjour",
    "hallo",
    "ciao",
    "olá",
    "namaste",
    "aloha",
    "konichiwa",
    "merhaba",
    "que mas"
]
function saludar(){
    if (txtName.value == ""){
        alert("error, ingresa un nombre.")
        txtGreet.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()*lista.length)
        var saludo = lista[numero] + ", " + nombre
        txtGreet.innerHTML = saludo
    }
}