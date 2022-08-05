import styled from 'styled-components'

export const BoxPadre = styled.div`
width: 100%;
height: 850px;


@media (max-width: 480px) { 
  margin-top: 60px;
}
@media (max-width: 767px) { 
  margin-top: 60px;
 }
 @media (min-width: 768px) and (max-width: 1400px) { 
  height: 600px;
 }
`

export const BoxPadreHome = styled.div`
width: 100%;
height: 850px;


 @media (min-width: 768px) and (max-width: 1400px) { 
  height: 600px;
 }
`

export const SubBoxPadre = styled.div`
width: 100%;
height: 850px;
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
   @media (min-width: 768px) and (max-width: 1400px) { 
  height: 600px;
 }
`
export const SubBoxPadreFormNuevo = styled.div`
width: 85%;
height: 850px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
padding: 50px;
align-items: center;
column-gap: 70px;

  @media (max-width: 767px) { 
    flex-direction:column;
    padding: 0px;
    height: auto;
    width: 100%;
    row-gap: 50px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
  height: 600px;
 }
`

export const BoxPrincipalFormNuevo = styled.div`
width: 100%;
height: 900px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
background: linear-gradient(0deg,hsla(0,0%,100%,0) 94%,#1D2142);

  @media (max-width: 767px) { 
    flex-direction:column;
    height: auto;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
  height: 600px;
 }
`

export const Box1 = styled.div`
width: 50%;
height: 100%;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715484/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/El_Juncal-8_1_c76ut4_lprsx9.webp); */
background-position: center center;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658770679/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Contacto_oa38sm.webp);
background-repeat: no-repeat;
background-size: cover;

@media (max-width: 480px) { 
    width: 100%;
    background-size: cover;
    height: 20vh;
  }
  @media (max-width: 767px) { 
    width: 100%;
    background-size: cover;
    height: 20vh;
   }
`
export const BoxFormularioHome = styled.div`
width: 50%;
height: 80%;
/* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715484/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/El_Juncal-8_1_c76ut4_lprsx9.webp); */
background-position: center center;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659124533/marcas/sliderNuevoHome/Mask_group_odze5s.webp);
background-repeat: no-repeat;
background-size: cover;
border-radius: 20px;



  @media (max-width: 767px) { 
    width: 100%;
    background-size: cover;
    height: 20vh;
    border-radius: 0px;
   }
`
export const Box2 = styled.div`
width: 50%;
height: 100%;
background-color: #929292;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


  @media (max-width: 767px) { 
    width: 100%;
    padding: 0px;
    height: auto;
    margin-bottom: 20px;
   }
`

export const BoxFormContacto = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: baseline;
width:80%;
margin: auto;

@media (max-width: 480px) { 
    width: 80%;
  }
@media (min-width: 768px) and (max-width: 1400px) { 
    row-gap: 20px;
  }
`
export const TituloContacto = styled.h1`
color: white;
font-size: 40px;
font-family: Poppins;
font-weight: 500;

  @media (max-width: 767px) { 
    font-size: 20px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 30px;
  }
`
export const ContenedorTitulos = styled.div`
width: 80%;
text-align: left;

@media (max-width: 480px) { 
    padding:0px;

    width: 100%;
  }
  @media (max-width: 767px) { 
    padding:0px;

    width: 100%;
   }
`
export const SubtituloContacto = styled.p`
font-size: 20px;
color: white;
font-family: Poppins;
font-weight: 200;

@media (max-width: 480px) { 
    font-size: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 20px;
  }
`

export const InputContacto  = styled.input`
border: 0 !important;
outline: 0;
background: none !important;
border-bottom: solid #ffff 1px !important;
margin-bottom: 20px;
font-size: 25px;
font-family: 'Poppins';
color: #ffff;
outline: none !important;
width: 100%;
::placeholder,
::-webkit-input-placeholder {
  color: white !important;
}
:-ms-input-placeholder {
   color: white  !important;
}
&:focus{
  outline: none !important;
}
&:active{
        outline: none;
    }
@media (max-width: 480px) { 
   font-size: 22px;
  }
  @media (max-width: 767px) { 
    font-size: 22px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 18px;
  }
`


export const InputContactoHome  = styled.input`
border: 0 !important;
outline: 0;
background: none !important;
border-bottom: solid #1D2142 1px !important;
margin-bottom: 20px;
font-size: 25px;
font-family: 'Poppins';
color: #1D2142;
outline: none !important;
width: 100%;
::placeholder,
::-webkit-input-placeholder {
  color: #1D2142 !important;
}
:-ms-input-placeholder {
   color: #1D2142  !important;
}
&:focus{
  outline: none !important;
}
&:active{
        outline: none;
    }

  @media (max-width: 767px) { 
    font-size: 17px;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 18px;
  }
`

export const InputArea = styled.textarea`
border: 0 !important;
background: none !important;
border-bottom: solid #ffff 1px !important;
margin-bottom: 20px;
font-size: 25px;
font-family: "Raleway", Sans-serif;
width: 100%;
color: #ffff ;
outline: none !important;
resize: none !important;
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
    @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 18px;
  }
`


export const InputAreaHome = styled.textarea`
border: 0 !important;
background: none !important;
border-bottom: solid #1D2142 1px !important;
margin-bottom: 20px;
font-size: 25px;
font-family: "Raleway", Sans-serif;
width: 100%;
color: #1D2142 ;
outline: none !important;
resize: none !important;
::placeholder,
::-webkit-input-placeholder {
  color: #1D2142 !important;
}
:-ms-input-placeholder {
   color: #1D2142  !important;
}

   @media (max-width: 767px) { 
     font-size: 17px;
    }
    @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 18px;
  }
`

export const Button = styled.input`
border-radius: 20px;
font-family: "Mabry Pro", Sans-serif;
color: white;
font-size: 20px;
font-weight: 300;
line-height: 1em;
background-color: transparent;
border: 1px solid white;
border-radius: 30px 30px 30px 30px;
padding: 15px 30px;


   @media (max-width: 767px) { 
    background-color: #82AB1B;
  border: 1px solid white;
  font-size: 17px;
    }
    @media (min-width: 768px) and (max-width: 1400px) { 
    font-size: 18px;
  }

&:hover{
  background-color: #82AB1B;
  border: 1px solid white;
}
`