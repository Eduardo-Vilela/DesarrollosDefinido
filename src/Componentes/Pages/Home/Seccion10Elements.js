import styled from "styled-components";

 export const BoxPrincipal10 = styled.div`
 width: 100%;
 height: 30vh;
 background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1657210286/DESARROLLOSGRUPODELSUD/pastito_ahodj9.png);
 background-size: contain;
 background-repeat: no-repeat;
 background-position: bottom;
 `

export const SubBox = styled.div`
width: 90%;
height: 100%;
text-align: center;
margin: auto;


@media (max-width: 480px) { 
   margin-top: 40px;
}
@media (max-width: 767px) { 
   margin-top: 40px;
 }

`

export const Titulo10 = styled.h2`
font-size: 45px;
font-weight: 200;
color: #808080;
font-family: 'Poppins';

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