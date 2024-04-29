/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import { Acceso } from "./pages/Acceso";
import { Registro } from "./pages/Registro";
import * as React from "react";
import "./styles.css";

export default function App() {
  const [maestroActual, setMaestroActual] = React.useState(null);

  return (
    <div className="App">
      {maestroActual ? (
        <Registro
          maestro={maestroActual}
          setActualizarMaestro={setMaestroActual}
        />
      ) : (
        <Acceso setActualizarMaestro={setMaestroActual} />
      )}
    </div>
  );
}
