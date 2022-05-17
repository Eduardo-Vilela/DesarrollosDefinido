import styled from "styled-components";

export const BoxSwiper9 = styled.div`
 width: 100%;
 height: 80vh;

`
export const SubBox9 = styled.div`
width: 80%;
height: 70vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`


export const BoxTitulo9 = styled.h3`
 font-size: 30px;

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

export const BoxSwiper = styled.div`

`

export const EmpresasLogo = styled.div`
display: flex;
justify-content: center ;
height:80px;
border-radius: 8px;
background-color: white;
box-shadow: 5px 5px 5px 0 rgb(0 0 0 / 10%);  
-webkit-filter: grayscale(100%); 
filter: grayscale(100%);
  &:hover{
    transform: scale(1.1); 
    transition: 0.5s;
  }
`




