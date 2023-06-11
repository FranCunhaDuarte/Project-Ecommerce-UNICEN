
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
let printError=document.querySelector('.error-condition');
let table=[{
    'nombre':addName.value,
    'precio':addPrice.value,
    'condicion':addCondition.value
}];

let addForm = document.querySelector('.addTable--button').addEventListener('click', function() {
    let names = addName.value;
    let price = addPrice.value;
    let condition = addCondition.value;
    let conditionToLowerCase = condition.toLowerCase();
    if (conditionToLowerCase == "nuevo" || conditionToLowerCase == "usado") {
        printError.innerHTML = "";
        table = {
            'nombre': names,
            'precio': price,
            'condicion': conditionToLowerCase
        };
        let upgradeButton=document.querySelector('.addTable--button');
        upgradeButton.innerHTML="Editar";
        upgradeTable();
    } else if (conditionToLowerCase == "") {
        printError.innerHTML = "";
        printError.innerHTML = "Debe ingresar un valor para poder continuar.";
    } else {
        printError.innerHTML = "";
        printError.innerHTML = "El valor ingresado está mal escrito o no es válido.";
    }
});

function upgradeTable(){
    let nameTable=document.querySelector('.nameInTable');
    nameTable.innerHTML=table.nombre;
    let priceTable=document.querySelector('.priceInTable');
    priceTable.innerHTML=table.precio;
    let conditionTable=document.querySelector('.conditionInTable');
    conditionTable.innerHTML=table.condicion;
}

let addRow=document.querySelector('.addRow').addEventListener('click',function(){
    let table=document.querySelector('.table');
    let row=document.createElement('tr');
    let inputName=document.querySelector('.name-input-addTable');
    let inputAtribute=document.querySelector('.atribute-input-addTable');
    
    let leftColumn=document.createElement('td');
    leftColumn.textContent="ASDS";
    row.appendChild(leftColumn);
    let rightColumn=document.createElement('td');
    rightColumn.textContent="ASDS";
    row.appendChild(rightColumn);
    table.appendChild(row);
});

let delRow = document.querySelector('.delRow').addEventListener('click', function() {
    let table = document.querySelector('.table');
    let rows = table.getElementsByTagName('tr');
        table.removeChild(rows[rows.length - 1]);
});