import styled from 'styled-components'

export const BoxPrincipal = styled.div`
width: 100%;
height: 2600px;
@media (max-width: 480px) { 
    width: 100%;
    height: auto;
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: auto;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: auto;
  }
`

export const SubBoxLotes = styled.div`
width: 80%;
height: 2600px;
margin: auto;
padding-top: 180px;
background: white;
@media (max-width: 480px) { 
    
    height: auto;
  }
  @media (max-width: 767px) { 
    
    height: auto;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    height: auto;
  }
`
export const BoxTituloLotes = styled.div`
width:80%;
height:200px;
`
export const BoxLotes = styled.div`
width: 100%;
height: 2400px;
border: 1px solid #E5E5E5; 
border-radius: 10px;
@media (max-width: 480px) { 
    width: 100%;
    height: auto;
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: auto;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: auto;
  }
`
export const TituloDesarrollos = styled.p`
font-size: 38px;
font-family: Poppins;
font-weight: 400;
color: #808080;
@media (max-width: 480px) { 
    font-size: 22px;
  }
  @media (max-width: 767px) { 
     font-size: 22px;
   }
`
export const AjusteFotos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
padding: 50px 0px 50px 0px ;
border-bottom: 1px solid #E5E5E5;

@media (max-width: 480px) { 
    flex-direction: column;
    padding: 0px;
  }
  @media (max-width: 767px) { 
    flex-direction: column; 
    padding: 0px;
   }
   
`
export const Lote = styled.div`
width: 50%;
height: 500px;
padding: 20px;
@media (max-width: 480px) { 
    width: 100%;
    height: auto;
    border-top: 1px solid rgb(229, 229, 229);
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: auto;
    border-top: 1px solid rgb(229, 229, 229);
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    height: auto;
  }

`
export const ContenedorFotoLotes = styled.img`
width: 80%;
border-radius: 10px;
`