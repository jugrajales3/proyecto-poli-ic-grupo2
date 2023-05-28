const divStyle = {
	width: "18rem",
};
function Component2() {
	return (
		<div>
			<div
				className='card'
				style={divStyle}>
				<div className='card-body'>
					<h5 className='card-title'>Jenkins</h5>
					<h6 className='card-subtitle mb-2 text-muted'>
						Herramienta De Automatización De Código Abierto
					</h6>
					<p className='card-text'>
						Esta herramienta es ampliamente utilizada en el desarrollo de
						software, proporciona un entorno de integración continua que permite
						a los equipos de desarrollo automatizar tareas como la compilación,
						las pruebas y la implementación de aplicaciones. Jenkins se utiliza
						para agilizar el proceso de desarrollo y mejorar la eficiencia
						mediante la automatización de tareas repetitivas, lo que ayuda a los
						equipos a entregar software de alta calidad de manera más rápida y
						confiable.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Component2;
