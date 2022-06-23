import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BoxPrincipal = styled.div`
width: 100%;
height: 2900px;
margin-bottom: 90px;

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
height: 2900px;
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
    font-size: 18px;
  }
  @media (max-width: 767px) { 
     font-size: 20px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 20px;
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
width: 80%;
height: 500px;
padding: 20px;
transition:all 0.6s ease;
transform-style: preserve-3d;
margin: auto;

   &:hover{
   transform: rotateX(180deg);
   }
   
  .back{
    transform: rotateX(180deg);
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
    justify-content: center;
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
width: 100%;
border-radius: 10px;
`

export const TituloFlips = styled.h2`
color: #1D2142;
font-family: Poppins;
font-size: 30px;
font-weight: 600;
line-height: 1em;
`

export const SubtituloFlips = styled.h3`
color: #AEAEAE;
font-family: Poppins;
font-size: 20px;
font-weight: 300;
line-height: 1.5em;
`

export const LinkFlip = styled(Link)`
width: 50%;
border-left: solid 1px #E5E5E5;
@media (max-width: 480px) { 
  width:85%;
  border: 0;
}
@media (max-width: 767px) { 
  width:85%;
  border: 0;
 }

`