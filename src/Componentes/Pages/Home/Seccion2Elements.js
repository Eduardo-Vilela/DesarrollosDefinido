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
        display: none;
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
`

export const CardsBox = styled.div`
  $:hover {
    display: none;
  }
`
export const Overlay = styled.div`
  display: none;
${CardsBox}:hover & {
  display: block;
}
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
        display: block;
      }
 `