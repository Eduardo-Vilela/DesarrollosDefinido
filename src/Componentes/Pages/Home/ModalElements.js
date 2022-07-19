import styled from 'styled-components'

export const BoxPrincipal = styled.div`
height: 500px;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 480px) { 
      height: 300px;
    }
    @media (max-width: 767px) { 
      height: 300px;
     }
@media (min-width: 768px) and (max-width: 1199px) { 
 height: 400px;
 }
`
export const Box1 = styled.div`
width: 50%;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715478/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/desarPop_n1ztox_hkwpra.jpg);
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
flex-direction: row;
justify-content: center;
`
export const BoxForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 50px;
height: 100%;

@media (max-width: 767px) { 
      row-gap: 20px;
     }
`
export const InputModal  = styled.input`
height: 45px;
color: grey;
width: 100%;
border: 0;
font-size: 18px;
font-family: 'Poppins';
border-bottom: 2px solid grey;
&:focus{
  outline: none !important;
}

@media (max-width: 480px) { 
      font-size:  12px !important;
    }
    @media (max-width: 767px) { 
      font-size: 16px !important;
     }
`
export const LogoModal = styled.img`
width: 100px;
height: 35px;
/* 
    @media (max-width: 767px) { 
    width: 80px;
    height: 30px;
     } */
`

export const BoxLogo = styled.div`
width: 90%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: end;
align-items: end;
`

export const BoxInputs = styled.div`
width: 80%;
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
font-size: 18px ;
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