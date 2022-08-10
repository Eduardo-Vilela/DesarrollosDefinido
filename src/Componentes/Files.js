import obtenerVideo from "./obtenerVideo"; 

export default function cargarArchivos(){
      obtenerVideo('Home/Logodesarrollos.png').then((url) => {
        const img = document.getElementById('logo-empresa');
        img.setAttribute('src', url );
      });
      obtenerVideo('qyyw1oxg7sy3szotvufi_clds2e.svg').then((url) => {
        const img = document.getElementById('flecha-footer');
        img.setAttribute('src', url );
      });
      obtenerVideo('logoNav_h8jfaz_ih4rfm.svg').then((url) => {
        const img = document.getElementById('logoNav');
        img.setAttribute('src', url );
      });
      obtenerVideo('logodesaazulwhite.png').then((url) => {
        const img = document.getElementById('logoNavWhite');
        img.setAttribute('src', url );
      });
      obtenerVideo('barras-de-menu-de-la-derecha_1_uah0sq.png').then((url) => {
        const img = document.getElementById('barramenu1');
        img.setAttribute('src', url );
      });
      obtenerVideo('barras-de-menu-de-la-derecha_2_mnqsoc.png').then((url) => {
        const img = document.getElementById('barramenu2');
        img.setAttribute('src', url );
      });
      obtenerVideo('Group_s8dqa5_cgbxhd.svg').then((url) => {
        const img = document.getElementById('offcanvasNavbarLabel');
        img.setAttribute('src', url );
      });
      obtenerVideo('logogrupo.svg').then((url) => {
        const img = document.getElementById('grupo-delsud');
        img.setAttribute('src', url );
      });
      obtenerVideo('iconowsp.png').then((url) => {
        const img = document.getElementById('iconowspchat');
        img.setAttribute('src', url );
      });
      obtenerVideo('icons8-whatsapp-24_qtmcnm.png').then((url) => {
        const img = document.getElementById('wspfooter');
        img.setAttribute('src', url );
      });
      obtenerVideo('facebook.png').then((url) => {
        const img = document.getElementById('facefooter');
        img.setAttribute('src', url );
      });
      obtenerVideo('icons8-instagram-32_gb7elk.png').then((url) => {
        const img = document.getElementById('instafooter');
        img.setAttribute('src', url );
      });

}
  