import styled from "styled-components";

 export const BoxPrincipal10 = styled.div`
 width: 100%;
 height: 350px;
 background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657721623/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-128-1_ve6ezh.webp);
 background-size: contain;
 background-repeat: no-repeat;
 background-position: bottom;

 @media (max-width: 767px) { 
    height: 50px !important;
   }

   @media (min-width: 768px) and (max-width: 1400px) { 
      height: 200px;
   }
 `

export const SubBox = styled.div`
width: 90%;
text-align: center;
margin: auto;
align-items: center;
display: flex;
justify-content: center;
align-items: baseline;


@media (max-width: 480px) { 
   margin-top: 40px;
   width: 80%;
}
@media (max-width: 767px) { 
   margin-top: 40px;
   width: 80%;
 }

`

export const Titulo10 = styled.h2`
font-size: 45px;
font-weight: 200;
color: #808080;
font-family: 'Poppins';


  @media (max-width: 767px) { 
    font-size: 18px !important;
   }
   @media (min-width: 768px) and (max-width: 1400px) { 
      font-size: 25px;
   }

`