import styled from 'styled-components'

export const BoxPadre = styled.div`
width: 100%;
height: 100vh;
`
export const SubBoxPadre = styled.div`
width: 100%;
height: auto;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
    flex-direction:column;
  }
  @media (max-width: 767px) { 
    flex-direction:column;
   }
`

export const Box1 = styled.div`
Width: 50%;
height: 100vh;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1648815416/DESARROLLOSGRUPODELSUD/La_Campi%C3%B1a_edit_hqt4up.jpg);
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

@media (max-width: 480px) { 
    width: 100%;
    background-size: contain;
    height: 32vh;
  }
  @media (max-width: 767px) { 
    width: 100%;
    background-size: contain;
    height: 42vh;
   }
`
export const Box2 = styled.div`
Width: 50%;
height: 100vh;
background-color: #929292;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2em 5em 2em 5em;

@media (max-width: 480px) { 
    width: 100%;
    padding: 0px;
  }
  @media (max-width: 767px) { 
    width: 100%;
    padding: 0px;
   }
`

export const BoxFormContacto = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TituloContacto = styled.h1`
color: white;
font-size: 40px;
font-family: Poppins;
font-weight: 400;
@media (max-width: 480px) { 
    font-size: 30px;
  }
  @media (max-width: 767px) { 
    font-size: 30px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 35px;
  }
`
export const ContenedorTitulos = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 0px 40px 0px;


`
export const SubtituloContacto = styled.p`
font-size: 22px;
color: white;
font-family: Poppins;
font-weight: 300;

@media (max-width: 480px) { 
    font-size: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 20px;
  }
`

export const InputContacto  = styled.input`
border: 0 !important;
background: none !important;
border-bottom: solid #ffff 1px !important;
margin-bottom: 20px;
font-size: 30px;
color: #ffff !important;
outline: none !important;
width: 80%;
::placeholder,
::-webkit-input-placeholder {
  color: white !important;
}
:-ms-input-placeholder {
   color: white  !important;
}
@media (max-width: 480px) { 
   font-size: 22px;
  }
  @media (max-width: 767px) { 
    font-size: 22px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 25px;
  }
`
export const InputArea = styled.textarea`
border: 0 !important;
background: none !important;
border-bottom: solid #ffff 1px !important;
margin-bottom: 20px;
font-size: 30px;
width: 80%;
color: #ffff !important;
outline: none !important;
::placeholder,
::-webkit-input-placeholder {
  color: white !important;
}
:-ms-input-placeholder {
   color: white  !important;
}
@media (max-width: 480px) { 
    font-size: 22px;
   }
   @media (max-width: 767px) { 
     font-size: 22px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
        font-size: 25px;
      }
`

export const Button = styled.input`
border-radius: 20px;
border: #ffff 2px solid;
font-family: "Mabry Pro", Sans-serif;
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
padding: 15px;
`