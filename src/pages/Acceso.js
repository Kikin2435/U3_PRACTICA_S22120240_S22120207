/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Banner } from "../components/Banner";
import { Marca } from "../components/Marca";

export function Acceso(props) {
  /* Controlador */

  //Estos maestros se deberían recuperar de una fuente de datos más adelante
  const maestros = [
    { nombre: "Germán Guzmán Guzmán", clave: "001" },
    { nombre: "Germán Gutierrez Torres", clave: "002" },
  ];

  //Variable para almacenar el valor de la clave docente capturado
  let clavedocente = "";

  function onTxtClaveChange(event) {
    clavedocente = event.target.value;
  }

  function onBotonEntrarClick(event) {
    /*Aquí va la lógica para validar el acceso */
    var maestroEncontrado = null;

    for (const maestro of maestros) {
      //alert(maestro.clave);
      if (maestro.clave == clavedocente) {
        maestroEncontrado = maestro;
        break;
      }
    }

    if (maestroEncontrado) {
      props.setActualizarMaestro(maestroEncontrado);
    } else {
      alert("Acceso denegado");
    }
  }

  /* Vista */
  return (
    <div className="Acceso">
      <Banner />
      <Marca />

      <p>Por favor registrate</p>
      <TextField
        onChange={onTxtClaveChange}
        label="Clave docente"
        type="search"
      />
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={onBotonEntrarClick}
        startIcon={<LoginIcon />}
      >
        Entrar
      </Button>
    </div>
  );
}
