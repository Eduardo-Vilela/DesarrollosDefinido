import styled from "styled-components";

export const BoxPrincipal = styled.div`
  width:100%;
  height: 100vh;
    @media (max-width: 480px) { 
        width: 100%,
    }
    @media (max-width: 767px) { 
        width: 100%;
    }
`
export const SubBox = styled.div`
  width: 100%;
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

     }
`
export const BoxTexto = styled.div`
  width: 50%;
  padding: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

    @media (max-width: 480px) { 
        width: 100%;
        padding: 0px;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 100%;
        padding: 0px;
        height: 50vh;
        padding: 0px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
        padding: 0px;
    }
`
export const BoxBack = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1647161501/DESARROLLOSGRUPODELSUD/Lomas_de_Arana-Muestra-1_1_tqpjva.png);
  background-size: cover;

    @media (max-width: 480px) { 
        width: 100%;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 100%;
        height: 50vh;
    }

`
export const Titulo3 = styled.h2 `
    font-size: 50px;
    font-family: "Poppins";
    color: #1D2142;
    font-weight: 500;

    @media (max-width: 480px) { 
        font-size: 30px;
      }
      @media (max-width: 767px) { 
        font-size: 30px;
       }
`
export const Parrafo3 = styled.p `
    font-size: 20px;
    font-family: "Poppins";
    color: #1D2142;
    font-weight: 200;

    @media (max-width: 480px) { 
        font-size: 15px;
      }
      @media (max-width: 767px) { 
        font-size: 15px;
       }
`
export const Button3 = styled.a `
    color: #b5b5b5 !important;
    font-family: "Poppins";
    font-size: 25px;
    color: #767676 !important;
    text-decoration: none;
    font-weight: 400;

    @media (max-width: 480px) { 
        font-size: 25px;
      }
      @media (max-width: 767px) { 
        font-size:25px;
       }
`

