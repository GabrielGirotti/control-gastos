import ControlPresupuesto from "../ControlPresupuesto/ControlPresupuesto";
import NuevoPresupuesto from "../NuevoPresupuesto/NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
  gastos,
  setGastos,
}) => {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>

        {presupuestoValido ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setPresupuestoValido={setPresupuestoValido}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setPresupuestoValido={setPresupuestoValido}
          />
        )}
      </header>
    </>
  );
};

export default Header;
