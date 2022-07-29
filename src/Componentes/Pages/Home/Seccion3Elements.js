import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxPrincipal = styled.div`
  width:100%;
  margin-bottom: 40px;
  
    @media (max-width: 480px) { 
        width: 100%;
        margin: 0;
    }
    @media (max-width: 767px) { 
        width: 100%;
        margin: 0;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      height: 400px;
    }
`
export const SubBox = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
    @media (max-width: 480px) { 
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
        height: 115vh;
    }
    @media (max-width: 767px) { 
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
        height: 115vh;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      height: 100%;
      width: 90%;
     }
`
export const BoxTexto = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
    @media (max-width: 480px) { 
        width: 100%;
        padding: 0px 0px 0px 15px
    }
    @media (max-width: 767px) { 
        width: 100%;
        padding: 0px 0px 0px 15px
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      height: auto;
      width: 50%;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        padding:0;
         width: 100%;
       }
`
export const BoxBack = styled.div`
  width: 50%;
  /* background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715454/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Lomas_de_Arana-Muestra-1_1_tqpjva_xupsff.png);  */
  display: flex;
  flex-direction: row;
  justify-content:center;
    @media (max-width: 480px) { 
        width: 100%;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 100%;
        height: 50vh;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      height: auto;
      width: 50%;
     }
`
export const Titulo3 = styled.h2 `
    font-size: 40px;
    font-family: "Poppins";
    color: #1D2142;
    font-weight: 500;
    line-height: 1.3em;
    
    @media (max-width: 480px) { 
        font-size: 24px;
        padding-bottom: 5px;
      }
      @media (max-width: 767px) { 
        font-size: 24px;
        padding-bottom: 5px;
       }
       @media (min-width: 768px) and (max-width: 1199px) { 
         font-size:24px;
       }
       @media (min-width: 1025px) and (max-width: 1280px) {
        font-size:24px;
       }
       @media (max-width:1281px) { 
      font-size: 30px ;
    }
`
export const Parrafo3 = styled.p `
    font-size: 22px;
    font-family: "Poppins";
    color: #1D2142;
    font-weight: 200;
    color: #828282;
    line-height: 1.3em;
    @media (max-width: 480px) { 
      font-size: 18px;
    }
    @media (max-width: 767px) { 
      font-size: 18px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      font-size: 15px; 
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size:14px;
    }
    @media (max-width:1281px) { 
      font-size: 20px ;
    }
`
export const Button3 = styled(Link) `
    color: #b5b5b5 !important;
    font-family: "Poppins";
    font-size: 25px;
    line-height: 1.3em;
    text-decoration: none;
    font-weight: 500;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
   
    &:hover{
      color: rgb(130, 171, 41) !important;
    }
    @media (max-width: 480px) { 
        font-size: 18px;
        line-height: 2em;
      }
      @media (max-width: 767px) { 
        font-size: 18px;
        line-height: 2em;
       }
       @media (min-width: 768px) and (max-width: 1199px) { 
         font-size:20px;
       }
       @media (max-width:1281px) { 
      font-size: 20px ;
    }
`
export const BoxIntermedio = styled.div`
width: 62%;
text-align: left;
@media (max-width: 480px) { 
  width: 95%;
  padding: 0;
}
@media (max-width: 767px) { 
  width: 95%;
  padding: 0;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
        width: 80%;
        padding-right: 0 !important;
        margin: 0;
       }
`

export const BoxInterior = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  @media (max-width: 767px) { 
  width: 90%;
  row-gap: 15px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
      width: 100%;
    }
    @media (min-width:1281px) { 
      width: 100%;
      row-gap: 30px;
    }
`
export const ContenedorCollage = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 10px;
@media (max-width: 767px) { 
  width: 90%;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  width: 100%;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
    }
`

export const ContenedorCollage2 = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 10px;
@media (max-width: 767px) { 
  display: none !important;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  display: none !important;
     }
 
`
export const SubContenedorCollage = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: end;
    padding-right: 10px;
`
export const SubContenedorCollage1 = styled.div`
width: 100%;
@media (max-width: 767px) { 
  width: 50%;
 }
`
export const SubContenedorCollage2 = styled.div`
width: 100%;
@media (max-width: 767px) { 
  width: 50%;
 }
`

export const FotoNosotros1 = styled.img`
width:405px;
border-radius: 10px;
@media (min-width: 768px) and (max-width: 1199px) { 
      width: 175px;
     }
     @media (max-width:1281px) { 
      width: 235px;
    }
`
export const FotoNosotros2 = styled.img`
width:200px;
border-radius: 10px;
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
      width: 210px;
     }
     @media (max-width:1281px) { 
      width: 115px;
    }
`
export const FotoNosotros3 = styled.img`
width:200px;
border-radius: 10px;
@media (max-width: 767px) { 
  width: 100%;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
     width: 210px;
     }
     @media (max-width:1281px) { 
      width: 115px;
    }
`