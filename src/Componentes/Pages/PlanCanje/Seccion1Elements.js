import styled from "styled-components";
import {Link} from 'react-router-dom'

export const BoxPrimario = styled.div`
width: 100%;
height: 120vh;
background: #E5E5E5;
`
export const BoxSecundario = styled.div`
width: 100%;
height: 40vh;
padding-top: 100px;
background-image:linear-gradient(90deg, rgba(29,33,66,1) 20%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 55%, rgba(29,33,66,1) 80%), 
url(https://res.cloudinary.com/grupo-delsud/image/upload/v1653581795/DESARROLLOSGRUPODELSUD/La-Campina-8-edit-2_adlkil.jpg);
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
height: 80vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
  width: 100%;
  height: 70vh;
}
@media (max-width: 767px) { 
  width: 100%;
  height: 70vh;
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
Width: 70%;
height: 60vh;
margin: auto;
background: white;
box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75);
-webkit-box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75);
-moz-box-shadow: 14px 17px 5px 0px rgba(217,217,217,0.75);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 480px) { 
  width: 100%;
  height: 70vh;
  padding-top: 20px;
}
@media (max-width: 767px) { 
  width: 100%;
  height: 70vh;
  padding-top: 20px;
 }

`
export const BoxTitulos = styled.div`
width: 50%;
height: auto;
padding-left: 200px;


@media (max-width: 480px) { 
    width:100%;
  }
  @media (max-width: 767px) { 
    width:100%;
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
    font-size: 40px;
  }
  @media (max-width: 767px) { 
    font-size: 40px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
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
    font-size: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:15px;
}
`
export const Box1 = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: center;
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
font-family: "Poppins", Sans-serif;
font-size: 35px;
font-weight: 600;
line-height: 1.5em;
@media (max-width: 480px) { 
  font-size: 20px;
}
@media (max-width: 767px) { 
  font-size: 20px;
 }
`
export const SubtituloCard = styled.p`
text-align: center;
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 20px;
font-weight: 200;
line-height: 1.5em;

@media (max-width: 480px) { 
  font-size: 20px;
}
@media (max-width: 767px) { 
  font-size: 20px;
 }
`
export const Columnas = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media (max-width: 480px) { 
  flex-direction: row;
  justify-content: space-around;
  margin:auto;
}
@media (max-width: 767px) { 
  flex-direction: row;
  justify-content: space-around;
  margin:auto;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1648823298/DESARROLLOSGRUPODELSUD/eljuncalLetras_xlttzf.svg);
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center center;
  }
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649692006/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas_qmldsg.svg);
  }
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649431167/DESARROLLOSGRUPODELSUD/lacampi%C3%B1a_hdxe5y.svg);
  }
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649637673/DESARROLLOSGRUPODELSUD/Groupaaa_vvoggh.svg);
  }
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1649626460/DESARROLLOSGRUPODELSUD/Group_184_j7j7rc.svg);
  } 
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
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
      background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1653595256/DESARROLLOSGRUPODELSUD/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_pwiaxc.png);
  }
  @media (max-width: 480px) { 
    width: 30%;
  }
  @media (max-width: 767px) { 
    width: 30%;
   }

`

export const T1 = styled.p`
color: #1D2142;
font-size: 20px;
font-family: Poppins;
font-weight: 400;

@media (max-width: 480px) { 
  font-size: 15px;
}
@media (max-width: 767px) { 
  font-size: 15px;
 }
`
export const S1 = styled.p`
color: #878080;
font-size: 17px;
font-family: Poppins;
font-weight: 400;
@media (max-width: 480px) { 
  font-size: 11px;
}
@media (max-width: 767px) { 
  font-size: 11px;
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