import styled from 'styled-components'

export const Principal = styled.div`
width: 100%;
height: 300px;
background: #1D2142;
margin: 0px 0px 150px 0px;
`

export const Secundario = styled.div`
width: 80%;
height: 300px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media (max-width: 480px) { 
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  @media (max-width: 767px) { 
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
   }
`

export const BoxTextito = styled.div`
width: 50%;
@media (max-width: 480px) { 
  width: 100%;
  text-align: left;
  padding: 20px;
}
@media (max-width: 767px) { 
  width: 100%;
  text-align: left;
  padding: 20px;
 }
`
export const BoxFoto = styled.div`
width: 50%;
text-align: center;
@media (max-width: 480px) { 
  display: none;
  
}
@media (max-width: 767px) { 
  display: none;
  
 }
`

export const Titulo6 = styled.h2`
font-size: 30px;
font-family: Poppins;
font-weight: 500px;
color: white;
@media (max-width: 480px) { 
  font-size: 20px;
}
@media (max-width: 767px) { 
  font-size: 20px;
 }
`

export const Subtitulo6 = styled.h3`
font-size: 15px;
font-family: Poppins;
font-weight: 200;
color: white;
@media (max-width: 480px) { 
  font-size: 10px;
}
@media (max-width: 767px) { 
  font-size: 10px;
 }
`

export const LinkGrupo = styled.a`
font-size: 20px;
font-family: Poppins;
font-weight: 200;
color: #b5b5b5;
`

export const Logo6 = styled.img`
width: 20%;
`