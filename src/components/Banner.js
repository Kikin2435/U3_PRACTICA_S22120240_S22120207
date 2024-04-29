/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import * as React from "react";

export function Banner() {
  return (
    <div className="Banner">
      <h1>Aulas Tecnológicas</h1>
      <h2>Registro</h2>
      <img
        src="https://www.cdcuauhtemoc.tecnm.mx/wp-content/uploads/2022/01/P_a_cuautitlan.jpg"
        alt=""
        width={149}
        style={{ position: "absolute", top: "21px", right: "21px" }}
      />
      <img
        src="https://surguanajuato.tecnm.mx/images/grecas/client-logo-7.png"
        alt=""
        width={250}
        style={{ position: "absolute", top: "12px", left: "0px" }}
      />
    </div>
  );
}
