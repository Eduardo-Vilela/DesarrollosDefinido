import styled from "styled-components";


export const BoxPrincipal8 = styled.div`
 width: 100%;
 height: 100vh;

 @media (min-width: 768px) and (max-width: 1199px) { 
 height: 800px;
 }
`

export const BoxSecundario8 =styled.div`
width: 81% ;
height: 100vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;

@media (max-width: 480px) { 
  width: 88% ;
}
@media (max-width: 767px) { 
  width: 88% ;
 }
@media (min-width: 768px) and (max-width: 1199px) { 
 height: 800px;
 }
`
export const Boxhijo1 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
position: absolute;
top: 70px;

@media (max-width: 480px) { 
  flex-direction: column;
}
@media (max-width: 767px) { 
  flex-direction: column;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
 top: 150px;
 }
`

export const Boxhijo2 = styled.div`
width: 100%;
`

export const SubBoxLogoMaps = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;

 @media (max-width: 480px) { 
  justify-content: flex-start;
  align-items: center;
}
@media (max-width: 767px) { 
  justify-content: flex-start;
  align-items: center;
 }

`
export const TituloMaps = styled.h1`
 font-size: 40px;
 font-family: "Poppins";
 font-weight: 500;
 color: #1D2142;

 @media (max-width: 480px) { 
  font-size:24px;
  line-height: 20px;
}
@media (max-width: 767px) { 
  font-size:24px;
  line-height: 20px;
 } 
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 20px;
 }
 
`
export const SubTituloMaps = styled.p`
 font-size: 25px;
 padding: 20px;
 font-family: "Poppins";
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
  @media (max-width: 480px) { 
    width: 3%;
    padding:0;
  }
  @media (max-width: 767px) { 
    width: 3%;
    padding:0;
   }
`