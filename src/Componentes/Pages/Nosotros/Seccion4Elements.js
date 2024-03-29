import styled from 'styled-components'

export const BoxPadre = styled.div`
width: 100%;
height: 900px;


@media (max-width: 767px) { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
margin-bottom: 20px;
 }
 @media (min-width: 768px) and (max-width: 1281px) { 
  height: 600px;
}
`
export const SubBoxPadre = styled.div`
width: 100%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
padding-top: 70px;


  @media (max-width: 767px) { 
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-top: 0px;
    height: auto;
   }

   @media (min-width: 768px) and (max-width: 1281px) { 
  height: 100%;
  width: 100%;
  padding: 0 !important;
}
`

export const BoxBack2 = styled.div`
width: 49%;
height: 90vh;

border-radius: 10px;
background-image: url(https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715453/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/plantita2_tmojez_k5okl2.webp);
background-size: 90%;
background-repeat: no-repeat;
background-position-x: right;
background-position-y: center;


  @media (max-width: 767px) { 
      width: 100%;
      height: 200px;
      border-radius:0;
      background-position-x: center;
      background-size: 100%;
  }
  @media (min-width: 768px) and (max-width: 1400px) { 
  height: 100%;
  background-size: 100%;
  width: 50%;
}
`

export const BoxIntermedioNos = styled.div`
width: 65%;
text-align: left;
@media (max-width: 480px) { 
      width: 95%;
  }
  @media (max-width: 767px) { 
      width: 95%;
  }
  @media (min-width: 768px) and (max-width: 1281px) { 
    width: 60%;
  }
`








