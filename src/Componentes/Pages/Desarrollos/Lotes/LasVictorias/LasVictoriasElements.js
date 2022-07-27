import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'
 


export const BoxHomeVictorias = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658849706/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Banner_-_Victorias_-_header_yetryl.jpg);
background-position: center !important;
`
export const BoxHomeJuncal = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658937024/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_-_Portada_Desa_2_hxff2w.jpg);
background-position: top right;
`

export const BoxHomeLatitud34 = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%),url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658430280/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Latitud_4_rnhsnz.jpg);
background-position: center;
`
export const BoxHomeLaescondida = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-size: cover;
background-position: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658860781/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Banner_-_La_Escondida_cojioo.jpg);
`
export const BoxHomeLacampiña = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%),url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658755728/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/9_xjwrmo.jpg);
background-position: center;
`

export const BoxHomeLasorianas = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-position: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%),url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658927201/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Orianas_-_Banner_pynel6.jpg);
`
export const BoxTitulo2 = styled.div`
width: 50%;
height: 70vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 480px) { 
  display: none;
}
@media (max-width: 767px) { 
  display: none;
}
`
export const BoxTitulo = styled.div`
width: 80%;
height: 70vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  @media (max-width: 767px) { 
    width: 90%;
    height: auto;
    align-items: center;
  }

`

export const BoxTituloJuncal = styled.div`
  width: 102%;
  height: 30%;
`

export const LetrasLasVictorias = styled.img`
width: 400px;
filter: drop-shadow(rgba(0, 0, 0, 0.7) 4px 2px 2px);

  @media (max-width: 767px) { 
    width: 50%;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  width: 300px;
}
`

/*secion2*/

export const Box2 = styled.div`
width: 100%;
height: 100vh;


@media (max-width: 480px) { 
  height: auto;
}
@media (max-width: 767px) { 
  height: auto;
 }
`

export const SubBox = styled.div`
width: 90%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

  @media (max-width: 767px) { 
    height: auto;
    flex-direction: column;
    padding: 40px 0px 20px 0px;
  }

`
export const AjusteBox = styled.div`
 width: 80%;
 height: 55vh;
 display: flex;
 flex-direction: column;
 justify-content: space-around;

 @media (max-width: 480px) { 
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: 100%;
  }
`

export const Titulo = styled.h1`
font-size: 50px;
font-family: "Poppins";
color: #1D2142;
font-weight: 600;
line-height: 1.3em;

  @media (max-width: 767px) { 
    font-size: 26px;
    line-height: 1.3em;
  }
  @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 30px;
}

`
export const Parrafo = styled.p`
 color: #646464;
 font-family: "Poppins", Sans-serif;
 font-size: 22px;
 font-weight: 300;

  @media (max-width: 767px) { 
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 16px;
}

`
export const Button1 = styled.button`
font-family: 'Mabry Pro', Sans-serif;
font-size: 20px;
font-weight: 300;
line-height: 1em;
letter-spacing: 0.2px;
fill: #FFFFFF;
color: #FFFFFF;
background-color: #82AB1B;
border-style: solid;
border-width: 2px ;
border-color: #FFFFFF;
border-radius: 30px ;
padding: 12px 20px 13px 20px;
cursor: pointer;

@media (max-width: 767px) { 
  font-size: 16px;
  font-weight: 400 !important;
}

@media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 16px;
}
`
export const Imagen1 = styled.img`
width: 70%;
height: 70%;
border-radius: 10px;
object-fit:cover;

  @media (max-width: 767px) { 
    width: 100%;
    height: 250px;
  }

`
export const Imagenslide = styled.img`
  width: 95% !important;
  height: 564px !important;
  object-fit: cover;

  border-radius: 10px;

  @media (max-width: 480px) { 
    width: 95% !important;
    height: 300px !important;
  }
  @media (max-width: 767px) { 
    width: 95% !important;
    height: 300px !important;
  }
  @media (max-width: 1700px) { 
    width: 100%;
    height: 453px;
  }
`
export const Video1 = styled.video`
  height: 100%;
  border-radius: 10px !important;
  object-fit: contain;

@media (max-width: 480px) { 
   width: 100%;
   height: auto;
  }
  @media (max-width: 767px) { 
   width: 100%;
   height: auto;
  }

`
export const Separador = styled.div`
margin-bottom: 20px;
`

/*SECCION3*/

export const Box3 = styled.div`
width: 100%;
height: 80px;
display: flex;
flex-direction: row;
justify-content: center;
position: relative;

@media (max-width: 480px) { 
  display:none;
}
@media (max-width: 767px) { 
  display:none;
 }

`



/* seccion 4 */
export const SubBox2 = styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
  flex-direction: column-reverse;
  justify-content: center;
  height:100%;
}
@media (max-width: 767px) { 
  flex-direction: column-reverse;
  justify-content: center;
  height:100%;
 }
`

export const BoxMaps = styled.div`
width: 45%;
height: 107vh;
margin-top: -60px;
background-attachment: fixed;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658850743/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_-_Servicios_-_Horizontal_emcryy.jpg);
background-size: cover;
background-position-x: -550px;

@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
  margin-top: -50px;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
 }

`
export const BoxMaps1Latitud = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715438/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Latitud_pup3rf_rfxez1.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;

@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }

`

export const BoxMaps2Latitud = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658845127/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Latitud___Servicios_ezfy1l.jpg);
background-attachment: fixed;
background-size: 45%;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }
`
export const BoxMaps3Latitud = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715455/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/businessman-handshaking-businesswoman-showing-respect-closeup-view-of-hands-shaking-1_yteozo_wovrrk.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }
`
export const BoxMaps1Victorias = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715437/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Las_Victorias_landing-05_1_dpjkk9_ia6okn.webp); */
background-attachment: fixed;
background-repeat: no-repeat;
background-size: contain;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }
`

export const BoxMaps2Victorias = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658844216/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Las_Victorias___Servicios_ucozc5.jpg);
background-attachment: fixed;
background-size: 45%;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }
`

export const BoxMaps3Victorias = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715448/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng_ck6w5r.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
    background-size: cover;
 }
`

export const BoxMaps1Laescondida = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715431/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/444-948x1024_wefged_lcetzb.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;

@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`
export const BoxMaps2Laescondida = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658845700/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Escondida_-_servicios_qzqagt.jpg);
background-attachment: fixed;
background-size:45%;
background-repeat: no-repeat;

@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`
export const BoxMaps3Laescondida = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715462/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/businesspeople-shaking-hands_1_umpbig_xrthbu.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;


@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`
export const BoxMaps1Eljuncal = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715431/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Juncal_gtamen_f5z7j8.webp); */
background-attachment: fixed;
background-repeat: no-repeat;
background-size: contain;

@media (max-width: 480px) { 
  background-attachment: inherit;
  width: 100%;
  height:50vh;
      background-size: cover;
}
@media (max-width: 767px) { 
  background-attachment: inherit;
  width: 100%;
  height:50vh;
      background-size: cover;
 }
`
export const BoxMaps2Eljuncal = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658849230/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_-_Servicios_-_Horizontal_cvmnza.jpg);
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-position-x: -650px;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
        background-position-x: -100px;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
        background-position-x: -100px;
 }
`
export const BoxMaps3Eljuncal = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715448/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng_ck6w5r.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`

export const BoxMaps1Lacampiña = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715443/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/La_Campi%C3%B1a_unmfp3_ovpquc.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`

export const BoxMaps2Lacampiña = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658847470/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/Campi%C3%B1a_-_Servicios_-_Horizontal_duayxa.jpg);
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
background-position-x: -270px ;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
        background-position-x: -35px ;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
        background-position-x: -35px ;
 }
`
export const BoxMaps3Lacampiña = styled.div`
width: 45%;
height:100vh;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715477/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_1_tzem1u_bquphb.webp); */
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
        background-size: cover;
 }
`

export const BoxUbicacion = styled.div`
width: 55%;
height:100vh;
margin: auto;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;

@media (max-width: 767px) { 
  width: 100%;
  height: auto;
  z-index: 99;
  padding: 50px 0px;
 }

 @media (min-width: 768px) and (max-width: 1700px) { 
  padding: 0;
}
`

export const SubBoxUbicacion = styled.div`
width: 65%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
row-gap: 40px;

@media (max-width: 767px) {
  width : 82%;
  row-gap: 20px;
 }
 @media (max-width: 1700px) {
  row-gap: 0px;
 }
`

export const Numero1 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
color: #ADADAD;

@media (max-width: 480px) { 
  font-size: 30px;
}
@media (max-width: 767px) { 
  font-size: 30px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:35px;
}
`
export const Numero2 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
color: #ADADAD;
@media (max-width: 480px) { 
  font-size: 30px;
}
@media (max-width: 767px) { 
  font-size: 30px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:45px;
  padding: 0;
}
`
export const Numero3 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
line-height: 50px;
color: #ADADAD;

@media (max-width: 480px) { 
  font-size: 30px;
  line-height: 50px;
}
@media (max-width: 767px) { 
  font-size: 30px;
  line-height: 50px;

 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 45px;
  padding: 0;
}
`
export const Numero4 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
color: #ADADAD;
@media (max-width: 480px) { 
  font-size: 30px;
}
@media (max-width: 767px) { 
  font-size: 30px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 45px;
  padding: 0;
}
`
export const TituloDerecha = styled.h3`
color: #1D2142;
font-family: "Raleway", Sans-serif;
font-size: 35px;
font-weight: 600;
line-height: 1.3em;

@media (max-width: 480px) { 
  font-size: 19px;
}
@media (max-width: 767px) { 
  font-size: 19px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:19px;
}
`

export const ParrafoDerecha = styled.p`
text-align: left;
font-family: "Poppins", Sans-serif;
font-size: 22px;
font-weight: 300;
line-height: 1.25em;

@media (max-width: 767px) { 
  font-size: 16px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 16px;
}
`
export const SubtituloDerecha = styled.h4`
color: #1D2142;
font-family: "Raleway", Sans-serif;
font-size: 23px;
font-weight: 600;

@media (max-width: 480px) { 
  font-size: 16px;
}
@media (max-width: 767px) { 
  font-size: 16px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:18px;
}
`

export const ItemListaDerecha = styled.li`
width: 100%;
padding: 10px 0px 10px 0px;
color: grey;
font-family: "Poppins", Sans-serif;
font-size: 22px;
font-weight: 300;
line-height: 1em;

@media (max-width: 767px) { 
  font-size: 16px;
}
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 16px;
  margin: 0px;
  padding: 5px;
}
`

/*SECCION 5 */

export const BoxTarjeton = styled.div`

width: 75%;
height: 90px;
border: 1px solid #E5E5E5;
border-radius: 10px;
box-shadow: 2px 2px 5px rgb(0 0 0 / 18%);
align-items: center;
display: flex;
flex-direction: row;
justify-content: inherit;

@media (max-width: 480px) { 
  width: 100%;
}
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:14px;
  height: 50px;
}
`
export const NumerosAzules = styled.p`
text-align: center;
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 35px;
font-weight: 600;
margin: 0px;

@media (max-width: 480px) { 
  font-size: 18px;
}
@media (max-width: 767px) { 
  font-size: 18px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:14px;
}
`

export const TextoGris = styled.p`
font-family: "Raleway", Sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 1em;
color: grey;
margin: 0px;

@media (min-width: 768px) and (max-width: 1700px) { 
  font-size:14px;
}
`
export const Imagen2 = styled.img`
background-attachment: fixed;
`

/*seccion 6*/

export const ItemListaDerecha3 = styled.li`
width: 100%;
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 20px;
font-weight: 300;
line-height: 1.2em;
border-bottom: 1px solid #6464643B;
padding: 20px 0px;



@media (max-width: 767px) { 
  font-size: 11px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:14px;
  padding-top: 17px;
}
`

/*seccion7*/

export const ButtonArmaTuPago = styled(Link)`

  font-family: "Mabry Pro", Sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1em;
  letter-spacing: 0.2px;
  fill: #FFFFFF;
  color: #FFFFFF !important;
  background-color: #82AB1B;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #FFFFFF;
  border-radius: 30px 30px 30px 30px;
  padding: 12px 20px 13px 20px;


@media (max-width: 480px) { 
  font-size: 15px;
}
@media (max-width: 767px) { 
  font-size: 15px;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size:14px;
}
`

/*seccion 8 */

export const SubBoxSiper = styled.div`
width: 100%;
height: 90vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
  width: 100%;
height:60vh;
}
@media (max-width: 767px) { 
  width: 100%;
height: 60vh;
 }
`
export const BoxAlto = styled.div`
width: 81%;
height: 30%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 40px;

@media (max-width: 480px) { 
  width: 80%;
height: 10vh;
}
@media (max-width: 767px) { 
  width: 80%;
height: 10vh;
 }
`
export const BoxBajo = styled.div`
width:100%;
height: 70%;

@media (max-width: 480px) { 
  width:100%;
height: 50vh;
}
@media (max-width: 767px) { 
  width:100%;
height: 50vh;
 }
`

/* el juncal */

export const VideoSlideJuncal = styled.video`
  width: 1000px;
  border-radius: 10px;
@media (max-width: 768px) { 
  width: 95%;
  height: 300px !important;
  object-fit: cover;
}
@media (max-width: 1700px) { 
    width: 95%;
    height: 564px;
    object-fit: cover;
}

`

export const NavItems = styled.div`
 outline: none;
 font-size: 16px;
 font-family: "Mabry Pro", Sans-serif;
 font-weight: 600;
 color: #E0E0E0;
 margin-right: 30px;
 text-decoration: none !important;
  .hover{
    &:hover{
      text-decoration: none !important;
      color: #1D2142 !important;
    }
  }

 @media (min-width: 768px) and (max-width: 1700px) { 
  font-size: 12px;
}
`
export const ContenedorSubNavbar = styled.div`
padding-top: .5em;
display:flex;
flex-direction: column;
justify-content: center;

`

export const ContenedorIframe = styled.div`
width: 100%;
height: 100%;
@media (max-width: 480px) { 
  
}
@media (max-width: 767px) { 
  
 }
`

export const ContenedorLista = styled.div`
width: 100%;
@media (max-width: 480px) { 
  width: 100%;
  
}
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1700px) { 
  width: 75%;
  padding-top: 30px;
}
`

export const PrincipalSwiper = styled(Swiper)`
.swiper-button-prev{
  left: 260px;
  right: auto;
  top: auto;
  bottom: 60px;
}

`
export const OcultarBorderIframe = styled.div`
width: 100%;
display: flex;
flex-direction: row;
background-color: white;
`

export const SwiperFotosDesarrollos = styled(Swiper)`
align-self: center;

@media (max-width: 767px) { 
  width: 100%;
  height: 100%;
 }

   .swiper-slide{
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
`

export const BoxVideoOrianas = styled.video`
position: absolute;
z-index: -1;
top: 0;
left: 0;
width: 100%;
height: 80vh;
object-fit:cover;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%);
@media (max-width: 480px) { 
  width: 100%,
}
@media (max-width: 767px) { 
  width: 100%
}

`
export const BoxVideoLaCampiña = styled.video`
position: absolute;
z-index: -1;
top: 0;
left: 0;
width: 100%;
height: 80vh;
object-fit:cover;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%);
@media (max-width: 480px) { 
  width: 100%,
}
@media (max-width: 767px) { 
  width: 100%
}
`