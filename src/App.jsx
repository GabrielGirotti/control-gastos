import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ListadoGastos from "./components/ListadoGastos/ListadoGastos";
import Modal from "./components/Modal/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);

  const [editarGasto, setEditarGasto] = useState({});

  const [animarForm, setAnimarForm] = useState(false);

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
    setGastos([...gastos, gasto]);
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
            <ListadoGastos gastos={gastos} setEditarGasto={setEditarGasto} />
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
        />
      )}
    </div>
  );
}

export default App;
