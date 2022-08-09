import obtenerVideo from "../../obtenerVideo";

export default function cargarArchivos(){
    obtenerVideo('Group_201_c7pyuc_m4icki.jpg').then((url) => {
        const img = document.getElementById('frontvictorias');
        img.setAttribute('src', url );
    });
}