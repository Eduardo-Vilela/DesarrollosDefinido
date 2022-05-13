import React from 'react'
import '../Componentes/Estilos/Footer.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';


function Footer() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data,e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/formSuscribite`, data)
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
      e.target.reset()
  }; 
 

  return (
    <>
     <div>
             <div className='seccion11-flex'>
                <div>
                  <h3 className='seccion11-titulos'>INFORMACIÓN</h3>
                  <p className='subtitulos-footer'>Avenida 44 949, esquina 14</p>
                  <p className='subtitulos-footer'>La Plata, Buenos Aires. 1901.</p>
                </div>
                <div>
                   <h3 className='seccion11-titulos'>CONTACTO</h3>
                   <div className='flex-iconos-footer'>
                     <div className='flex-redes' >
                       <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' className='subtitulos-footer'>
                       <img className='separador-iconos' alt='whatsapp' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-whatsapp_cpftke.svg'/>
                         WHATSAPP
                       </a>
                     </div>
                     <div className='flex-redes' >
                      <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/' className='subtitulos-footer'>
                      <img className='separador-iconos' alt='facebbok' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-facebook_zdanr8.svg'/>
                        FACEBOOK
                        </a>
                     </div>
                     <div className='flex-redes' >
                      <a href='https://www.instagram.com/desarrollos.delsud/' className='subtitulos-footer'>
                      <img className='separador-iconos' alt='instagram' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-instagram_kncmsb.svg'/>
                        INSTAGRAM
                        </a>
                     </div>
                   </div>
                </div>
                <div className='desactivacionTope'>
                   <p className='seccion11-titulos'>SUSCRIBITE</p>
                   <div className='contenedorInput-footer'>
                    {/* <input className='footer-input-bordes' placeholder='ingresá tu e-mail y enterate nuestras novedades'></input>
                    <input type={'submit'}></input> */}
                    <form className='flexFormFooter'onSubmit={handleSubmit(onSubmit)} >
                    <div> 
                    <input className='input-footer' type="text" name='email'
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
                      </div> 
                   
                      <input className='submit-footer'  type="submit" value="Enviar →"/>
              
                    </form>
                   </div>
                </div>
             </div>
             <div className='seccion11-2'>
                 <p>© 2021, Desarrollos Delsud. Todos los derechos reservados.</p>
             </div>
             <div className='seccion11-flex-footer'>
                 <div className='flex-footer-3'>
                   <div className='orden-footer-final '>
                    <h4 className='letra-footer-final'>Una empresa de </h4>
                    <img alt='logo-empresa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647522179/DESARROLLOSGRUPODELSUD/Frame2_w2z3jr.svg'/>
                  </div>
                  <div className='orden-footer-final desactivacionTope'>
                    
                    <p className='letra-footer-final'>Volver al tope </p>
                    <a href="#arriba2">
                      <img alt='flecha-footer' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647522352/DESARROLLOSGRUPODELSUD/qyyw1oxg7sy3szotvufi.svg' />
                    </a>
                  </div>
                 </div>
             </div>
     </div>
    </>
  )
}

export default Footer