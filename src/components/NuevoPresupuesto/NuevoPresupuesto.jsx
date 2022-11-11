import { useState } from "react";
import Aviso from "./Aviso/Aviso";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setPresupuestoValido,
}) => {
  const [aviso, setAviso] = useState("");

  const handlePresu = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setAviso("No es un presupuesto valido");
      return;
    }

    setAviso("");
    setPresupuestoValido(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresu} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Agrega tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Agregar" />

        {aviso && <Aviso tipo="error">{aviso}</Aviso>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
