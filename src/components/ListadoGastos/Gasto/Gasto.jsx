import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import style from "react-swipeable-list/dist/styles.css";

import IconoAhorro from "../../../img/icono_ahorro.svg";
import IconoCasa from "../../../img/icono_casa.svg";
import IconoComida from "../../../img/icono_comida.svg";
import IconoGastos from "../../../img/icono_gastos.svg";
import IconoOcio from "../../../img/icono_ocio.svg";
import IconoSalud from "../../../img/icono_salud.svg";
import IconoSuscripciones from "../../../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  varios: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto, setEditarGasto, setElimiar }) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditarGasto(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => setElimiar(gasto)}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[gasto.categoria]} alt="Icono Gasto" />

            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombreGasto}</p>
              <p className="fecha-gasto">Gasto hecho el {gasto.fecha}</p>
            </div>
          </div>
          <p className="cantidad-gasto">${gasto.monto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
