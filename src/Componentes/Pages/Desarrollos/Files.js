import obtenerVideo from "../../obtenerVideo";

export default function cargarArchivos (){
    obtenerVideo('Group_201_c7pyuc_m4icki.jpg').then((url) => {
        const img = document.getElementById('frontvictorias');
        img.setAttribute('src', url );
    });
    obtenerVideo('SlideLasVictorias/Foto_para_Card_Las_Victorias_fd7sie.jpg').then((url) => {
        const img = document.getElementById('backvictorias');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/juncal/cardjuncalfrente.png').then((url) => {
        const img = document.getElementById('frontjuncal');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/juncal/cardjuncalback.jpg').then((url) => {
        const img = document.getElementById('backjuncal');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/latitud/cardlatitudfrente.png').then((url) => {
        const img = document.getElementById('frontlatitud');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/latitud/cardlatitudback.jpg').then((url) => {
        const img = document.getElementById('backlatitud');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/campiña/cardcampinafrente.png').then((url) => {
        const img = document.getElementById('frontcampina');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/campiña/cardcampinaback.jpg').then((url) => {
        const img = document.getElementById('backcampina');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/orianas/cardorianasfrente.png').then((url) => {
        const img = document.getElementById('frontorianas');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/orianas/cardorianasback.jpg').then((url) => {
        const img = document.getElementById('backorianas');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/escondida/cardescondidafrente.png').then((url) => {
        const img = document.getElementById('frontescondida');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/escondida/cardescondidaback.jpg').then((url) => {
        const img = document.getElementById('backescondida');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/catalinas/cardcatalinasfrente.png').then((url) => {
        const img = document.getElementById('frontcatalinas');
        img.setAttribute('src', url );
    });
    obtenerVideo('Desarrollos/catalinas/cardcatalinasback.jpg').then((url) => {
        const img = document.getElementById('backcatalinas');
        img.setAttribute('src', url );
    });
    
}





