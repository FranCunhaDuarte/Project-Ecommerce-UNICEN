
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

let addName=document.querySelector('#name');
let addPrice=document.querySelector('#price');
let addCondition=document.querySelector('#condition');
let addImage=document.querySelector('#file');
let printError=document.querySelector('.error-condition');
let imagesRandom=[
    "../img/pc-gamer.webp","../img/shirts.jpg","../img/shoes.jpg","../img/shorts.png","../img/hats.png"
]
let producttable=[{
    'imagen': imagesRandom[0],
    'nombre': "Computadora Gamer Pro",
    'precio': 2000,
    'condicion': "nuevo"
}];
printTable();

let buttonNewTable=document.querySelector('.addTable--button');
buttonNewTable.addEventListener('click',addNewTable);
function addNewTable(){
    let randomNumber=Math.floor(Math.random()*imagesRandom.length);
    let printError=document.querySelector('.error-condition');
    let names = addName.value;
    let price = addPrice.value;
    let condition = addCondition.value;
    let image=addImage;
    let conditionToLowerCase = condition.toLowerCase();
    let prube=false;
    if (conditionToLowerCase == "nuevo" || conditionToLowerCase == "usado") {
        printError.innerHTML = "";
        prube=true;
    } else if (conditionToLowerCase == "") {
        printError.innerHTML = "";
        printError.innerHTML = "Debe ingresar un valor para poder continuar.";
    } else {
        printError.innerHTML = "";
        printError.innerHTML = "El valor ingresado está mal escrito o no es válido.";
    }
    if(prube){
        newTable = {
            'imagen':imagesRandom[randomNumber],
            'nombre': names,
            'precio': price,
            'condicion': conditionToLowerCase,
        };
        producttable.push(newTable);
        let upgradeButton=document.querySelector('.addTable--button');
        upgradeButton.innerHTML="Nueva Tabla";
        printTable();
    }
}


function printTable(){
    let table=document.querySelector('.table');
    table.innerHTML="";
    for(let atributo of producttable){
        let nombre=atributo.nombre;
        let precio=atributo.precio;
        let condicion=atributo.condicion;
        let image=atributo.imagen;
        table.innerHTML +=
            `<tr>
                <td class="img-container"><img src=${image}></td>
            </tr>
            <tr>
                <td>${nombre}</td>
            </tr>
            <tr>
                <td>$ ${precio}</td>
            </tr>
            <tr>
                <td class="space-table">${condicion}</td>
            </tr>`;              
    }
}
let tableEmpty=document.querySelector('.emptyTable--button').addEventListener('click',function(){
    producttable=[];
    printTable();
});

let delLastItemButton=document.querySelector('.deletLastItemTable--button').addEventListener('click',function(){
    producttable.pop();
    printTable();
});
let addTablex3Button=document.querySelector('.addTablex3--button').addEventListener('click',function(){
    for(let i=0;i<3;i++){
        addNewTable();
    }
});