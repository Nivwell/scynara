/* ==========================
   DESPLAZAMIENTO SUAVE
========================== */

document.querySelectorAll('nav a').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ==========================
   RESALTAR SECCIÓN ACTIVA
========================== */

const secciones = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let seccionActual = "";

    secciones.forEach(seccion => {

        const top = window.scrollY;
        const offset = seccion.offsetTop - 150;
        const altura = seccion.offsetHeight;

        if(top >= offset && top < offset + altura){
            seccionActual = seccion.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("activo");

        if(link.getAttribute("href") === "#" + seccionActual){
            link.classList.add("activo");
        }

    });

});


/* ==========================
   MENSAJE AL ABRIR LA APP
========================== */

function abrirAplicacion(){

    alert("Estás siendo redirigido a la aplicación web de Scynara.");

}


/* ==========================
   AÑO AUTOMÁTICO EN FOOTER
========================== */

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}