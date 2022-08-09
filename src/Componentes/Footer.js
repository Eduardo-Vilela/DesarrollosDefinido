import React from 'react'
import { useForm } from "react-hook-form";
// import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import obtenerVideo from './obtenerVideo';
import {
  BoxPrimario,
  BoxSecundario,
  Box1,
  Box2,
  Box3,
  Seccion1,
  Seccion2,
  Seccion3,
  Seccion4,
  Seccion5,
  Seccion6,
  TitulosFooter,
  SubtitulosFooter,
  LogoRedes,
  Redes,
  InputFooter,
  TituloFooterFinal,
  LogoGrupo,
  SubBox,
  BoxAjusteFooter,
} from './FooterElements'


function Footer() {
  // let location = useLocation();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } 


  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data,e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://desarrollosdelsud.com.ar/webApi/public/formSuscribite`, data)
      .then(function (response) {
        console.log(response.data);
        toast.success('Formulario enviado!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          reset()
      })
      .catch(function (error) {
        console.log(error);
        toast.error('No se pudo enviar el formulario!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
      reset()
  }; 

  obtenerVideo('icons8-instagram_kncmsb_hnxblb.svg').then((url) => {
    const img = document.getElementById('myimg');
    img.setAttribute('src', url );
  });
  obtenerVideo('icons8-facebook_zdanr8_keyoai.svg').then((url) => {
    const img = document.getElementById('myimg2');
    img.setAttribute('src', url );
  });
  obtenerVideo('icons8-whatsapp_cpftke_v1ms2v.svg').then((url) => {
    const img = document.getElementById('myimg3');
    img.setAttribute('src', url );
  });
  obtenerVideo('Frame2_w2z3jr_oa7h3f.svg').then((url) => {
    const img = document.getElementById('logo-empresa');
    img.setAttribute('src', url );
  });
  obtenerVideo('qyyw1oxg7sy3szotvufi_clds2e.svg').then((url) => {
    const img = document.getElementById('flecha-footer');
    img.setAttribute('src', url );
  });

  return (
    <>
      {/* {location.pathname != "/formulario" ?   */}
    <BoxPrimario>
        <BoxSecundario>
 
           <Box1>
            <BoxAjusteFooter>
            <Seccion1>
              <TitulosFooter>INFORMACIÓN</TitulosFooter>
              <SubtitulosFooter >Avenida 7 840, e/ 48 y 49</SubtitulosFooter>
              <SubtitulosFooter>La Plata, Buenos Aires. 1900.</SubtitulosFooter>
            </Seccion1>
            <Seccion2>
               <TitulosFooter >CONTACTO</TitulosFooter>
                <div >
                  <Redes target="_blank" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
                    <LogoRedes id='myimg3'alt='whatsapp' src=''/>
                    WHATSAPP
                  </Redes>
                </div>
                 <div >
                  <Redes target="_blank" href='https://www.facebook.com/DesarrollosDelsud.LaPlata/' >
                  <LogoRedes id='myimg2'alt='facebbok' src=''/>
                    FACEBOOK
                  </Redes>
                </div>
                 <div  >
                   <Redes target="_blank" href='https://www.instagram.com/desarrollos.delsud/' >
                   <LogoRedes id='myimg' alt='instagram' src=''/>
                    INSTAGRAM
                    </Redes>
                 </div>
            </Seccion2>
            <Seccion3>
               <TitulosFooter>SUSCRIBITE</TitulosFooter>
               <form className='flexFormFooter'onSubmit={handleSubmit(onSubmit)} >
                    <div style={{ display: 'flex', flexDirection: 'column'}}> 
                    <InputFooter className='input-footer' type="text" name='email'
                        {...register("email", 
                        { 
                          required: true,
                          maxLength: 50,
                          
                          })} 
                          placeholder="ingresá tu e-mail y enterate nuestras novedades"
                          />
                        {errors?.email?.type === "required" && 
                        <p className='text-danger'>Este campo es obligatorio</p>}
                        {errors?.email?.type === "maxLength" && (
                          <p className='text-danger'>El nombre no puede exceder los 50 caracteres</p>
                        )}                   
                      < input style={{color:'#1D2142', padding: '10px 0px', backgroundColor: '#02010100',fontSize:'14px' , fontWeight:'600', alignSelf: 'end'}} type="submit" value="ENVIAR"/>
                      </div> 
                </form>
            </Seccion3>
            </BoxAjusteFooter>
          </Box1>
          <Box2>
            <Seccion4>
                <SubtitulosFooter style={{fontWeight:'300'}}>© 2021, Desarrollos Delsud. Todos los derechos reservados.</SubtitulosFooter>
            </Seccion4>
          </Box2>  
          <Box3>
            <SubBox>
              <Seccion5>
                <TituloFooterFinal>Una empresa de </TituloFooterFinal>
                <LogoGrupo id='logo-empresa'alt='logo-empresa' src=''/>
              </Seccion5>
              <Seccion6>
                <TituloFooterFinal  >Volver al tope </TituloFooterFinal>
                 <img onClick={ScrollToTop}  alt='flecha-footer' id='flecha-footer' style={{cursor:'pointer'}} src='' />
              </Seccion6>
            </SubBox>
          </Box3> 
         
        </BoxSecundario>
    </BoxPrimario> 
  {/* : ""}  */}
    </>
  )
}

export default Footer