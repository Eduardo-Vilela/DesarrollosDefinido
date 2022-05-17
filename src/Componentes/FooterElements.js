import styled from "styled-components";
 export const BoxPrimario = styled.div`
  width: 100%;
  height: 60vh;
 `

 export const BoxSecundario = styled.div`
 width: 100% ;
 height: 60vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: auto;
 `
 export const Box1 = styled.div`
 width: 100% ;
 margin: auto;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 height: 60vh;
 align-items: center;
 @media (max-width: 480px) { 
   flex-direction: row-reverse;
  }
  @media (max-width: 767px) { 
  flex-direction: row-reverse;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  flex-direction: row-reverse;
  }
 `

 export const Box2 = styled.div`
 width: 100%;
 text-align: left;
 height: 10vh;
 `

 export const Box3 = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 height:30vh;
 width: 100%;
 background-color: #1D2142;
 `

 export const Seccion1 = styled.div`
 
 `

 export const Seccion2 = styled.div`
 
 `

 export const Seccion3 = styled.div`
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

 export const Seccion4 = styled.div`
    padding: 20px 0px 20px 0px;
    width: 80%;
    margin: auto;
    @media (max-width: 480px) { 
      font-size:12px;
     }
     @media (max-width: 767px) { 
      font-size:12px;
     }
     @media (min-width: 768px) and (max-width: 1199px) { 
      font-size:12px;
     }
 `

 export const Seccion5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
 `

 export const Seccion6 = styled.div`
 display: flex;
    flex-direction: row;
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



 export const TitulosFooter = styled.h3`
 color: #1D2142;
 font-family: "Poppins", Sans-serif;
 font-size: 19px;
 font-weight: 600;

 @media (max-width: 480px) { 
  font-size:13px;
 }
 @media (max-width: 767px) { 
  font-size:13px;
 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  font-size:13px;
 }
 `

 export const SubtitulosFooter = styled.p`
    color: #1D2142;
    font-family: "Poppins", Sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.8em;

    @media (max-width: 480px) { 
      font-size:12px;
     }
     @media (max-width: 767px) { 
      font-size:12px;
     }
     @media (min-width: 768px) and (max-width: 1199px) { 
      font-size:12px;
     }
 `
 export const Redes = styled.a`
 color: #1D2142;
 font-family: "Poppins", Sans-serif;
 font-size: 13px;
 font-weight: 400;
 line-height: 1.8em;
 @media (max-width: 480px) { 
   font-size:12px;
  }
  @media (max-width: 767px) { 
   font-size:12px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
   font-size:12px;
  }
 `

 export const LogoRedes = styled.img`
 width: 20%;
 height: auto;
 padding: 2px;
 `

 export const InputFooter = styled.input`
 border: 0 !important;
 border-bottom: 2px solid #1D2142 !important;
 `

 export const TituloFooterFinal = styled.h4`
 font-size: 14px;
 color: white;
 font-weight: 200;
 padding-right: 40px;
 @media (max-width: 480px) { 
 font-size: 10px;
}
@media (max-width: 767px) { 
  font-size: 10px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  font-size: 10px;
}
 `

 export const LogoGrupo = styled.img`

 width: 40%;

 @media (max-width: 480px) { 
  width: 20%;
  
@media (max-width: 767px) { 
  width: 20%;
 
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 20%;
 
}
 `
 export const SubBox = styled.div`
 width: 80%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 @media (max-width: 480px) { 
  justify-content: center;
}
@media (max-width: 767px) { 
  justify-content: center;
@media (min-width: 768px) and (max-width: 1199px) { 
 justify-content: center;
}
 `