import styled from "styled-components";


export const BoxPrincipal8 = styled.div`
 width: 100%;

 @media (max-width: 767px) { 
  padding: 25px 0px;
 }
`

export const BoxSecundario8 =styled.div`
width: 81% ;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
  width: 88% ;
}
@media (max-width: 767px) { 
  width: 88% ;
 }

`
export const Boxhijo1 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
z-index: 3;

@media (max-width: 480px) { 
  flex-direction: column;
}
@media (max-width: 767px) { 
  flex-direction: column;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
 top: 150px;
 align-items: center;

 }
`

export const Boxhijo2 = styled.div`
  margin-top: -60px;
  width: 99%;
  display: flex;
  align-items: center;

`

export const SubBoxLogoMaps = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;

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
 margin: 0;


 @media (max-width: 480px) { 
  font-size: 15px;
}
@media (max-width: 767px) { 
  font-size: 15px;
 }
 `

export const ImagenMaps = styled.img`
  width: 17px;
  height: 23px;
  align-items: center;
  @media (max-width: 480px) { 
    width: 4%;
    height: 20px;
    padding:0;
  }
  @media (max-width: 767px) { 
    width: 4%;
    padding:0;
    height: 20px;
   }
`