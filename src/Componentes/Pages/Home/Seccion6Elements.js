import { Link } from "react-router-dom";
import styled from "styled-components";


export const BoxPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1D2142;
    transition: background-color 2s ease;


    
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
    display: flex;
  flex-direction: column;
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
  flex-direction: column;
    padding:0px;
    
}

`
export const SlideTexto6 = styled.div`
   width: 62%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   text-align: left;

   @media (max-width: 480px) { 
    width: 86%;
    height: 40vh;
    margin: auto;
    padding-left: 0;
  }
  @media (max-width: 767px) { 
    width: 86%;
    height: 40vh;
    margin: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    width: 80%;
    height: 100%;
    margin: auto;
    padding: 0;
  }
`

export const ImagenSlide = styled.img`
 width: 100%;
 height:100%;
 border-radius: 10px;

 @media (max-width: 480px) { 
  width:80% ;
  height:55vh ;
}
@media (max-width: 767px) { 
 width: 80% ;
 height: 55vh ;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 90%;
  height: 560px;
 }
`
export const Titulo6 = styled.h1`
  font-size: 60px;
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
  font-size: 10px;
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
  font-size: 24px;
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
    height: 1000px;
  }

`
export const BoxSwiperMobile = styled.div`
 width: 100% ;
 height: 60vh;
 text-align: center;

 @media (min-width: 768px) and (max-width: 1199px) { 
    width: 80%;
    height: 60vh;
    margin: auto;
  }

`

export const ImagenSlideVacia = styled(Link)`
 width: 80%;
 height: 100%;
 text-decoration: none !important;
 font-family: 'Poppins';
 font-size: 25px;
 color: white;
 outline: none !important;
 border-radius: 10px;
 border: solid 1px white;
 display: flex;
 flex-direction: column;
 justify-content: center;

&:hover{
  color: rgb(130,171,41);
}


 @media (max-width: 480px) { 
  width:70% ;
  height: 50vh;
  font-size: 20px;
}
@media (max-width: 767px) { 
 width: 70% ;
 height: 50vh;
 font-size: 20px;
}
@media (min-width: 768px) and (max-width: 1199px) { 

 }
`



export const ContenedorDesarrollos = styled.div`
width: 100%;
height: 100%;
background-color: aqua;
`