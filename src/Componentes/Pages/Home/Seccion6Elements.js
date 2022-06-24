import styled from "styled-components";


export const BoxPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1D2142;
  @media (max-width: 480px) { 
      display:none;
  }
  @media (max-width: 767px) { 
    display:none;
}
@media (min-width: 768px) and (max-width: 1199px) { 
    display:none;
}
`

export const BoxSecundario = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    padding: 90px 0px 50px 0px;
    display: flex;
  flex-direction: row;
  justify-content: center;
    @media (max-width: 480px) { 
      padding:0px;
      flex-direction: column;
  }
  @media (max-width: 767px) { 
    padding:0px;
    flex-direction: column;
}
@media (min-width: 768px) and (max-width: 1199px) { 
    padding:0px;
}

`
export const SlideTexto6 = styled.div`
   width: 100%;
   height: 100%;
   padding-left: 175px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width: 480px) { 
    width: 80%;
    height: 40vh;
    margin: auto;
    padding-left: 0;
  }
  @media (max-width: 767px) { 
    width: 80%;
    height: 40vh;
    margin: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: 40vh;
  }
`

export const ImagenSlide = styled.img`
 /* width: 510px; */
 /* height: 80vh; */
 border-radius: 10px;

 @media (max-width: 480px) { 
  width:80% ;
  height:50vh ;
}
@media (max-width: 767px) { 
 width: 80% ;
 height: 50vh ;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 80% ;
  height: 58vh ;
 }
`
export const Titulo6 = styled.h1`
  font-size: 50px;
  font-family: "Poppins";
  font-weight: 500;
  color: white;
  @media (max-width: 480px) { 
    font-size:40px;
}
@media (max-width: 767px) { 
   font-size: 20px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
 font-size: 20px;
}
    
`

export const Parrafo6 = styled.p`
 font-size: 20px;
 font-family: "Poppins";
 font-weight: 200;
 color: white;

 @media (max-width: 480px) { 
  font-size:15px;
}
@media (max-width: 767px) { 
 font-size: 15px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 15px;
 }
`
export const ButtonSlideSeccion6 = styled.a`
font-size: 30px;
font-family:"Poppins";
color: white;

@media (max-width: 480px) { 
  font-size:18px;
}
@media (max-width: 767px) { 
 font-size: 18px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 20px;
 }
`


/*SECCION6 MOBILE*/

export const BoxMobile6 = styled.div`
  display: none;

  @media (max-width: 480px) { 
    display: block;
    background-color: #1D2142;
    width: 100%;
    height: 100vh ;
  }
  @media (max-width: 767px) { 
    display: block;
    width: 100%;
    height: 100vh ;
    background-color: #1D2142;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    display: block;
    background-color: #1D2142;
    width: 100%;
    height: 100vh;
  }

`
export const BoxSwiperMobile = styled.div`
 width: 100% ;
 height: 60vh;
 text-align: center;
`

export const ImagenSlideVacia = styled.div`
 width: 80%;
 height: 80vh;
 border-radius: 10px;
 border: solid 1px white;
 display: flex;
    flex-direction: column;
    justify-content: center;

 @media (max-width: 480px) { 
  width:80% ;
  height:50vh ;
  margin: auto;

}
@media (max-width: 767px) { 
 width: 80% ;
 height: 50vh ;
 margin: auto;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 80% ;
  height: 50vh ;
  margin: auto;
 }
`

export const Ajuste = styled.div`
width: 50%;

`