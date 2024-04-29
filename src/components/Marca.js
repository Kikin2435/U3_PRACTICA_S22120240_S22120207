/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import * as React from "react";

export function Marca() {
  return (
    <div className="Marca">
      <h10>Elaborado por:</h10>
      <img
        src="https://i.pinimg.com/474x/8e/8d/8c/8e8d8ccae55f6eb103e34436fa7c93ea.jpg"
        alt=""
        width={20}
        style={{ position: "absolute", bottom: "5px", right: "300px" }} // Fija la imagen en la esquina inferior derecha
      />
      <img
        src="https://pm1.aminoapps.com/6735/c44d6569eec2991ada7c3c7638418f4b884568d4v2_128.jpg"
        alt=""
        width={29}
        style={{ position: "absolute", bottom: "5px", right: "265px" }} // Ajusta la posición según necesites
      />
    </div>
  );
}
