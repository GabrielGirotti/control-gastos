import { useState, useEffect } from "react";
import BtnCierre from "../../img/cerrar.svg";
import Gasto from "../ListadoGastos/Gasto/Gasto";
import Aviso from "../NuevoPresupuesto/Aviso/Aviso";

const Modal = ({ setModal, animarForm, setAnimarForm, guardarGasto, editarGasto }) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [monto, setMonto] = useState(0);
  const [categoria, setCategoria] = useState("");

  const [msje, setMsje] = useState("");

  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      setNombreGasto(editarGasto.nombreGasto)
    }
    
  }, [editarGasto])
  

  // Generando ID para el objeto de gasto
  const random = Math.random().toString(36).substring(2);
  const fechaRandom = Date.now().toString(36);

  const id = random + fechaRandom;

  // Generando fecha para el objeto de gasto
  const fechaDate = new Date();
  const opcionesFecha = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  const fecha = fechaDate.toLocaleDateString("es-ES", opcionesFecha);

  const handleCierre = () => {
    setAnimarForm(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || categoria === "") {
      setMsje("Todos los campos son obligatorios");
      return;
    }

    if (monto < 0 || !monto) {
      setMsje("El monto debe ser mayor a cero");
      return;
    }

    guardarGasto({ nombreGasto, monto, categoria, id, fecha });

    setMsje("");
    setMonto(0);
    setNombreGasto("");
    handleCierre();
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img alt="Boton cierre modal" src={BtnCierre} onClick={handleCierre} />
      </div>
      <form
        className={`formulario ${animarForm ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{Object.keys(editarGasto).length > 0 ? 'Editar Gasto' : 'Nuevo gasto'}</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Agrega tu nuevo gasto..."
            id="nombre"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="monto">Monto</label>
          <input
            type="number"
            placeholder="Agrega el monto gastado..."
            id="monto"
            value={monto}
            onChange={(e) => {
              setMonto(Number(e.target.value));
            }}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          >
            <option value="">Seleccione la categoria</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="varios">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

          <input type="submit" value={Object.keys(editarGasto).length > 0 ? 'Editar' : 'Guardar'} />
        </div>

        {msje && <Aviso tipo="error">{msje}</Aviso>}
      </form>
    </div>
  );
};

export default Modal;
