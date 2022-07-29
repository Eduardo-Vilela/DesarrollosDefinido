import styled from "styled-components";

export const BoxCardsDesarrollos = styled.div`
width: 100%;
height:50vh;
padding-top: 90px;
display: flex;
justify-content: center;
align-items: center;


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

export const BoxCards2 = styled.div`
width:80%;
display: flex;
flex-direction: row;
justify-content: center;
border: solid 1px #dadadaba;
border-radius: 10px;

@media (max-width: 480px) { 
    height: auto;
    width: 100%;
  }
  @media (max-width: 767px) { 
    height: auto;
    width: 100%;
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
    width: 50%;
    border-right: 1px solid #dadada9e;
  }
  @media (max-width: 767px) { 
    flex-direction: column;
    justify-content: center;
    width: 50%;
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
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
border-right: 1px solid #dadada40;

      @media (max-width: 767px) { 
        height: 150px;
        border: 0px;
        width: 100%;
        border-bottom: 1px solid #dadada40 !important;
      }
      @media (min-width: 768px) and (max-width: 1199px) { 
      }
`

export const ImgCardsDesarrollos = styled.img`
 width: 130px;


  @media (max-width: 767px) { 
    width: 100px !important;  
  }
  @media (min-width: 768px) and (max-width: 1400px) { 
    width: 110px;
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
export const ImgCardsLasCatalinas = styled.img`
width: 200px;


  @media (max-width: 767px) { 
    width: 100% !important;
  }
  @media (min-width: 768px) and (max-width: 1400px) { 
    width: 150px;
  }

`