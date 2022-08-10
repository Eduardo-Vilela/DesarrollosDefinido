import obtenerVideo from "../../../../obtenerVideo";

export default function cargarArchivos(){
    obtenerVideo('Desarrollos/juncal/letraseljuncal.svg').then((url) => {
        const img = document.getElementById('imagenInicioLasVictorias');
        img.setAttribute('src', url );
    });
    obtenerVideo('SlideElJuncal/El-Juncal-Landing22222_siy7dg.mp4').then((url) => {
        const img = document.getElementById('eljuncallanding');
        img.setAttribute('src', url );
    });
    obtenerVideo('Juncal_gtamen_f5z7j8.jpg').then((url) => {
        const img = document.getElementById('fotoPlano');
        img.setAttribute('src', url );
    });
    obtenerVideo('Latitud_34_2_1_os8k4l_kac4hg.jpg').then((url) => {
        const img = document.getElementById('fotoCamion');
        img.setAttribute('src', url );
    });
    obtenerVideo('destello-1-1-1_xrlv3z.svg').then((url) => {
        const img = document.getElementById('destello');
        img.setAttribute('src', url );
    });
    obtenerVideo('difuminar-1-1_nd7w9v.svg').then((url) => {
        const img = document.getElementById('difumar');
        img.setAttribute('src', url );
    });
    obtenerVideo('road_1_qqkxci_e1cu4d.svg').then((url) => {
        const img = document.getElementById('road');
        img.setAttribute('src', url );
    });
    obtenerVideo('business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng_ck6w5r.jpg').then((url) => {
        const img = document.getElementById('fotoFormadepago');
        img.setAttribute('src', url );
    });
    obtenerVideo('SlideElJuncal/Juncal_-_1_-_jpg_oh50fu.jpg').then((url) => {
        const img = document.getElementById('Juncal1jpgzjuoiu');
        img.setAttribute('src', url );
    });
    // obtenerVideo('SlideElJuncal/').then((url) => {
    //     const img = document.getElementById('');
    //     img.setAttribute('src', url );
    // });
    // obtenerVideo('SlideElJuncal').then((url) => {
    //     const img = document.getElementById('');
    //     img.setAttribute('src', url );
    // });
    // obtenerVideo('SlideElJuncal').then((url) => {
    //     const img = document.getElementById('');
    //     img.setAttribute('src', url );
    // });
    // obtenerVideo('SlideElJuncal').then((url) => {
    //     const img = document.getElementById('');
    //     img.setAttribute('src', url );
    // });
}