import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import axios from 'axios';
import './modal.css'
import { toast } from 'react-toastify';


function ModalInicio() {

    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const onSubmit = (data,e) => {
      //alert(JSON.stringify(data));
      axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/formModal`, data)
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
        <Modal className='contenedorModal' 
        show={show} 
        backdrop="static"
        keyboard={false}
        onHide={handleClose} 
        dialogClassName="modal-100h" 
        size="lg" 
        centered>
              <div className='backModal'>
                  <div className='contenedorBackModal'>
                    <h1 className='tituloModal'>¿Buscás un terreno?</h1>
                    <p className='subtituloModal'>
                        Registrate para conocer los 
                        valores y nuestras opciones de 
                        financiación
                    </p>
                </div>
              </div>  
              <div className='formModal'>
                <Modal.Body className='bodyModalForm'>
                <Modal.Header closeButton>
                    <img className='logoModal' alt='logoModal' style={{width:'40%',marginleft: '10%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg'/>
                </Modal.Header>
                   <form onSubmit={handleSubmit(onSubmit)} >
                      <input 
                          className='inputModal'
                          placeholder='Nombre'
                          {...register("name", {
                          required: "Campo requerido",
                          maxLength: {
                          value: 40,
                          message: "Máximo 40 caracteres"
                          }
                          })}
                          />
                          {errors.name && <p className='text-danger'>{errors.name.message}</p>}

                          <input 
                              className='inputModal'
                              type="text"
                              placeholder='Email'
                              {...register("email", {
                                  required: "Campo requerido",
                              pattern: {
                                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: "Dirección de mail invalida"
                              }
                              })}
                              />
                              {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                          <input 
                              className='inputModal'
                              type="number"
                              placeholder='Telefono'
                              {...register("telefono", {
                              required: "Campo requerido",
                              maxLength: {
                                  value: 20,
                                  message: "Máximo 20 caracteres"
                              }
                              })}
                              />
                              {errors.telefono && <p className='text-danger'>{errors.telefono.message}</p>}
                            <input className='buttonModal'  type="submit" value="Enviar →"/>
                   </form>
                </Modal.Body>
              </div>
        </Modal>
   </>
  )
}

export default ModalInicio