import React from 'react'
import {Modal,ButtonToolbar,Button} from 'rsuite'
import {BoxPrincipal,Box1,Box2,InputModal,BoxForm,LogoModal,BoxLogo,BoxInputs,SubBox,Titulo,Parrafo,BoxButtonModal,ButtonInput } from './ModalElements'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';


function ModalInicio() {
    const [open, setOpen] = React.useState(true);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);

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
      <Modal  size={'md'} open={open} onClose={handleClose}  >
        <Modal.Header>
        </Modal.Header>
        <BoxPrincipal>
          <Box1>
           <SubBox>
            <Titulo>¿Buscás un terreno?</Titulo>
            <Parrafo >
              Registrate para  <b>conocer los 
              valores</b>  y nuestras <b>   opciones de 
              financiación.</b> 
            </Parrafo>
           </SubBox>
          </Box1>
          <Box2>
            <BoxLogo>
            <LogoModal  alt='logoModal'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg'/>
            </BoxLogo>
            <BoxInputs>
                <BoxForm onSubmit={handleSubmit(onSubmit)} >
                <InputModal 
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
                    <InputModal 
                    type="number"
                    placeholder='Teléfono'
                    {...register("telefono", {
                        required: "Campo requerido",
                        maxLength: {
                        value: 20,
                        message: "Máximo 20 caracteres"
                    }
                    })}
                    />
                    {errors.telefono && <p className='text-danger'>{errors.telefono.message}</p>}
                    <InputModal 
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
                   <BoxButtonModal>
                     <ButtonInput className='buttonModal'  type="submit" value="Enviar"/>
                   </BoxButtonModal>  
                </BoxForm>
             </BoxInputs>
          </Box2>
        </BoxPrincipal>
      </Modal>
    </>
  )
}

export default ModalInicio