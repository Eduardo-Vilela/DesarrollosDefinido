import styled from 'styled-components'
import { Swiper } from 'swiper/react'
 


export const BoxHomeVictorias = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649692306/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_ku9jfc.jpg);
`
export const BoxHomeJuncal = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1648822621/DESARROLLOSGRUPODELSUD/DJI_0077_3_xewzsu.jpg);
`

export const BoxHomeLatitud34 = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649637068/DESARROLLOSGRUPODELSUD/Latitud_34_3_1_yomdy4.jpg);
`
export const BoxHomeLaescondida = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-size: cover;
background-position: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1651588572/DESARROLLOSGRUPODELSUD/la%20escondida/inicio2_pujbto.jpg);
`
export const BoxHomeLacampiña = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649431244/DESARROLLOSGRUPODELSUD/La_Campi%C3%B1a-8_edit_2_muqssy.jpg);
`

export const BoxHomeLasorianas = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: center;
background-position: center;
background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%), url(https://res.cloudinary.com/grupo-delsud/image/upload/v1654780213/DESARROLLOSGRUPODELSUD/slidelasorianas/portada-de-inicio-scaled_gysb5p.jpg);
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
width: 50%;
height: 70vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media (max-width: 480px) { 
    width: 90%;
    height: 50vh;
    margin: auto;
    align-items: baseline;
  }
  @media (max-width: 767px) { 
    width: 90%;
    height: 50vh;
    margin: auto;
    align-items: baseline;
  }

`

export const LetrasLasVictorias = styled.img`
width: 400px;


@media (max-width: 480px) { 
    width: 50%;
    height: auto;
    margin-left: 37px;
  }
  @media (max-width: 767px) { 
    width: 50%;
    height: auto;
    margin-left: 37px;
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
width: 80%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
    flex-direction: column;
    padding: 40px 0px 20px 0px;
  }
  @media (max-width: 767px) { 
    flex-direction: column;
    padding: 40px 0px 20px 0px;
  }

`
export const AjusteBox = styled.div`
 width: 80%;
 height: 100vh;
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

@media (max-width: 480px) { 
    font-size: 20px;
    line-height: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 20px;
    line-height: 15px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 32px;
}

`
export const Parrafo = styled.p`
 color: #646464;
 font-family: "Poppins", Sans-serif;
 font-size: 22px;
 font-weight: 200;

 @media (max-width: 480px) { 
    font-size: 12px;
  }
  @media (max-width: 767px) { 
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 16px;
}

`
export const Button1 = styled.button`
font-family: "Mabry Pro", Sans-serif;
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


@media (max-width: 480px) { 
    font-size: 12px;
  }
  @media (max-width: 767px) { 
    font-size: 12px;
  }


`
export const Imagen1 = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;

`
export const Imagenslide = styled.img`
width: 95%;
height: 100%;
border-radius: 10px;

@media (max-width: 480px) { 
  width: 85%;
  height: 70%;
 }
 @media (max-width: 767px) { 
  width: 85%;
  height: 70%;
 }
`
export const Video1 = styled.video`
width: 100%;
height: 100%;
border-radius: 10px !important;


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
margin-bottom: 2px;
`

/*SECCION3*/

export const Box3 = styled.div`
width: 100%;
height: 5vh;
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
height:100vh;
background-attachment: fixed;

@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
 }

`
export const BoxMaps1Latitud = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649637002/DESARROLLOSGRUPODELSUD/Latitud_pup3rf.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }

`

export const BoxMaps2Latitud = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps3Latitud = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1654704292/DESARROLLOSGRUPODELSUD/businessman-handshaking-businesswoman-showing-respect-closeup-view-of-hands-shaking-1_yteozo.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps1Victorias = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627419/DESARROLLOSGRUPODELSUD/Las_Victorias_landing-05_1_dpjkk9.jpg);
background-attachment: fixed;
background-repeat: no-repeat;
background-size: contain;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxMaps2Victorias = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxMaps3Victorias = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627419/DESARROLLOSGRUPODELSUD/businesspeople-shaking-hands_1_umpbig.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxMaps1Laescondida = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/444-948x1024_wefged.png);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps2Laescondida = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps3Laescondida = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649075284/DESARROLLOSGRUPODELSUD/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps1Eljuncal = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649076431/DESARROLLOSGRUPODELSUD/Juncal_gtamen.jpg);
background-attachment: fixed;
background-repeat: no-repeat;
background-size: contain;

@media (max-width: 480px) { 
  background-attachment: inherit;
  width: 100%;
  height:50vh;
}
@media (max-width: 767px) { 
  background-attachment: inherit;
  width: 100%;
  height:50vh;
 }
`
export const BoxMaps2Eljuncal = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps3Eljuncal = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649075284/DESARROLLOSGRUPODELSUD/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxMaps1Lacampiña = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649432360/DESARROLLOSGRUPODELSUD/La_Campi%C3%B1a_unmfp3.svg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxMaps2Lacampiña = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649432434/DESARROLLOSGRUPODELSUD/lomas_04_b8zrms.jpg);
background-attachment: fixed;
background-repeat: no-repeat;
background-size: contain;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`
export const BoxMaps3Lacampiña = styled.div`
width: 45%;
height:100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649432527/DESARROLLOSGRUPODELSUD/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_1_tzem1u.jpg);
background-attachment: fixed;
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50vh;
    background-attachment: inherit;
 }
`

export const BoxUbicacion = styled.div`
width: 55%;
height:100vh;
margin: auto;
align-items: center;
display: flex;
justify-content: center;
padding-bottom: 50px;

@media (max-width: 480px) { 
  width: 100%;
  height:50%;
}
@media (max-width: 767px) { 
  width: 100%;
  height:50%;
 }
`

export const SubBoxUbicacion = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
`

export const Numero1 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
color: #ADADAD;
padding: 50px 0px;

@media (max-width: 480px) { 
  font-size: 30px;
  padding: 25px 0px;
}
@media (max-width: 767px) { 
  font-size: 30px;
  padding: 25px 0px;
 }
`
export const Numero2 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
padding: 50px 0px;
color: #ADADAD;
@media (max-width: 480px) { 
  font-size: 30px;
}
@media (max-width: 767px) { 
  font-size: 30px;
 }
`
export const Numero3 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
padding: 50px 0px;
color: #ADADAD;
@media (max-width: 480px) { 
  font-size: 30px;
  line-height: 0;
}
@media (max-width: 767px) { 
  font-size: 30px;
  line-height: 0;

 }
`
export const Numero4 = styled.h2`
font-family: 'Mabry Pro', Sans-serif;
font-size: 90px;
font-weight: 300;
padding: 50px 0px;
color: #ADADAD;
@media (max-width: 480px) { 
  font-size: 30px;
}
@media (max-width: 767px) { 
  font-size: 30px;
 }
`
export const TituloDerecha = styled.h3`
color: #1D2142;
font-family: "Raleway", Sans-serif;
font-size: 35px;
font-weight: 600;
line-height: 2em;

@media (max-width: 480px) { 
  font-size: 19px;
}
@media (max-width: 767px) { 
  font-size: 19px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:18px;
}
`

export const ParrafoDerecha = styled.p`
text-align: left;
font-family: "Poppins", Sans-serif;
font-size: 22px;
font-weight: 200;
line-height: 1.25em;

@media (max-width: 480px) { 
  font-size: 15px;
}
@media (max-width: 767px) { 
  font-size: 15px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:18px;
}
`
export const SubtituloDerecha = styled.h4`
color: #1D2142;
font-family: "Raleway", Sans-serif;
font-size: 23px;
font-weight: 600;
line-height: 4em;

@media (max-width: 480px) { 
  font-size: 16px;
}
@media (max-width: 767px) { 
  font-size: 16px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:18px;
}
`

export const ItemListaDerecha = styled.li`
width: 100%;
margin: 20px 0px 20px 0px;
color: grey;
font-family: "Poppins", Sans-serif;
font-size: 22px;
font-weight: 400;
line-height: 1em;

@media (max-width: 480px) { 
  font-size: 12px;
  margin: 10px 0px 10px 0px;
}
@media (max-width: 767px) { 
  font-size: 12px;
  margin: 10px 0px 10px 0px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:18px;
  margin: 10px 0px 10px 0px;
}
`

/*SECCION 5 */

export const BoxTarjeton = styled.div`

width: 50%;
height: 70px;
border: 1px solid #E5E5E5;
border-radius: 10px;
box-shadow: 2px 2px 5px rgb(0 0 0 / 18%);
align-items: center;
display: flex;
flex-diection: row;
justify-content: inherit;


@media (max-width: 480px) { 
  width: 100%;
}
@media (max-width: 767px) { 
  width: 100%;
 }
`
export const NumerosAzules = styled.p`
text-align: center;
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 35px;
font-weight: 600;

@media (max-width: 480px) { 
  font-size: 18px;
}
@media (max-width: 767px) { 
  font-size: 18px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:14px;
}
`

export const TextoGris = styled.p`
font-family: "Raleway", Sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 1em;
color: grey;
@media (min-width: 768px) and (max-width: 1199px) { 
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
font-weight: 400;
line-height: 4em;
border-bottom: 1px grey solid;
margin-top: 10px;


@media (max-width: 480px) { 
  font-size: 10px;
}
@media (max-width: 767px) { 
  font-size: 10px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:12px;
}
`

/*seccion7*/

export const ButtonArmaTuPago = styled.button`
font-family: "Mabry Pro", Sans-serif;
font-size: 25px;
font-weight: 300;
line-height: 1em;
letter-spacing: 0.2px;
fill: #FFFFFF;
color: #FFFFFF;
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
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:18px;
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
width: 80%;
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
  width: 95%;
object-fit: cover;
border-radius: 10px;
@media (max-width: 480px) { 
width: 90%;
eight: 100%;
}
@media (max-width: 767px) { 
  width:90%;
height: 100%;
}
@media (min-width: 768px) and (max-width: 1199px) { 
   width:90%;
height: 100%;
}

`

export const NavItems = styled.div`
 outline: none;
 font-size: 20px;
 font-family: "Mabry Pro", Sans-serif;
 font-weight: 600;
 color: #E0E0E0;
 margin-right: 30px;

 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 12px;
}
`
export const ContenedorSubNavbar = styled.div`
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
width: 70%;

@media (max-width: 480px) { 
  width: 100%;
}
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  width: 75%;
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
position: absolute;
top: 0;
bottom: -50px;
left: 0;
right: 0;
`