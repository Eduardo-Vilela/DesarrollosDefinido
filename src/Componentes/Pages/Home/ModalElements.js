import styled from 'styled-components'

export const BoxPrincipal = styled.div`
height: 50vh;
display: flex;
flex-direction: row;
justify-content: center;

@media (min-width: 768px) and (max-width: 1199px) { 
 height: 400px;
 }
`
export const Box1 = styled.div`
width: 50%;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1650291416/DESARROLLOSGRUPODELSUD/desarPop_n1ztox.jpg);
background-size: cover;
background-repeat: no-repeat;   
background-position: right;
display: flex;
flex-direction: column;
justify-content: center;
`

export const Box2 = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const BoxForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100%;
`
export const InputModal  = styled.input`
color: grey;
border: 0;
font-size: 20px;
font-family: 'Poppins';
border-bottom: 2px solid grey;

@media (max-width: 480px) { 
      font-size:  12px !important;
    }
    @media (max-width: 767px) { 
      font-size: 16px !important;
     }
`
export const LogoModal = styled.img`
width: 120px;
height: 150px;

@media (max-width: 480px) { 
    width: 90px;
    height: 140px;
    }
    @media (max-width: 767px) { 
    width: 90px;
    height: 140px;
     }
`

export const BoxLogo = styled.div`
width: 90%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: end;
`

export const BoxInputs = styled.div`
width: 80%;
height: 80%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
`
export const SubBox = styled.div`
width: 70%;
margin: auto;
`
export const Titulo = styled.h1`
font-size: 45px !important;
line-height: 1.2em;
font-family: "Poppins", Sans-serif;
color: white;

@media (max-width: 480px) { 
      font-size:  20px !important;
    }
    @media (max-width: 767px) { 
      font-size: 20px !important;
     }
`
export const Parrafo = styled.p`
font-size: 18px !important;
line-height: 1.2em;
font-family: "Poppins", Sans-serif;
color: white;
margin: 0px;

@media (max-width: 480px) { 
      font-size:  14px !important;
    }
    @media (max-width: 767px) { 
      font-size: 14px !important;
     }
`
export const ButtonInput = styled.input`
color: #1D2142 ;
font-size: 20px ;
font-weight: 600 ;
line-height: 1.2em ;
border: 2px solid #1D2142 !important;
border-radius: 30px;
background-color: transparent;
width: 30%;
padding:10px;

@media (max-width: 480px) { 
      font-size:  15px !important;
      padding:0px;
      width: 50%;
    }
    @media (max-width: 767px) { 
      font-size: 15px !important;
      padding:0px;
      width: 50%;
     }
`

export const BoxButtonModal = styled.div`
    width: 100%;
    background: transparent;
    border-radius: 30px ;
    text-align: end;
`