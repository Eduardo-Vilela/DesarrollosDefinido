import styled from "styled-components";

export const Contenedor1 = styled.div`
width: 50%;
height: 100vh;
border-radius: 10px;
@media (max-width: 480px) { 
  width: 100%;
    }
    @media (max-width: 767px) { 
      width: 100%;
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

