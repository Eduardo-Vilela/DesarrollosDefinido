import React from 'react'
import { useForm } from 'react-hook-form';
import '../../Estilos/Plancanje.css'
import Navbar2 from '../../Navbar2'
import Seccion1 from './Seccion1';


function InformacionAuto (props) {

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
          <div style={{height: '8%'}}>
            <h3 className='tituloFormAuto' >Información del vehículo</h3>
            <p className='subtituloFormAuto'>
            Completá el formulario
            </p>
        </div>
        <div>
        <form className='contenedor-auto' onSubmit={handleSubmit(onSubmit)} >
                          <div className='flexInputsAuto'>
                            <div className='ajusteInputsAuto'>
                            <label className='label-auto'>Modelo De Auto</label>
                            <input className='input-formAuto' type="text" name='modeloDeAuto'
                              {...register("modeloDeAuto", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                               
                                onChange={props.handleInputChange}
                               
                                placeholder="Modelo De Auto"
                                />
                                {errors?.modeloDeAuto?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.modeloDeAuto?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}
                              <label className='label-auto' >Marca</label>
                              <input className='input-formAuto' type="text" name='marca'
                              {...register("marca", 
                              { 
                                required: true,
                                maxLength: 50,
                    
                                })} 
                                onChange={props.handleInputChange}
                           
                                placeholder="Marca"
                                />
                              {errors?.marca?.type === "required" && 
                              <p className='text-danger'>Este campo es obligatorio</p>}
                              {errors?.marca?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 50 caracteres</p>
                              )}
                            </div>  
                            <div className='ajusteInputsAuto'>
                            <label className='label-auto' >Kilometros</label>
                            <input className='input-formAuto' type="text" name='kilometros'
                              {...register("kilometros", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                                onChange={props.handleInputChange}
                               
                                placeholder="0.000"
                                />
                                {errors?.kilometros?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.kilometros?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}


                              <label className='label-auto' >Valor del auto</label>
                              <input className='input-formAuto' type="text" name='valorDelAuto'
                              {...register("valorDelAuto", 
                              { 
                                maxLength: 10,
                                required: true,                  
                                })}
                                onChange={props.handleInputChange}
                                placeholder="0.000.000"
                                />
                                {errors?.valorDelAuto?.type === "required" && 
                                <p className='text-danger'>Este campo es obligatorio</p>}
                                {errors?.valorDelAuto?.type === "maxLength" && (
                                <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                              )}
                           </div> 
                        </div>  
                        <div>
                            <button type="submit" className='botonGeneral' onClick={props.pasoSiguiente} >Siguiente →</button>
                        </div>      
                    </form> 
            </div>
        </div>        
    </div>
    </>
  )
}

export default InformacionAuto