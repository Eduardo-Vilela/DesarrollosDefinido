import styled from "styled-components";

export const BoxPrincipal = styled.div`
  width:100%;
  height: 100vh;
  margin-bottom: 40px;
  
    @media (max-width: 480px) { 
        width: 100%,
    }
    @media (max-width: 767px) { 
        width: 100%;
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
     }
`
export const BoxTexto = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;

    @media (max-width: 480px) { 
        width: 100%;
        height: 60%;
        padding: 0px 0px 0px 25px;
    }
    @media (max-width: 767px) { 
        width: 100%;
        padding: 0px 0px 0px 25px;
        height: 60%;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      padding: 50px;
      height: auto;
     
    }
`
export const BoxBack = styled.div`
  width: 50%;
  height: 100vh;
  border-radius: 20px;
  background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1647161501/DESARROLLOSGRUPODELSUD/Lomas_de_Arana-Muestra-1_1_tqpjva.png);
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
     }

`
export const Titulo3 = styled.h2 `
    font-size: 50px;
    font-family: "Poppins";
    color: #1D2142;
    font-weight: 500;
    line-height: 4em;

    @media (max-width: 480px) { 
        font-size: 24px;
      }
      @media (max-width: 767px) { 
        font-size: 24px;
       }
       @media (min-width: 768px) and (max-width: 1199px) { 
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
        font-size: 12px;
      }
      @media (max-width: 767px) { 
        font-size: 15px;
       }
       @media (min-width: 768px) and (max-width: 1199px) { 
         font-size: 14px;
       }
`
export const Button3 = styled.a `
    color: #b5b5b5 !important;
    font-family: "Poppins";
    font-size: 25px;
    color: #767676 !important;
    text-decoration: none;
    font-weight: 500;
    line-height: 100px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) { 
        font-size: 20px;
      }
      @media (max-width: 767px) { 
        font-size: 16px;
       }
       @media (min-width: 768px) and (max-width: 1199px) { 
         font-size:25px;
       }
`
export const BoxIntermedio = styled.div`
width: 70%;
margin: auto;
text-align: left;


@media (max-width: 480px) { 
  width: 100%;
  padding: 0;
}
@media (max-width: 767px) { 
  width: 100%;
  padding: 0;
 }
`