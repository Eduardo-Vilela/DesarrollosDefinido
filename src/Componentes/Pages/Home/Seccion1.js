import React from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

/* style */
import{ 
BoxHome,
BoxVideo,
BoxTitulo,
TituloPrincipal,
Container,
SubtituloPrincipal,
ContainerTittle,
} from '../Home/Seccion1Elements'


function Seccion1() {

  const storage = getStorage()
  const storageRef = ref(storage, 'Home/banner.mp4');

  const llamando = () => {
    getDownloadURL(storageRef).then((url) => {

      let video = document.getElementById('videoEjemplo');
      video.setAttribute('src', url);
      })
      .catch((error) =>{
        alert('no anda perri!')
      });
  };

 
  return (
    <>
     <Container>   
      <BoxHome  >
        <BoxVideo  loop autoPlay muted  className='videoInicio'>
            <source 
            src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1658776500/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Banner_-_Home_-_Final_q33yu0.mp4'
                type="video/mp4"
            />
        </BoxVideo>
        {/* <video id='videoEjemplo' src=""  width='400px' height='400px' controls autoPlay type="video/mp4"></video>
        <button onClick={llamando} >llamame pa</button> */}
        <BoxTitulo>
          <ContainerTittle>
            <TituloPrincipal>  Tenemos el terreno ideal para vos y tu familia  </TituloPrincipal>
            <SubtituloPrincipal>Contamos con una amplia variedad de terrenos para que encuentres <br/> el que mejor se adapte a tus necesidades.</SubtituloPrincipal>
          </ContainerTittle>
        </BoxTitulo>
      </BoxHome>
     </Container>
    </>
  )
}

export default Seccion1