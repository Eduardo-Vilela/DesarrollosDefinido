import styled from "styled-components";


export const BoxPrincipal8 = styled.div`
 width: 100%;
 height: 100vh;
`

export const BoxSecundario8 =styled.div`
width: 80% ;
height: 100vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Boxhijo1 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 480px) { 
  flex-direction: column;
}
@media (max-width: 767px) { 
  flex-direction: column;
 }
`

export const Boxhijo2 = styled.div`
width: 100%;
`

export const SubBoxLogoMaps = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;

`
export const TituloMaps = styled.h1`
 font-size: 30px;
 font-family: "Poppins"
 font-weight: 300;
 color: #1D2142;

 @media (max-width: 480px) { 
  font-size:20px;
  margin: auto;
}
@media (max-width: 767px) { 
  font-size:20px;
  margin: auto;
 } 
 
`
export const SubTituloMaps = styled.p`
 font-size: 25px;
 padding: 20px;
 font-family: "Poppins"
 font-weight: 200;
 color: #B8B8B8;


 @media (max-width: 480px) { 
  font-size: 15px;
}
@media (max-width: 767px) { 
  font-size: 15px;
 }
 `

export const ImagenMaps = styled.img`
  padding: 20px;
  aling-items: center;
`