import Gasto from "./Gasto/Gasto";

const ListadoGastos = ({
  gastos,
  setEditarGasto,
  setElimiar,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length > 0
              ? "Listado de Gastos"
              : "Aun no hay Gastos"}
          </h2>
          {gastosFiltrados.map((gasto) => {
            return (
              <Gasto
                gasto={gasto}
                key={gasto.id}
                setEditarGasto={setEditarGasto}
                setElimiar={setElimiar}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2>
            {gastos.length > 0 ? "Listado de Gastos" : "Aun no hay Gastos"}
          </h2>

          {gastos.map((gasto) => {
            return (
              <Gasto
                gasto={gasto}
                key={gasto.id}
                setEditarGasto={setEditarGasto}
                setElimiar={setElimiar}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
