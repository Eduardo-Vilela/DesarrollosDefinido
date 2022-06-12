import styled from "styled-components";

export const BoxPrincipal = styled.div`
   width: 100%;
   height: 20vh;
   background-color:#1D2142; 
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

      @media (max-width: 480px) { 
         display:flex;
         flex-direction: column;
         justify-content:center;
      }
      @media (max-width: 767px) { 
         height: auto;
         display:flex;
         flex-direction: column;
         justify-content:center;
      }
`
export const Box1 = styled.div`
   padding: 30px;
   @media (max-width: 480px) { 
      padding: 0px;    
    }
    @media (max-width: 767px) { 
       padding: 0px;
    }

`
export const Box2 = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   padding: 30px;  
   @media (max-width: 480px) { 
      padding: 0px;    
    }
    @media (max-width: 767px) { 
       padding: 0px;
    }
`

export const LogosRedes = styled.img`
   padding: 10px;
   @media (max-width: 480px) {
      width: 80%;
   }
   @media (max-width: 767px) {
      width: 80%;
   }
`
export const Titulo = styled.h2`
   font-size: 40px;
    color: white;
    font-family: "Poppins";
    font-weight: 300;

   @media (max-width: 480px) { 
     font-size: 20px;    
   }
   @media (max-width: 767px) { 
      font-size: 20px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
      font-size: 20px;
   }
`