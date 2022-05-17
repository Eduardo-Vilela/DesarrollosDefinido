import styled from "styled-components";

export const BoxCardsDesarrollos = styled.div`
width: 100%;
height:50vh;
display: flex;

@media (max-width: 480px) { 
    display: none;
  }
  @media (max-width: 767px) { 
  display: none;
  @media (min-width: 768px) and (max-width: 1199px) { 
    display: none;
  }
`

export const BoxCards2 = styled.div`
width:80%;
height: auto;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
border: solid 1px #dadadaba;
border-radius: 10px;

@media (max-width: 480px) { 
    height: 80vh;
  }
  @media (max-width: 767px) { 
    height: 80vh;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    
  }
`
export const CardsMobile = styled.div`
 display:flex;
 flex-direction: row;
 @media (max-width: 480px) { 
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) { 
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    flex-direction: column;
    justify-content: center;
  }

`
export const BoxBordesCards = styled.div`
text-align: center;
 margin: auto;
    width: 50%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #dadada9e;
    @media (max-width: 480px) { 
        border: 0px;
      }
      @media (max-width: 767px) { 
        border: 0px;
      }
      @media (min-width: 768px) and (max-width: 1199px) { 
      }
`

export const ImgCardsDesarrollos = styled.img`
 width: 50%;

 @media (max-width: 480px) { 
    width: 100%    
  }
  @media (max-width: 767px) { 
    width: 100%
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%
  }
`

export const BoxCardsMobile = styled.div`
@media (max-width: 480px) { 
    display: block;
  }
  @media (max-width: 767px) { 
    display: block;
    padding: 20px;

  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    display: none;
  }
  @media (min-width: 1120px) and (max-width: 2000px) { 
    display: none;
  }
`
