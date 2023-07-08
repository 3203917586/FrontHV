window.onload = function() {
   
    var video = document.getElementById("miVideo");
    var closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", function() {
        video.style.display = "none";
      });
    // Muestra el video
    video.style.display = "block";
    video.play();

    
    video.addEventListener("ended", function() {
      var overlay = document.getElementById("video-overlay");
      overlay.style.display = "none";
    });

  };
  

//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//ocultar nav

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//barras

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div)
    }
}

let html = document.getElementById("html");
crearBarra(html);   
let javascript = document.getElementById("javascript");
crearBarra(javascript);   
let php = document.getElementById("php");
crearBarra(php);   
let Java = document.getElementById("Java");
crearBarra(Java);   
let Angular = document.getElementById("Angular");
crearBarra(Angular);   
let React = document.getElementById("React");
crearBarra(React);   

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false; 

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalphp = setInterval(function(){
            pintarBarra(php, 1, 2, intervalphp);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(Java, 15, 3, intervalJava);
        },100);
        const intervalAngular = setInterval(function(){
            pintarBarra(Angular, 16, 4, intervalAngular);
        },100);
        const intervalReact = setInterval(function(){
            pintarBarra(React, 11, 5, intervalReact);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#e6e6e6";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
