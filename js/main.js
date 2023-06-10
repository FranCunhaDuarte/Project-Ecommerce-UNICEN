
// C A P T C H A
let divcaptcha= document.querySelector(".captcha");
let mostrar= document.querySelector(".resultado");
let submit= document.querySelector("#submit-button");
let recargar = document.querySelector("#recargar");

if(submit && recargar){
    submit.addEventListener("click", comprobarCaptcha);  
    recargar.addEventListener("click", recargarCaptcha);
}

let Caracteres = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

function Captcha(){
    for (i=0;i<6;i++){
      let captcha = Caracteres[Math.floor(Math.random() * Caracteres.length)];
            divcaptcha.innerHTML += `${captcha}`;
     }
    }
// Captcha();

function recargarCaptcha(){
    divcaptcha.innerHTML = "";
    Captcha();
}

if(divcaptcha){
    recargarCaptcha();
}

function comprobarCaptcha(e){
    e.preventDefault();
    let valorDeCaptcha = document.querySelector(".ingreso_captcha").value;
    if(valorDeCaptcha==divcaptcha.innerText){
        mostrar.classList.add("correcto");
        mostrar.innerHTML = "Captcha correctamente"
        setTimeout(function(){
            submit.form.submit(); 
        },2000)
    }
    else{
        mostrar.innerHTML = "Captcha incorrecto, volver a ingresar";

    }
}

let barra_navegacion=document.querySelector(".nav-list");
let boton_ocultar=document.querySelector(".button-var");
boton_ocultar.addEventListener("click", ocultarBarra);

function ocultarBarra(){
    barra_navegacion.classList.toggle("hide-menu");
}


let addTable=document.querySelector(".addTable-container");
let hideTable=document.querySelector(".button-table");
hideTable.addEventListener("click", hideForm);

function hideForm(){
    addTable.classList.toggle("hide-table");
}

let addForm=document.querySelector('.addTable--button').addEventListener('click',function(){
    let addName=document.querySelector('#name').value;
    let addPrice=document.querySelector('#price').value;
    let printName=document.querySelector('.nameInTable');
    printName.innerHTML=addName;
    let printPrice=document.querySelector('.priceInTable');
    printPrice.innerHTML="$"+addPrice;
    let addCondition=document.querySelector('.condition-select--op');
    if(addCondition!="usado"||addCondition!="nuevo"){
        alert("nazi");
    }
    let formData = {
        "nombre": addName,
        "precio": addPrice,
        "estado": optionSelect
    };
});