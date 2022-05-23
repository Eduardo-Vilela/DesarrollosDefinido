import styled from 'styled-components'

export const Valores = styled.div`
width: 50%;
height: 30vh;
margin-bottom: 10px;
margin-right: 10px;
border-radius: 10px;
padding: 10px;
text-align: left;
padding: 50px;
background: #F6F6F6;


`

export const TituloValores = styled.h3`
color: #1D2142;
font-size: 18px;
font-family: Poppins;
font-weight: 500;
`
export const Parrafito = styled.p`
color: #828282;
font-size: 15px;
font-family: Poppins;
font-weight: 200;
`

export const BoxPadre3 = styled.div`
width: 100%;
height: 1000px;

@media (max-width: 480px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;

}
@media (max-width: 767px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;

 }
`

export const SubBoxPadre3 = styled.div`
width: 100%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
  display: none;
  }
  @media (max-width: 767px) { 
  display: none;
   }
`
export const BoxValoresMobile = styled.div`
@media (max-width: 480px) { 
    display: block;
    width: 80%;
    margin: auto;
    }
    @media (max-width: 767px) { 
    display: block;
    width: 80%;
    margin: auto;
     }
     @media (min-width: 768px) and (max-width: 2000px) { 
      display: none;
      }     
`

export const BoxSwiperValores = styled.div`
width: 100%;
height: 40vh;
text-align: center;
`

export const BoxTexto3 = styled.div`
width: 50%;
padding: 170px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

  @media (max-width: 480px) { 
      width: 100%;
      padding: 0px;
      height: 30vh;
  }
  @media (max-width: 767px) { 
      width: 100%;
      padding: 0px;
      height: 30vh;
      padding: 0px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    padding: 50px;
  }
`