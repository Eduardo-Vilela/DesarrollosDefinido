
import React from "react";
import InformacionAuto from "./InformacionAuto";
import InformacionUsuario from "./InformacionUsuario";
import FinPlanCanje from "./FinPlanCanje";
import axios from "axios";


class FormularioRegistro extends React.Component {
  state = {
    paso: 1,
    modeloDeAuto: "",
    marca: "",
    kilometros: "",
    valorDelAuto: "",
    nombreyapellido: "",
    email: "",
    whatsapp:""
  };

  pasoSiguiente = () => {
    const { paso } = this.state;
    this.setState({
      paso: paso + 1
    });
  };

  formPlanCanje = {
    nombre: this.state.marca,
    email:  this.state.email,
    telefono:  this.state.telefono,
    mensaje:  this.state.mensaje,
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  };

  handleEnviarForm = () => {

    axios.post(`https://www.desarrollosdelsud.com.ar/formApi/contacto/formFooter`,this.formPlanCanje)
    .then(res => {
        // perrito(res.data.mensage);
        setInterval(() => {
        
        }, 3000);
    }) 

  }

  render() {
    switch (this.state.paso) {
      case 1:
        return (
          
          <InformacionAuto
            handleInputChange={this.handleInputChange}
            pasoSiguiente={this.pasoSiguiente}    
            onClick={this.handleEnviarForm}    
          />
        );
      case 2:
        return (
          <InformacionUsuario
            handleInputChange={this.handleInputChange}
            pasoSiguiente={this.pasoSiguiente}   
            onClick={this.handleEnviarForm}
          />
        );
      case 3:
        return (
          <FinPlanCanje
            valores={this.state}
            pasoSiguiente={this.pasoSiguiente}
            onClick={this.handleEnviarForm}
            
          />
        );
      default:
        return <div>Error</div>;
  }}
}

export default FormularioRegistro;