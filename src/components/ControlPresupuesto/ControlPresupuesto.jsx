const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const formatearDinero = (dinero) => {
    return dinero.toLocaleString("en", {
      style: "currency",
      currency: "EUR",
    });
  };

  const gastoList = gastos.map((gasto) => gasto.monto);

  const gastoSuma = gastoList.reduce((a, b) => a + b, 0);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>Grafica</div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatearDinero(presupuesto)}
        </p>

        <p>
          <span>Gasto:</span> {formatearDinero(gastoSuma)}
        </p>

        <p>
          <span>Disponible:</span> {formatearDinero(presupuesto - gastoSuma)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
