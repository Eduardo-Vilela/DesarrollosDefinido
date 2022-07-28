import styled from "styled-components";

export const BoxPrincipal = styled.div`
   width: 100%;
   height: 200px;
   background-color:#1D2142; 
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

      @media (max-width: 480px) { 
         display:flex;
         flex-direction: column;
         justify-content: space-evenly;
      }
      @media (max-width: 767px) { 
         display:flex;
         flex-direction: column;
         justify-content: space-evenly;
      }
      @media (min-width: 768px) and (max-width: 1199px) { 
      height: 200px;
   }
`
export const Box1 = styled.div`
   padding: 30px 0px 30px 0px;
   width: 50%;
   align-items: center;
   display: flex;
   justify-content: flex-end;

   @media (max-width: 480px) { 
      padding: 0px;  
      width: 100%; 
      text-align: center; 
    }
    @media (max-width: 767px) { 
       padding: 0px;
       width: 100%;
       text-align: center; 
       justify-content: center;
    }

`
export const Box2 = styled.div`
   width: 50%;
   display: flex;
   justify-content: flex-start;
   column-gap: 50px;
   display: flex;
   align-items: center;
    
   .BordesRedondos{
   @media (max-width: 480px) { 
      border: 1px solid white;
      border-radius: 30px;
   }
   @media (max-width: 767px) { 
      border: 1px solid white;
      border-radius: 30px;
   }   

}

     
   @media (max-width: 480px) { 
      justify-content: center;
      padding: 0;
      width: 100%;
      column-gap: 10px;
    }
    @media (max-width: 767px) { 
      justify-content: center;
      padding: 0;
      width: 100%;
      column-gap: 10px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      column-gap: 0px;
    }  
`

export const LogosRedes = styled.img`
   width: 60px;
   padding: 15px;

    @media (max-width: 767px) { 
      width: 50px;
    }
    @media (max-width:1281px) { 
      width: 50px;
    }
  
 
`
export const Titulo = styled.h2`
   font-size: 35px;
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
   @media (max-width:1281px) { 
      font-size: 30px;
    }
`

export const BoxContent = styled.div`
   width: 80%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   column-gap: 40px;

   @media (max-width: 767px) { 
      width: 100%;
      flex-direction: column;
   }
`
