import styled from "styled-components";
import {Link} from 'react-router-dom'

export const BoxPrimario = styled.div`
width: 100%;
height: 1000px;
background: #E5E5E5;

@media (max-width: 767px) { 
      height: auto;
      margin-bottom: 40px;
   }
`
export const BoxSecundario = styled.div`
width: 100%;
height: 350px;
padding-top: 100px;
background-image:linear-gradient(90deg, rgba(29,33,66,1) 20%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 55%, rgba(29,33,66,1) 80%), 
url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715444/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/La_Campi%C3%B1a-8_edit_2_muqssy_cm38fd.webp);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-color: #02010100;
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-items: center;
@media (max-width: 480px) { 
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) { 
      height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
     
   }
`
export const BoxTerceario = styled.div`
width: 80%;
height: 650px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;


@media (max-width: 767px) { 
  width: 100%;
  height: auto;
 }

`
export const BoxAuto = styled.div`
width: 50%;
height: auto;

@media (max-width: 480px) { 
    width:100%;
  }
  @media (max-width: 767px) { 
    width:100%;
   }
`
export const BoxTarjetas = styled.div`
width: 70%;
height: 500px;
margin: auto;
background: white;
/* box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75);
-webkit-box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75);
-moz-box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75); */
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

@media (max-width: 767px) { 
  width: 100%;
  height: auto;
  padding-top: 20px;
  row-gap: 10px;
 }
 @media (min-width: 768px) and (max-width: 1400px) { 
  width: 80%;
}
`
export const BoxTitulos = styled.div`
width: 50%;
height: auto;
padding-left: 200px;


@media (max-width: 480px) { 
    width:66%;
    padding: 0;
  }
  @media (max-width: 767px) { 
    width:66%;
    padding: 0;
   }
`
export const FotoAuto = styled.img`
width: 50%;
@media (max-width: 480px) { 
   width: 70%;
  }
  @media (max-width: 767px) { 
   width: 70%;
   }
`
export const TituloPlan = styled.p`
text-align: left;
color: #FFFFFF;
font-family: "Poppins", Sans-serif;
font-size: 60px;
font-weight: 600;
line-height: 1.5em;

@media (max-width: 480px) { 
    font-size: 30px;
  }
  @media (max-width: 767px) { 
    font-size: 30px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
  font-size:40px;
}
`
export const SubtituloPlanCanje = styled.p`
color: #FFFFFF;
font-family: "Poppins", Sans-serif;
font-size: 20px;
font-weight: 300;
line-height: 1.3em;
text-align: left;

@media (max-width: 480px) { 
  font-size: 13px;
    text-align: center;
  }
  @media (max-width: 767px) { 
    font-size: 13px;
    text-align: center;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
  font-size:15px;
}
`
export const Box1 = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
export const Box2 = styled.div`
width: 100%;
`
export const BoxTarjetas1 = styled.div`
width: 100%;
height: 50vh;
background: red;
`
export const TituloCard = styled.h2`
text-align: center;
color: #1D2142;
font-family: "Poppins";
font-size: 35px;
font-weight: 600;
line-height: 1.5em;
@media (max-width: 480px) { 
  font-size: 20px;
}
@media (max-width: 767px) { 
  font-size: 20px;
 }  
  @media (min-width: 768px) and (max-width: 1400px) { 
  font-size: 25px;
}
`
export const SubtituloCard = styled.p`
text-align: center;
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 20px;
font-weight: 200;
line-height: 1.5em;

@media (max-width: 767px) { 
  font-size: 17px;
 }
`
export const Columnas = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

@media (max-width: 767px) { 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
 }
`

export const CardLote = styled.div`
width: 25%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
background: white;
text-align: center;
border-radius: 10px;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
      background-color: #1D2142 !important;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715487/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/eljuncalLetras_xlttzf_kp4bnu.webp);
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
  }
 
  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`

export const CardLote1 = styled.div`
width: 25%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
background: white;
text-align: center;
border-radius: 10px;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
      background-color: #1D2142;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_184_j7j7rc_fkyrds.webp);
  }

  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`
export const CardLote2 = styled.div`
width: 25%;
height: 120px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border-radius: 10px;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
    background-repeat: no-repeat;
    background-color: #1D2142;
    background-size: 60%;
    background-position: center center;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715436/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a_hdxe5y_qzvlhe.webp);
  }

  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`
export const CardLote3 = styled.div`
width: 25%;
height: 120px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border-radius: 10px;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
      background-color: #1D2142;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715498/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Groupaaa_vvoggh_mhkmve.webp);
  }
 
  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`
export const CardLote4 = styled.div`
width: 25%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
background: white;
border-radius: 10px;
text-align: center;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
      background-color: #1D2142;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658781051/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/melchore-romero-las-orianas_fyusq7.svg)
  } 
  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`
export const CardLote5 = styled.div`
width: 25%;
height: 120px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border-radius: 10px;
box-shadow: 2px 2px 5px #b9b3b3;
cursor: pointer;
  &:hover{
      background-color: #1D2142;
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
      background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657735373/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_mkcffm.webp);
  }

  @media (max-width: 767px) { 
    width: 60%;
    height: 80px;
   }
   @media (min-width: 768px) and (max-width: 1281px) { 
    height: 100px;
}
`

export const T1 = styled.p`
color: #1D2142;
font-size: 20px;
font-family: Poppins;
font-weight: 400;


@media (max-width: 767px) { 
  font-size: 15px;
  margin: 0px;
 }
 @media (min-width: 768px) and (max-width: 1281px) { 
  font-size:16px;
}
`
export const S1 = styled.p`
color: #878080;
font-size: 17px;
font-family: Poppins;
font-weight: 400;

@media (max-width: 767px) { 
  font-size: 11px;
  margin: 0px;
 }

 @media (min-width: 768px) and (max-width: 1281px) { 
  font-size: 14px;
}
`

export const LinkPlan  = styled(Link)`

${CardLote}:hover & {
 opacity: 0;
}
${CardLote1}:hover & {
  opacity: 0;
 }
 
${CardLote2}:hover & {
  opacity: 0;
 }
 ${CardLote3}:hover & {
  opacity: 0;
 }
 ${CardLote4}:hover & {
  opacity: 0;
 }
 ${CardLote5}:hover & {
  opacity: 0;
 }

`