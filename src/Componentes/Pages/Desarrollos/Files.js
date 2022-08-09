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
    obtenerVideo('Portadas-01_sxqfl8_dsv6nf.jpg').then((url) => {
        const img = document.getElementById('frontjuncal');
        img.setAttribute('src', url );
    });
}





