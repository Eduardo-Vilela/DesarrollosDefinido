import styled from "styled-components";

export const BoxPadre1 = styled.div`
width: 100%;
height: 1400px;
margin: auto;
padding-top: 120px;

@media (max-width: 480px) { 
  width: 80%;
  height: 650px;
    }
    @media (max-width: 767px) { 
      width: 80%;
      height: 650px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      
    }
`
export const SubBoxPadre2 = styled.div`
width: 80%;
height: 1300px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
  width: 100%;
  height: 500px;
    }
    @media (max-width: 767px) { 
      width: 100%;
      height: 500px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      
    }
`
export const Contenedor1 = styled.div`
width: 50%;
height: 1300px;
border-radius: 10px;


@media (max-width: 480px) { 
  width: 100%;
  height:auto;
    }
    @media (max-width: 767px) { 
      width: 100%;
      height:auto;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      
    }
`

export const Contenedor2 = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
}

@media (max-width: 480px) { 
display: none;
  }
  @media (max-width: 767px) { 
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    
  }

`

export const Video1 = styled.video`
width: 100%;
border-radius: 10px;
@media (max-width: 767px) { 
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 90%;
}
@media (min-width: 1200px) and (max-width: 3000px) { 
  width: 90%;
}

`


export const Video2 = styled.video`
width: 100%;
border-radius: 10px;
@media (max-width: 767px) { 
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 90%;
}
@media (min-width: 1200px) and (max-width: 3000px) { 
  width: 90%;
}
`

export const Video3 = styled.video`
width: 100%;
border-radius: 10px;
margin-top: 100px;

@media (max-width: 767px) { 
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  width: 90%;
}
@media (min-width: 1200px) and (max-width: 3000px) { 
  width: 90%;
}
`

