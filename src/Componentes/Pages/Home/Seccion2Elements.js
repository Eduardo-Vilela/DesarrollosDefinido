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
export const Overlay = styled.div`
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    width: 80%;
    opacity: 0;
    transition: .3s ease;
    background-color: #ffff

       &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        opacity: 1;
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