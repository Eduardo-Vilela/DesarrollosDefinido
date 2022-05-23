import styled from 'styled-components'


export const Principal = styled.div`
width: 100%;
height: 1000px;

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
`
export const Secundario = styled.div`
width: 100%;
height: 100vh;
margin: auto;
background: #1D2142;
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
`

export const Box1 = styled.div`
width: 50%;
height: 100vh;
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
`

export const Box2 = styled.div`
width: 50%;
height: 100vh;
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
`
export const Card1 = styled.div`

width: 50%;
height: 25vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 106px;
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
height: 25vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 106px;
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
height: 25vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 106px;
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
height: 25vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 106px;
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
font-size: 10px;
}
@media (max-width: 767px) { 
font-size: 10px;
 }
`

export const NumeroLogros = styled.div`
font-size: 45px;
font-family: Poppins;
font-weight: 200;
color: white;

@media (max-width: 480px) { 
  font-size: 25px;
  }
  @media (max-width: 767px) { 
  font-size: 25px;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 25px;
  }
`
export const TituloPrincipalLogros = styled.h2`
font-size: 30px;
color: white;
font-family: Poppins;
font-weight: 500;
text-align: center;
padding: 0px 0px 300px 0px;

@media (max-width: 480px) { 
  padding: 0px;
}
@media (max-width: 767px) { 
  padding: 0px;
 }

`