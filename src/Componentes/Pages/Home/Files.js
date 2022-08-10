import obtenerVideo from "../../obtenerVideo";

export default function cargarArchivos(){
    obtenerVideo('Group_201_c7pyuc_m4icki.jpg').then((url) => {
        const img = document.getElementById('frontvictorias');
        img.setAttribute('src', url );
    });
    obtenerVideo('facebook.png').then((url) => {
        const img = document.getElementById('iconface');
        img.setAttribute('src', url );
    });
    obtenerVideo('insta.svg').then((url) => {
        const img = document.getElementById('iconinsta');
        img.setAttribute('src', url );
    });
    obtenerVideo('wsp.svg').then((url) => {
        const img = document.getElementById('whatsapp');
        img.setAttribute('src', url );
    });
    
    obtenerVideo('Home/logovictorias.png').then((url) => {
        const img = document.getElementById('logovictorias');
        img.setAttribute('src', url );
    });
    obtenerVideo('Home/logocampina.png').then((url) => {
        const img = document.getElementById('logocampina');
        img.setAttribute('src', url );
    });
    obtenerVideo('Home/logolatitud.png').then((url) => {
        const img = document.getElementById('logolatitud');
        img.setAttribute('src', url );
    });
    obtenerVideo('Home/logoorianas.png').then((url) => {
        const img = document.getElementById('logoorianas');
        img.setAttribute('src', url );
    });
    obtenerVideo('Home/logojuncal.png').then((url) => {
        const img = document.getElementById('logojuncal');
        img.setAttribute('src', url );
    });
    obtenerVideo('Home/logoescondida.png').then((url) => {
        const img = document.getElementById('logoescondida');
        img.setAttribute('src', url );
    });


}