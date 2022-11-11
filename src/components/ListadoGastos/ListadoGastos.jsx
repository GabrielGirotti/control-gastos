import Gasto from "./Gasto/Gasto";

const ListadoGastos = ({ gastos, setEditarGasto }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Listado de Gastos" : "Aun no hay Gastos"}</h2>

      {gastos.map((gasto) => {
        return (
          <Gasto gasto={gasto} key={gasto.id} setEditarGasto={setEditarGasto} />
        );
      })}
    </div>
  );
};

export default ListadoGastos;
