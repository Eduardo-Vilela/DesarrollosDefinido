import React from 'react';
import {
    BoxPrincipal,
    SubBoxCards,
} from './Seccion11Elements';

import {Accordion } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Seccion11.css';
import { toast } from 'react-toastify';


function Seccion11() {
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        mode: "onChange"
      });
      const onSubmit = (data,e) => {
        //alert(JSON.stringify(data));
        axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/contacto/formFooter`, data)
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
      <BoxPrincipal>
       <SubBoxCards>
       <Accordion className='accordion-flex'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='tituloAcordion'>Dejanos <span style={{width:'1%'}}/> <b> un mensaje</b></Accordion.Header>
            <Accordion.Body>
            <h5 className='Subtitlofooterform'>Dejanos tu consulta y nos contactaremos lo antes posible.</h5>
              <div >
                <form className='flex-formulario'  onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputs-form1'>
                          <input className='inputInicio-form' type="text" name='nombre'
                            {...register("nombre", {
                              required: true,
                              maxLength: 20,
                              pattern: /^[A-Za-z]+$/i,
                          
                            })}
                            placeholder="Nombre"
                          />
                          {errors?.nombre?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.nombre?.type === "maxLength" && (
                            <p>El nombre no puede exceder los 20 caracteres</p>
                          )}
                          {errors?.nombre?.type === "pattern" && (
                            <p className='text-danger'>Solo caracteres alfabéticos</p>
                          )}

                          <input className='inputInicio-form' type="text" name='email'
                          {...register("email", 
                          { 
                            required: true,
                            maxLength: 50,
          
                            })} 
                            placeholder="E-mail"
                            />
                          {errors?.email?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.email?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 50 caracteres</p>
                          )}
                          <input className='inputInicio-form' type="number" name='telefono'
                          {...register("telefono", 
                          { 
                            maxLength: 10,
                            required: true,                  
                            })}
                            placeholder="Teléfono "
                            />
                            {errors?.telefono?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                            {errors?.telefono?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                          )}
                    </div> 
                    <div className='inputs-form2'>
                        <textarea id='textarea' className='textarea-formularioInicio' rows="10" cols="50" placeholder='Mensaje' name='mensaje'
                        
                        {...register("mensaje", 
                        { 
                          maxLength: 140,
                          required: true,                  
                          })}
                        />
                         {errors?.mensaje?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.mensaje?.type === "maxLength" && (
                            <p className='text-danger'>El mensaje no puede exceder los 140 caracteres</p>
                          )}


                        <div className='flexButtonFormInicio'>
                        <input className='buttonFormInicio'  type="submit" value="Enviar →"/>
                        </div>
                    </div>     
                </form>  
              </div>  
           </Accordion.Body>
        </Accordion.Item>
     </Accordion>
       </SubBoxCards>
      </BoxPrincipal>
    </>
  )
}

export default Seccion11