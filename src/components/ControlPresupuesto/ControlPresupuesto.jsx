import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setPresupuestoValido,
}) => {
  const formatearDinero = (dinero) => {
    return dinero.toLocaleString("en", {
      style: "currency",
      currency: "EUR",
    });
  };

  const gastoList = gastos.map((gasto) => gasto.monto);

  const gastoSuma = gastoList.reduce((a, b) => a + b, 0);

  const porcentaje = ((gastoSuma * 100) / presupuesto).toFixed(2);

  const handleReiniciar = () => {
    const confirmacion = confirm("Deseas reiniciar la app?");

    if (confirmacion) {
      setPresupuesto(0);
      setGastos([]);
      setPresupuestoValido(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathTransitionDuration: 2,
            pathColor: porcentaje > 100 ? "#DC2626" : "var(--azul)",
            textColor: porcentaje > 100 ? "#DC2626" : "var(--azul)",
            trailColor: "#F5F5F5",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button type="button" onClick={handleReiniciar} className="reset-app">
          Reiniciar App
        </button>
        <p>
          <span>Presupuesto:</span> {formatearDinero(presupuesto)}
        </p>

        <p>
          <span>Gasto:</span> {formatearDinero(gastoSuma)}
        </p>

        <p className={presupuesto - gastoSuma < 0 ? "negativo" : ""}>
          <span>Disponible:</span> {formatearDinero(presupuesto - gastoSuma)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
