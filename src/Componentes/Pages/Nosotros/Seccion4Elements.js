import styled from 'styled-components'

export const BoxPadre = styled.div`
width: 100%;
height: 900px;

@media (max-width: 480px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 740px;

}
@media (max-width: 767px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 740px;

 }
 @media (min-width: 768px) and (max-width: 1199px) { 
  height: 700px;
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
    justify-content: space-between;
    
  }
  @media (max-width: 767px) { 
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
   
   }

   @media (min-width: 768px) and (max-width: 1199px) { 
  height: 100%;
  width: 90%;
}
`

export const BoxBack2 = styled.div`
width: 70%;
height: 90vh;

border-radius: 20px;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1647546408/DESARROLLOSGRUPODELSUD/pexels-karolina-grabowska-4207907_1_buv9vz.jpg);
background-size: 90%;
background-repeat: no-repeat;
background-position-x: right;
background-position-y: center;

  @media (max-width: 480px) { 
      width: 100%;
      height: 30%;
      border-radius:0;
      background-position-x: center;
  }
  @media (max-width: 767px) { 
      width: 100%;
      height: 30%;
      border-radius:0;
      background-position-x: center;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  height: 70%;
}
`