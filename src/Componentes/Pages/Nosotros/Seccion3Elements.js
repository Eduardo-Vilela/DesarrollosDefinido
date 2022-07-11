import styled from 'styled-components'


export const Principal = styled.div`
width: 100%;
height: 800px;
background: #1D2142;
@media (max-width: 480px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}
@media (max-width: 767px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: 550px;
}

`
export const Secundario = styled.div`
width: 90%;
height: 800px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
  }
  @media (max-width: 767px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
  height: 100%;
}
`

export const Box1 = styled.div`
width: 50%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
  width: 100%;
  height: 30vh;
}
@media (max-width: 767px) { 
  width: 100%;
  height: 30vh;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: auto;
}
`

export const Box2 = styled.div`
width: 50%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0px 70px 0px 0px;

@media (max-width: 480px) { 
  width: 100%;
  height: 50vh;
  padding: 0px;
}
@media (max-width: 767px) { 
  width: 100%;
  height: 50vh;
  padding: 0px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: auto;
  padding: 0;
  width: 90%;
}
`
export const Card1 = styled.div`

width: 50%;
height: 220px;
display: flex;
flex-direction: column;
justify-content: center;

text-align: center;
align-items: center;

@media (max-width: 480px) { 
  width: 100%;
  padding: 0px;
}
@media (max-width: 767px) { 
  width: 100%;
  padding: 0px;
 }
`
export const Card2 = styled.div`

width: 50%;
height: 220px;
display: flex;
flex-direction: column;
justify-content: center;

text-align: center;
align-items: center;

@media (max-width: 480px) { 
  width: 100%;
  padding: 0px;
}
@media (max-width: 767px) { 
  width: 100%;
  padding: 0px;
 }
`
export const Card3 = styled.div`

width: 50%;
height: 220px;
display: flex;
flex-direction: column;
justify-content: center;

text-align: center;
align-items: center;
@media (max-width: 480px) { 
  width: 100%;
  padding: 0px;
}
@media (max-width: 767px) { 
  width: 100%;
  padding: 0px;
 }
`
export const Card4 = styled.div`

width: 50%;
height: 220px;
display: flex;
flex-direction: column;
justify-content: center;

text-align: center;
align-items: center;


@media (max-width: 480px) { 
  width: 100%;
  padding: 0px;
}
@media (max-width: 767px) { 
  width: 100%;
  padding: 0px;
 }
`
export const BoxCards = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const TituloLogros = styled.h2`
font-size: 20px;
color: white;
font-family: Poppins;
font-weight: 200;

@media (max-width: 480px) { 
font-size: 12px;
}
@media (max-width: 767px) { 
font-size: 12px;
 }
`

export const NumeroLogros = styled.div`
font-size: 45px;
font-family: Poppins;
font-weight: 600;
color: white;

@media (max-width: 480px) { 
  font-size: 20px;
  }
  @media (max-width: 767px) { 
  font-size: 20px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 25px;
  }
`
export const TituloPrincipalLogros = styled.h2`
font-size: 40px;
color: white;
font-family: Poppins;
font-weight: 500;
text-align: left;
padding: 0px 0px 300px 80px;

@media (max-width: 480px) { 
  padding: 0px;
  text-align: left;
  padding-left: 18px;
}
@media (max-width: 767px) { 
  padding: 0px;
  text-align: left;
  padding-left: 18px;
 }

`

export const IconoAños = styled.img`
width: 40px;
height: 40px;
`
export const IconoUnidades  = styled.img`
width: 55px;
`