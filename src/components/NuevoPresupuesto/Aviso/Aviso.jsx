

const Aviso = ({children, tipo}) => {
	return <div className={`alerta ${tipo}`}>{children}</div>;
};

export default Aviso;
