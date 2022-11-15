import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ListadoGastos from "./components/ListadoGastos/ListadoGastos";
import Modal from "./components/Modal/Modal";
import { generarId } from "./functions/functions";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);

  const [editarGasto, setEditarGasto] = useState({});

  const [elimiar, setElimiar] = useState({});

  const [animarForm, setAnimarForm] = useState(false);

  useEffect(
    () => {
      if (Object.keys(elimiar).length > 0){
      const gastosVigentes = gastos.filter((gasto) => elimiar.id !== gasto.id);
      setGastos(gastosVigentes);
      setElimiar({})
    }
    },
    [elimiar]
  );

  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarForm(true);
      }, 300);
    }
  }, [editarGasto]);

  const handleModal = () => {
    setModal(true);
    setEditarGasto({});
    setTimeout(() => {
      setAnimarForm(true);
    }, 300);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
    } else {
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
    }
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
        gastos={gastos}
      />

      {presupuestoValido && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              setElimiar={setElimiar}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
              onClick={handleModal}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarForm={animarForm}
          setAnimarForm={setAnimarForm}
          guardarGasto={guardarGasto}
          editarGasto={editarGasto}
          setEditarGasto={setEditarGasto}
        />
      )}
    </div>
  );
}

export default App;
