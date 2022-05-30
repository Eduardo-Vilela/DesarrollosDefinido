import styled from 'styled-components'

export const BoxPadre = styled.div`
width: 100%;
height: 800px;

@media (max-width: 480px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;

}
@media (max-width: 767px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;

 }
`
export const SubBoxPadre = styled.div`
width: 100%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 480px) { 
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 350px;
  }
  @media (max-width: 767px) { 
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 350px;
   }
`

export const BoxBack2 = styled.div`
width: 50%;
height: 90vh;
margin: auto;
border-radius: 20px;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1647546408/DESARROLLOSGRUPODELSUD/pexels-karolina-grabowska-4207907_1_buv9vz.jpg);
background-size: cover;

  @media (max-width: 480px) { 
      width: 100%;
      height: 40vh;
  }
  @media (max-width: 767px) { 
      width: 100%;
      height: 40vh;
  }
`