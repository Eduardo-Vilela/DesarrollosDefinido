import React from 'react'
import '../../Estilos/Contacto.css'
import { useForm } from "react-hook-form";
import Navbar2 from '../../Navbar2';
import Footer from '../../Footer';
import axios from 'axios';
import { toast } from 'react-toastify';


function Contacto() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data,e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/FormularioContacto`, data)
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
    <Navbar2/>
      <div className='contacto-flex'>
         <div className='contacto-foto'>
         </div>
        <div className='contacto-form' >
                  <form className='seccioncontacto-Ajuste' onSubmit={handleSubmit(onSubmit)}>          
                  <h1 className='contacto-titulo' >Contacto</h1>
                  <p className='parrafo-contacto'>
                  Completá el formulario con tu consulta
                  <br/> 
                  y la resolveremos a la brevedad.
                  </p>
                          <input className='input-contacto' type="text" name='name'
                            {...register("name", {
                              required: true,
                              maxLength: 20,
                              pattern: /^[A-Za-z]+$/i,
                          
                            })}
                            placeholder="Nombre"
                          />
                          {errors?.nombre?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.nombre?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 20 caracteres</p>
                          )}
                          {errors?.nombre?.type === "pattern" && (
                            <p className='text-danger'>Solo caracteres alfabéticos</p>
                          )}
                          <input className='input-contacto' type="text" name='email'
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
                          <input className=' input-contacto' type="number" name='telefono'
                          {...register("telefono", 
                          { 
                            maxLength: 10,
                            required: true,                  
                            })}
                            placeholder="Telefono"
                            />
                            {errors?.telefono?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                            {errors?.telefono?.type === "maxLength" && (
                            <p className='text-danger'>El Telefono no puede exceder los 10 caracteres</p>
                          )}
                        <textarea className='input-contacto textAreaStyle' id="w3review" name="w3review" rows="3" cols="10" placeholder='Dejanos tu mensaje'
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
                        <input className='buttonContacto'  type="submit" value="Enviar →"/>
                  </form>
              </div>  
         </div>
      <Footer/>   
    </>
  )
}

export default Contacto;