import styled from "styled-components";

export const BoxPrincipal5 = styled.div`
 width: 100%;
 height: 100vh;
 background-image:url(https://res.cloudinary.com/grupo-delsud/image/upload/v1647268505/DESARROLLOSGRUPODELSUD/asdfadsfasd_1_aeddc9.png) !important;
 background-size: cover;
    @media (max-width: 480px) { 
        width: 100%;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 100%;
        height: 500px;;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      width: 100%;
      height: 500px;
   }
`
export const BoxSecundario5 = styled.div`
 width: 80%;
 height: 100vh;
 margin: auto;
 text-align: center;
 display: flex;
 flex-direction: row;
 justify-content: center;

    @media (max-width: 480px) { 
        width: 100%;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 100%;
        height: 50vh;
    }
    @media (min-width: 768px) and (max-width: 1199px) { 
      width: 100%;
      height: 500px;
   }
`
export const SlideSwiperSeccion5 = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    @media (max-width: 480px) { 
        width: 80%;
        height: 50vh;
    }
    @media (max-width: 767px) { 
        width: 80%;
        height: 50vh;
    }
`
export const ButtonSlide5 = styled.a`
outline: none;
    width: 30%;
    height: 5vh;
    font-family: "Poppins", Sans-serif;
    font-size: 18px;
    color: white !important;
    font-weight: 500;
    background-color: #82AB29;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #FFFFFF30;
    border-radius: 30px 30px 30px 30px;
    padding: 15px 15px 15px 15px;
text-decoration: none !important;

        @media (max-width: 480px) { 
            width: 40%;
            height: 5vh;
            font-size:15px;
        }
        @media (max-width: 767px) { 
            width: 100%;
            width: 40%;
            height: 5vh;
            font-size:15px;
        }
        @media (min-width: 768px) and (max-width: 1199px) { 
            width: 50%;
            height: 8vh;
            font-size:15px;
        }
`