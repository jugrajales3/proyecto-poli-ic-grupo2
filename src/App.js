import { useState, useEffect } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3'; 
import Component4 from './components/Component4';

function App() {

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/books')
      .then((response) => {
        return response.json()
      })
      .then((libros) => {
        setLibros(libros)
      })
  }, []); 

  return (
    <div className="container-sm">
      <div className='row mt-4 mb-4'>
        <div className="App">
          <h1>Grupo 2 - Integración Contínua</h1>
        </div>
      </div>        
      <div className='row mt-4'>
        <div className='col'>
          <Component1 />  
        </div>
        <div className='col'>
          <Component2 />  
        </div>
        <div className='col'>
          <Component3 />
        </div>
        <div className='col'>
          <Component4 />
        </div>
      </div>

      <div>
        <h1>Lista de Libros</h1>
        <ul>
          {libros.map(libro => (
            <li key={libro.id}>{libro.title} - {libro.author}</li>
          ))}
        </ul>
      </div>
    </div>   
  );
}

export default App;
