import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  
    & h1 {
      font-family: "Poppins";
    }
  
    & h2 {
      font-family: "Poppins", sans-serif;
    }
    & h3 {
      font-family: "Poppins" , sans-serif;
      font-size: 30px;
      font-weight: 200;
    }
    body {
      font-family: 'Poppins';
    }
`

export const BoxHome = styled.div`
    width: 100%;
    z-index: 0;
    width: 100%;
    height: 100vh;
    object-fit: contain;
    background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%);

    @media (max-width: 480px) { 
      width: 100%;
    }
    @media (max-width: 767px) { 
      width: 100%;
    }
  `

  export const BoxVideo = styled.video`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit:cover;
    background-image: linear-gradient(180deg, #1D2142 0%, #1D214200 32%);
    @media (max-width: 480px) { 
      width: 100%,
    }
    @media (max-width: 767px) { 
      width: 100%
    }

  `
  export const BoxTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
    height: 100vh;

    @media (max-width: 480px) { 
      width: 100%;
      padding: 0px 25px 0px 25px;
    }
    @media (max-width: 767px) { 
      width: 100%;
      padding: 0px 25px 0px 25px;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      width: 85%;
      padding: 0px 25px 0px 25px;
      align-items: flex-start;
    }
  
  `
export const ContainerTittle = styled.div`  
  width: 65%;

  @media (max-width: 768px) { 
    width: 100%;
  }
`

  export const TituloPrincipal = styled.h1`
  font-size: 75px;
  font-weight: 600;
  color: white;
  margin-bottom: 25px;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 76%);
  line-height: 1.2em;

    @media (max-width: 480px) { 
      font-size: 40px ;
      line-height: 1.2em;
    }
    @media (max-width: 767px) { 
      font-size: 30px ;
      line-height: 1.2em;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      font-size: 57px ;
    }
  
  `
  export const SubtituloPrincipal = styled.h2`
  font-size: 25px;
  line-height: 30px;
  font-weight: 300;
  color: white;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);

    @media (max-width: 480px) { 
      font-size: 16px ;
      line-height: 30px;
    }
    @media (max-width: 767px) { 
      font-size: 20px ;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      font-size: 24px ;
    }
    
  `