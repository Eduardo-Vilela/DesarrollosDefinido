import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxPrincipal = styled.div`
  width:100%;
  height: 100vh;
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
        padding: 0px 0px 0px 20px
    }
    @media (max-width: 767px) { 
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
        padding: 0px 0px 0px 20px
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      height: 100%;
      width: 90%;
     }
`
export const BoxTexto = styled.div`
  width: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media (max-width: 480px) { 
        width: 100%;
    }
    @media (max-width: 767px) { 
        width: 100%;
        height: 400px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      padding: 50px;
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
  height: 100vh;
  border-radius: 20px 0px 0px 20px;
  background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715454/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Lomas_de_Arana-Muestra-1_1_tqpjva_xupsff.png);
  /* background-size: cover; */
  object-fit: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 100%;
  background-position-y: 50%;

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
    line-height: 1.4em;
    padding-bottom: 20px;
    
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
         font-size: 18px;
         
       }
       @media (min-width: 1025px) and (max-width: 1280px) {
        font-size:14px;
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
`
export const BoxIntermedio = styled.div`
width: 69%;
text-align: left;


@media (max-width: 480px) { 
  width: 100%;
  padding: 0;
}
@media (max-width: 767px) { 
  width: 100%;
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

  @media (max-width: 767px) { 
  width: 90%;
  padding: 0;
 }

`