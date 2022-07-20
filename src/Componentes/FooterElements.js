import styled from "styled-components";


 export const BoxPrimario = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #FAFAFA;;
  @media (max-width: 767px) { 
  height: auto;
 }
 `

 export const BoxSecundario = styled.div`
 width: 100% ;
 height: 50vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: auto;
 @media (max-width: 767px) { 
  height: auto;
 }
 `
 export const Box1 = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 767px) { 
      height: 160px;
      text-align: end;
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
 height: 120px;
 width: 100%;
 background-color: #1D2142;

 `

 export const Seccion1 = styled.div`
 
 @media (max-width: 767px) { 
  height: 140px;
  text-align: end;
 }
 `

 export const Seccion2 = styled.div`
  @media (max-width: 767px) { 
    height: 140px;
    text-align: left;
  }
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
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 480px) { 
      font-size:10px;
      text-align: center;
     }
     @media (max-width: 767px) { 
      font-size:10px;
      text-align: center;
     }
     @media (min-width: 768px) and (max-width: 1199px) { 
      
     }
 `

 export const Seccion5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) { 
    width: 100%;
    justify-content: space-around;
   }
   @media (max-width: 767px) { 
    width: 100%;
    justify-content: space-around;
   }

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
  text-decoration: none !important;
  display: flex;
  column-gap: 15px;
&:hover{
  text-decoration: #1D2142 !important;
  color: #1D2142;
}


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
  width: 310px;
  height: 35px;
  border: 0;
  background-color: #FAFAFA;
  border-bottom: 2px solid #1D2142;
&:focus{
  outline: none !important;
}
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
  font-size: 14px;
}
 `

 export const LogoGrupo = styled.img`

 width: 40%;

 @media (max-width: 480px) { 
  width: 20%;
 }
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
  
}
@media (min-width: 768px) and (max-width: 1199px) { 
 justify-content: space-around;
}
 `

 export const BoxAjusteFooter = styled.div`
 display: flex;
 width: 80%;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
 justify-content: space-between;
 height: 140px;
 align-content: end;
 
  @media (max-width: 767px) { 
  flex-direction: row-reverse;
  align-items: center;
  height: 140px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  flex-direction: row-reverse;
  }
 
 `