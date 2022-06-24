import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
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
} from './FooterElements'


function Footer() {
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
    axios.post(`https://prueba.desarrollosdelsud.com.ar/webApi/public/formSuscribite`, data)
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





  return (
    <>
    <BoxPrimario>
        <BoxSecundario>
           <Box1>
            <Seccion1>
              <TitulosFooter>INFORMACIÓN</TitulosFooter>
              <SubtitulosFooter >Avenida 7 840, e/ 48 y 49</SubtitulosFooter>
              <SubtitulosFooter>La Plata, Buenos Aires. 1900.</SubtitulosFooter>
            </Seccion1>
            <Seccion2>
               <TitulosFooter >CONTACTO</TitulosFooter>
                <div >
                  <Redes href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
                  <LogoRedes alt='whatsapp' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-whatsapp_cpftke.svg'/>
                     WHATSAPP
                  </Redes>
                </div>
                 <div>
                  <Redes href='https://www.facebook.com/DesarrollosDelsud.LaPlata/' >
                  <LogoRedes alt='facebbok' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-facebook_zdanr8.svg'/>
                    FACEBOOK
                  </Redes>
                </div>
                 <div  >
                   <Redes href='https://www.instagram.com/desarrollos.delsud/' >
                   <LogoRedes alt='instagram' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-instagram_kncmsb.svg'/>
                    INSTAGRAM
                    </Redes>
                 </div>
            </Seccion2>
            <Seccion3>
               <TitulosFooter>SUSCRIBITE</TitulosFooter>
               <form className='flexFormFooter'onSubmit={handleSubmit(onSubmit)} >
                    <div style={{ display: 'flex'}}> 
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
                      < input style={{color:'#1D2142',backgroundColor: '#02010100',fontSize:'13px' , fontWeight:'600'}} type="submit" value="ENVIAR"/>
                      </div> 
                </form>
            </Seccion3>
          </Box1>
          <Box2>
            <Seccion4>
                <p>© 2021, Desarrollos Delsud. Todos los derechos reservados.</p>
            </Seccion4>
          </Box2>  
          <Box3>
            <SubBox>
              <Seccion5>
                <TituloFooterFinal>Una empresa de </TituloFooterFinal>
                <LogoGrupo alt='logo-empresa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647522179/DESARROLLOSGRUPODELSUD/Frame2_w2z3jr.svg'/>
              </Seccion5>
              <Seccion6>
                <TituloFooterFinal >Volver al tope </TituloFooterFinal>
                <a href="arriba1">
                <img alt='flecha-footer' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647522352/DESARROLLOSGRUPODELSUD/qyyw1oxg7sy3szotvufi.svg' />
                </a>
              </Seccion6>
            </SubBox>
          </Box3>    
        </BoxSecundario>
    </BoxPrimario> 
    </>
  )
}

export default Footer