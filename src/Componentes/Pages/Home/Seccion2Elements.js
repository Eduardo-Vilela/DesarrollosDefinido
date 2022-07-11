import styled from "styled-components";



export const BoxCards = styled.div`
 width: 100%;
 height: 50vh;
 display: flex;
 flex-direction: row;
 justify-content: center;

    @media (max-width: 480px) { 
        display: none;
    }
    @media (max-width: 767px) { 
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
        display: block;
        height: 300px;
        display: flex;
      }

`
export const SubBoxCards = styled.div`

width: 80%;
display: flex;
flex-direction: row;
justify-content: center;
padding: 70px 0px 70px 0px;
text-align: center;
align-items: center;
margin: auto;
@media (max-width: 480px) { 
  padding: 30px 0px 30px 0px;
    }
    @media (max-width: 767px) { 
      padding: 30px 0px 30px 0px;
    }
@media (min-width: 768px) and (max-width: 1199px) { 
        padding: 20px 0px 20px 0px;
      }
`

export const CardsBox = styled.div`
position: relative;

`
export const TarjetaVerde = styled.div`
display: none;


${CardsBox}:hover & {

align-items: center;
 display:block;
 position: absolute;
 top:0;
 bottom:0;
 left:0;
 right:0;
 width: 220px;
 height: 200px; 

}

`
export const TarjetaGris = styled.div`
display: block;
&:hover{
  display:none;
  
}

`

export const ContenidoVerde = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: baseline;
text-align: left;
width: 65%;
margin: auto;

`



export const BoxCardsMobile = styled.div`
    display: none;

    @media (max-width: 480px) { 
      display: block;
      text-align: center;
      padding: 20px;
    }
    @media (max-width: 767px) { 
      display: block;
      text-align: center;
      padding: 20px;
     }
     @media (min-width: 768px) and (max-width: 1199px) { 
        display: none;
      }
 `
 export const LogoVerde = styled.img`
 width: 60px;

 `