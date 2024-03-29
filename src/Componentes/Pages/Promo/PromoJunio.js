import React,{useState,useEffect} from 'react'
import{
BoxPrincipal,
SubBox,
Box1,
Box2,
Logo,
Titulo,
SubTitulo,
Container,
ContenedorForm,
TituloForm,
ContenedorInputs,
LabelInputs,
InputForm ,
ButtonForm,
SubContenedorForm,
InputSelect,
ContenedorInputRange,
BoxButton,
BoxTitulo,
LabelInputRange,
ContenedorNumeros,
NumerosSlider,
Errores ,
BoxPrincipalModal,
TituloModal,
ContenedorBoxsModal,
Box1Modal,
Box2Modal,
Box3Modal,
Box4Modal,
BoxTituloModal,
BoxButtonModal,
SubtitulosModal,
BoxImagenDesarrolloModal,
ImagenDesarrolloModal,
NumeroMonto,
ButtonModal,
Parrafito,
ButtonFormFalso,
CajaLogo,
} from './PromoElements'
import { useForm} from "react-hook-form";
import axios from "axios";
import { Modal } from 'rsuite';
import './range.css'
import 'rsuite/dist/rsuite.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './icono.css'
import'../../FooterElements'


var montoTotal=0;
function PromoJunio() {

   const [value, setValue] = useState(0);
    const [formDatos,setFormDatos]= useState({cuotas:"84 meses", nombre:"", Desarrollo:"La Escondida - Los Hornos", montoAInvertir:""});
    const [cuotas, setCuotas] = useState();
    const [nombre, setNombre] = useState();
    const [montoCuotas,setMontoCuotas]= useState();
    const [fotoDesarrollo,setFotoDesarrollo] = useState();
    const [buttonFalso,setButtonFalso] = useState(true);




    const onChangeFormDatos =(e)=> {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
          });
      };
  
      useEffect(()=>{   
        if(formDatos.Desarrollo === "La Escondida - Los Hornos"){
        setFotoDesarrollo(
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715434/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_uj96z1_n7zhlv.webp'
        )
      }
      if(formDatos.Desarrollo === "Las Victorias - Abasto"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_184_j7j7rc_fkyrds.webp'
        
        )
      }
      if(formDatos.Desarrollo === "La Campiña - Ángel Etcheverry"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715436/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a_hdxe5y_qzvlhe.webp'
        
        )
      }
      if(formDatos.Desarrollo === "El Juncal - Lisandro Olmos"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715487/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/eljuncalLetras_xlttzf_kp4bnu.webp'
        
        )
      }
      if(formDatos.Desarrollo === "Las Orianas - Melchor Romero"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658781051/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/melchore-romero-las-orianas_fyusq7.webp'
        
        )
      }
       
      if(formDatos.Desarrollo === "Latitud 34 - Los Hornos"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715498/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Groupaaa_vvoggh_mhkmve.webp'
        
        )
      }
          
        if(formDatos.cuotas === "12 meses"){
            montoTotal =Math.round(((4800000 - value) / 12));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "24 meses"){
            montoTotal =Math.round(((4800000 - value) / 24));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "36 meses"){
            montoTotal =Math.round(((4800000 - value) / 36));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "48 meses"){
            montoTotal =Math.round(((4800000 - value) / 48));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "60 meses"){
          montoTotal =Math.round(((4800000 - value) / 60));
          setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "72 meses"){
          montoTotal =Math.round(((4800000 - value) / 72));
          setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas === "84 meses"){
          montoTotal =Math.round(((4800000 - value) / 84));
          setMontoCuotas(montoTotal);
        }
        
        if(formDatos.cuotas != null){
          setCuotas(formDatos.cuotas);
        }

        if(formDatos.nombre != null){
          setNombre(formDatos.nombre);
        }
         

      },[value, formDatos]);

    // ENVIAR FORMULARIO//
    const currencyMask = (e) => {
      let valor = e.toString();
      valor = valor.replace(/\D/g, "");
      valor = valor.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      valor = valor.split('').reverse().join('').replace(/^[/.]/,'');
      e=valor
      return e;
  }


    const {
      register,
      reset,
      formState: { errors,isValid},
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const onSubmit = (data) => {   
      //setFormDatos({nombre:data.nombre, Desarrollo: data.Desarrollo, cuotas: data.cuotas}) 
        let formData = new FormData();
        formData.append("data",JSON.stringify(data))
        formData.append("value",JSON.stringify(currencyMask(value)))
        formData.append("montoCuotas",JSON.stringify(currencyMask(montoCuotas)))
        formData.append("cantCuotas",JSON.stringify(formDatos.cuotas))
        formData.append("nombre",JSON.stringify(formDatos.nombre))
        
        
      axios.post(`https://desarrollosdelsud.com.ar/webApi/public/FormularioPromo`, formData)
      .then(function (response) {
        reset()
      })
      .catch(function (error) {
        console.log(error);
        reset()
      });
  
       //setSubmitValue(data);
    };

    //MODAL
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
      setButtonFalso(false);
    };
    const handleClose = () => setOpen(false);


    console.log(buttonFalso)
  return (
    <>
    <Container>
     <BoxPrincipal>
        <SubBox>
          <Box1>
            <CajaLogo>
              <Logo width='200' height='100' alt='logoPrincipal' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715464/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/PromoJunio/Logo_-_Desarrollos_Delsud_-_Web-02_ex4bbc_g4umpo.webp'/>
            </CajaLogo>
            <div className='centrarMobile'>
            <Titulo>Tu terreno propio financiado al 100% </Titulo>
            <SubTitulo>Construí recuerdos en tu propiedad</SubTitulo>
            </div>
          </Box1>
          <Box2>
            <ContenedorForm className='formInputs' onSubmit={handleSubmit(onSubmit)}>
                <BoxTitulo>
                  <TituloForm>Calculá tu cuota</TituloForm>
                </BoxTitulo>
                <SubContenedorForm>
                    <ContenedorInputs>
                        <LabelInputs  htmlFor="nombre">Nombre </LabelInputs>
                        <InputForm 
                        name='nombre'
                        {...register("nombre", {
                        required: "Campo requerido",
                        maxLength: {
                            value: 40,
                        }
                        })}
                        onChange ={(e)=>{onChangeFormDatos(e)}}
                        />
                        {errors.nombre && <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                    <ContenedorInputs>
                    <LabelInputs  htmlFor="phone">Teléfono </LabelInputs>
                    <InputForm 
                        type="number"
                        {...register("phone", {
                        required: "Campo requerido",
                        maxLength: {
                            value: 20,
                        }
                        })}
                        />
                        {errors.phone &&  <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                </SubContenedorForm>
                <SubContenedorForm>
                    <ContenedorInputs>
                    <LabelInputs htmlFor="Desarrollo">Seleccioná el desarrollo</LabelInputs>
                    <InputSelect name='Desarrollo'
                        style={{borderRadius:'10px'}}
                        {...register("Desarrollo", { required: "*Campo requerido",})}
                        onChange ={(e)=>{onChangeFormDatos(e)}}
                        >
                        <option value="La Escondida - Los Hornos"  selected="La Escondida - Los Hornos" >La Escondida - Los Hornos</option>
                        <option value="Las Victorias - Abasto">Las Victorias - Abasto</option>
                        <option value="El Juncal - Lisandro Olmos">El Juncal - Lisandro Olmos</option>
                        <option value="La Campiña - Ángel Etcheverry">La Campiña - Ángel Etcheverry</option>
                        <option value="Las Orianas - Melchor Romero">Las Orianas - Melchor Romero</option>
                        </InputSelect>
                        {errors.lote &&  <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                    <ContenedorInputs>
                    <LabelInputs htmlFor="cuotas">Seleccioná la cantidad de cuotas</LabelInputs>
                       <InputSelect name="cuotas" {...register("cuotas", { required: true })} onChange ={(e)=>{onChangeFormDatos(e)}}>
                            <option value="12 meses" > 12 meses</option>
                            <option value="24 meses">24 meses</option>
                            <option value="36 meses">36 meses</option>
                            <option value="48 meses">48 meses</option>
                            <option value="60 meses">60 meses</option>
                            <option value="72 meses" >72 meses</option>
                            <option value="84 meses" selected="84 meses" > 84 meses </option>
                      </InputSelect>
                        
                    </ContenedorInputs> 
                </SubContenedorForm>
                <ContenedorInputRange>
                <div className='TituloRange'>
                  <LabelInputRange htmlFor="Cuotas">Seleccioná el anticipo</LabelInputRange>
                </div>
                <div className='calculador-slider'>
                    <RangeSlider
                    // className='slider-filtro'
                    // progress      
                    // step={1000}            
                    // min={5000}
                    // max={2000000}
                    // value={value}
                    // onChange={value => {
                    //   setValue(value);
                    //   }}   
                    name='montoAInvertir'

                            type="range"
                            className='slider-filtro'  
                            step={1000}  
                            min={0.0}
                            max={2000000}
                            value={value}
                            onChange={e => setValue(e.target.value)} 
                    />  
                </div>    
                <ContenedorNumeros>  
                      <NumerosSlider>$ {currencyMask(value)}</NumerosSlider>
                      <NumerosSlider>$2.000.000</NumerosSlider>
                   </ContenedorNumeros>
                </ContenedorInputRange>
                <BoxButton>
                  <ButtonFormFalso  onClick={() => handleOpen('xs')}  type='button' className={`${buttonFalso ? "desactivar" : "activar"}`} disabled={!isValid} value='COTIZAR' /> 
                  <ButtonForm className={`${buttonFalso ? "activar" : "desactivar"}`}  disabled={!isValid} type="submit" onClick={() => handleOpen('xs')} >COTIZAR</ButtonForm> 
                </BoxButton>
            </ContenedorForm>
          </Box2>
        </SubBox> 
     </BoxPrincipal>
     </Container>

     <Modal style={{display:'flex',flexDirection:'column',justifyContent:'center', background: '#000000c4'}} size={'lg'} open={open} onClose={handleClose}>
      <BoxPrincipalModal>
        <BoxTituloModal>
          <TituloModal> <span className="modal-title">¡Gracias {nombre}!</span></TituloModal>
        </BoxTituloModal>
        <ContenedorBoxsModal>
          <Box1Modal>
            <SubtitulosModal>Consultaste por </SubtitulosModal>
            <BoxImagenDesarrolloModal>
              <ImagenDesarrolloModal src={fotoDesarrollo}></ImagenDesarrolloModal>
            </BoxImagenDesarrolloModal>
            <SubtitulosModal>en </SubtitulosModal><NumeroMonto> {cuotas} </NumeroMonto>
          </Box1Modal>    
          <Box2Modal>
            <Box4Modal>
            <SubtitulosModal>El valor de tu cuota es de : <span></span>  </SubtitulosModal>
            </Box4Modal>
            <Box3Modal>
            <NumeroMonto>${currencyMask(Math.round(montoCuotas))}</NumeroMonto>
            </Box3Modal>
          </Box2Modal>     
        </ContenedorBoxsModal>
        <BoxButtonModal>
          <Parrafito>El resultado proveniente del siguiente simulador es meramente referencial, no reviste carácter contractual ni está sujeto a una futura compra. <br></br> La cuota es ajustable con el IPC registrado por el INDEC.</Parrafito>
          <br></br><br></br>
          <ButtonModal onClick={handleClose} appearance="subtle">
            VOLVER A CALCULAR
          </ButtonModal>
        </BoxButtonModal>
      </BoxPrincipalModal>  
      </Modal>
    </>
  )
}

export default PromoJunio