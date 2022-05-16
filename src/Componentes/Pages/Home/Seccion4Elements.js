import styled from "styled-components";

export const BoxPrincipal = styled.div`
   width: 100%;
   height: 20vh;
   background-color:#1D2142; 
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;

      @media (max-width: 480px) { 
         display:flex;
         flex-direction: column;
         justify-content:center;
      }
      @media (max-width: 767px) { 
         display:flex;
         flex-direction: column;
         justify-content:center;
      }
`
export const Box1 = styled.div`


`
export const Box2 = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;

`

export const LogosRedes = styled.img`
   padding: 10px;
    
`
export const Titulo = styled.h2`
   font-size: 25px;
    color: white;
    font-family: "Poppins";
    font-weight: 200;
`