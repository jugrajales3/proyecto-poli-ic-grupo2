const divStyle = {
  width: '18rem'
};

function Component1() {
    return (
      <div>
        <div className="card" style={divStyle}>
          <div className="card-body">
            <h5 className="card-title">Git</h5>
            <h6 className="card-subtitle mb-2 text-muted">Control de versiones</h6>
            <p className="card-text">Git es un sistema de control de versiones distribuido, lo que significa que un clon local del proyecto es un repositorio de control de versiones completo. Estos repositorios locales plenamente funcionales permiten trabajar sin conexión o de forma remota con facilidad. </p>           
          </div>
        </div>
      </div>
    );
  }
  
  export default Component1;
  