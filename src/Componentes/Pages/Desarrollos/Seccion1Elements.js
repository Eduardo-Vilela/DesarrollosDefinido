import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BoxPrincipal = styled.div`
width: 100%;
align-items: center;
display: flex;
justify-content: center;
margin-bottom: 200px;

@media (max-width: 480px) { 
    width: 100%;
    height: auto;
    margin-bottom: 0px;
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: auto;
    margin-bottom: 0px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: auto;
  }
`

export const SubBoxLotes = styled.div`
width: 81%;
padding-top: 180px;
background: white;
@media (max-width: 480px) { 
    padding-top: 120px;
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
height:140px;
@media (max-width: 480px) { 
    
  height: 100px;
}
@media (max-width: 767px) { 
  
  height: 100px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: 80px;
}
`
export const BoxLotes = styled.div`
  width: 100%;
  border-top: 1px solid #E5E5E5; 
  border-bottom: 1px solid #E5E5E5; 
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
font-size: 40px;
font-family: Poppins;
font-weight: 200;
color: #808080;
@media (max-width: 480px) { 
    font-size: 18px;
  }
  @media (max-width: 767px) { 
     font-size: 20px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 28px;
  }
`
export const AjusteFotos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
padding: 80px 0px 80px 0px ;
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
width: 80%;
height: 500px;
padding: 20px;
perspective: 1000px;
transition:all 0.9s ease;
transform-style: preserve-3d;
margin: auto;

   &:hover{
   transform: rotateY(180deg);
   }
   
  .back{
    transform: rotateY(180deg);
  }

   .front, .back{
     position: absolute;
     left:0px;
     right: 0px;
     top: 0px;
     bottom: 0px;
     width: 100%;
     margin: auto;
     height: auto;
     backface-visibility:hidden;
     display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
   }


@media (max-width: 480px) { 
    width: 100%;
    height: 250px;
    border-top: 1px solid rgb(229, 229, 229);
  }
  @media (max-width: 767px) { 
    width: 100%;
    height: 250px;
    border-top: 1px solid rgb(229, 229, 229);
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    height: 200px;
  }

`
export const ContenedorFotoLotes = styled.img`
width: 80%;
border-radius: 10px;
`

export const TituloFlips = styled.h2`
color: #1D2142;
font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 1.2em;
@media (max-width: 767px) { 
    font-size: 18px;
    line-height: 1.2em;
  }
`

export const SubtituloFlips = styled.h3`
color: #AEAEAE;
font-family: Poppins;
font-size: 20px;
font-weight: 300;
  @media (max-width: 767px) { 
    font-size: 14px;
    line-height: 1.4em;
  }
`

export const LinkFlip = styled(Link)`

`