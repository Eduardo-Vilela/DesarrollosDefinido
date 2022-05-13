import React from 'react'
import { useForm } from "react-hook-form";
import Navbar2 from '../../Navbar2';
import Seccion1 from './Seccion1';


function InformacionUsuario (props) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // y
  return (
    <>
    <Navbar2/>
    <Seccion1/>
    <div className='contenedorFlex-auto'>
      <div className='back-auto'>
          <div >
            <h3 className='tituloFormAuto' >Información del vehículo</h3>
            <p className='subtituloFormAuto'>
            Completá el formulario
            </p>
        </div>
        <form className='contenedor-auto' onSubmit={handleSubmit(onSubmit)} >
                          <div className='flexInputsAutoform2'>
                            <div className='ajusteInputsAuto'>
                            <label className='label-autoform2'>Nombre y Apellido</label>
                            <input className='input-formAuto' type="text" name='nombreyapellido'
                              {...register("nombreyapellido", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                                onChange={props.handleInputChange}
                               
                                placeholder="Nombre y Apellido"
                                />
                                {errors?.NombreyApellido?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.NombreyApellido?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}
                              <label className='label-autoform2'>E-mail</label>
                            <input className='input-formAuto' type="text" name='email'
                              {...register("email", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                                onChange={props.handleInputChange}
                                
                                placeholder="E-mail"
                                />
                                {errors?.Email?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.Email?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}
                             

                              <label className='label-autoform2' >WhatsApp</label>
                              <input className='input-formAuto' type="text" name='whatsapp'
                              {...register("whatsApp", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                                onChange={props.handleInputChange}
                                
                                placeholder="whatsApp"
                                />
                                {errors?.whatsApp?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.whatsApp?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}
                           </div> 
                        </div>  
                        <div>
                            <button type="submit" className='buttonAutoform2' onClick={props.pasoSiguiente} >Cotizar →</button>
                        </div>      
                    </form> 
        </div>        
    </div>
    </>
  )
}

export default InformacionUsuario