import styled from 'styled-components'

export const BoxPrincipal = styled.div`
width: 100%;
height: 120vh;
background-color: #E5E5E5;
`
export const SubBox = styled.div`
width: 100%;
height: 120vh;
display:flex;
flex-direction: column;
justify-content: center;
margin: auto;
`

export const BoxFormulario = styled.form`
width: 50%;
height: 55vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
align-items: center;
border-radius: 10px;

@media (max-width: 480px) { 
    width: 100%;
  }
  @media (max-width: 767px) { 
    width: 100%;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
     
   }
`

export const Parte1 = styled.div`
height: 50%;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
  width: 100%;
}
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
   
 }
`
export const BoxIntermedioinputs = styled.div`
width: 100%;
height: 50%;
display:flex;
flex-direction: row;
justify-content: space-around;
`
export const Parte2 = styled.div`
width: 80%;

display: flex;
flex-direction: column;
`
export const Parte3 = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
`
export const PosicionLabels = styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: baseline;

`
export const InputPlanCanje = styled.input`
background: #E5E5E5;
border-radius: 8px;
font-family: 'Poppins';
outline: 0!important;
border: 0!important;
height: 5vh;
text-indent: 10px;
width: 100%;

::placeholder {
  @media (max-width: 480px) { 
    font-size: 10px;
  }
  @media (max-width: 767px) { 
    font-size: 12px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
     
   }
}
`
export const LabelPlanCanje = styled.label`
color: #1D2142;
font-size: 20px;
font-family: Poppins;
font-weight: 600;

@media (max-width: 480px) { 
  font-size: 14px;
}
@media (max-width: 767px) { 
  font-size: 14px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
   
 }
`

export const BoxFondoForm = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
`

export const ButtonFormPlanCanje = styled.button`
font-family: "Poppins", Sans-serif;
    font-size: 20px;
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
    margin-top: 20px;
    text-decoration: none !important;

    :disabled {
      opacity: 0.4;
    }
      
    

    @media (max-width: 480px) { 
      font-size: 14px;
    }
    @media (max-width: 767px) { 
      font-size: 14px;
     }
     @media (min-width: 768px) and (max-width: 1199px) { 
       
     }
`
export const ImagenFinal = styled.img`
width:70%;
height: auto;
margin: auto;
`