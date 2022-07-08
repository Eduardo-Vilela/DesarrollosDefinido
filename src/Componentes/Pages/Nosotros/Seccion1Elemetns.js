import styled from "styled-components";

export const BoxPadre = styled.div`
 width: 100%;
 height: 750px;
 padding-top: 170px;
 @media (max-width: 480px) { 
  height: 800px;
  padding-top: 80px;
}
@media (max-width: 767px) { 
  height: 800px;
  padding-top: 80px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  height: 700px;
}

`
export const SubBoxPadre = styled.div`
width: 80%;
height: 100%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
 flex-direction: column;
 height: 100vh;
}
@media (max-width: 767px) { 
flex-direction: column;
height: 100vh;
}
@media (min-width: 768px) and (max-width: 1199px) { 
flex-direction: row;
 height: 700px;
}
`

export const BoxTexto = styled.div`
width: 50%;
height: 100%;
@media (max-width: 480px) { 
  width: 100%;
  height: 20vh;
}
@media (max-width: 767px) { 
  width: 100%;
  height: 20vh;
}


`
export const BoxTexto2 = styled.div`
width: 50%;
height: 100%;
@media (max-width: 480px) { 
   width: 100%;
  height: 80vh;
}
@media (max-width: 767px) { 
  width: 100%;
height: 80vh;
 }

`
export const TituloNosotros = styled.h1`

font-size: 45px;
font-family: "Poppins";
color: #1D2142;
line-height: 1.4em;
font-weight: 500;

@media (max-width: 480px) { 
    font-size: 25px;
  }
  @media (max-width: 767px) { 
    font-size: 18px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
     font-size:30px;
   }
`   