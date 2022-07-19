import styled from "styled-components";
import { Swiper } from 'swiper/react';


export const BoxSwiper9 = styled.div`
 width: 100%;
 height: 60vh;

@media (max-width: 767px) { 
  height: 250px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: 350px;
 }

`
export const SubBox9 = styled.div`
width: 81%;
height: 60vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 480px) { 
  height: 300px;
  width: 86% ;
 }
 @media (max-width: 767px) { 
   height: 300px;
   width: 86% ;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  height: 350px;
 }
`


export const BoxTitulo9 = styled.h3`
color: #1D2142;
font-family: "Poppins", Sans-serif;
font-size: 25px;
font-weight: 500;
line-height: 1.2em;

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
border-radius: 8px;
background-color: white;
box-shadow: 5px 5px 5px  rgb(0 0 0 / 10%);  


  &:hover{
    transform: scale(1.1); 
    transition: 0.5s;
  }
`




export const SwiperEmpresas = styled(Swiper)`
width: 100%;
height: 400px;
    .swiper-slide{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  @media (max-width: 767px) { 
    height: 200px;
  }
`