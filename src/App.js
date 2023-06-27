import { useState, useEffect } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3'; 
import Component4 from './components/Component4';

function App() {

  const [libros, setLibros] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/books')
      .then((response) => {
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      .then((libros) => {
        setLibros(libros)
      })
      .catch(error => {
        console.error("Error fetching data", error);
        setError(error);
      })
  }, []); 

  return (
    <div className="container-md">
      <div className='row mt-4 mb-4'>
        <div className="App">
          <h1>Grupo 2 - Integración Contínua</h1>
        </div>
      </div>        
      <div className='row mt-4'>
        <div className='col mb-2'>
          <Component1 />  
        </div>
        <div className='col mb-2'>
          <Component2 />  
        </div>
        <div className='col mb-2'>
          <Component3 />
        </div>
        <div className='col mb-2'>
          <Component4 />
        </div>
      </div>
      <div className='row mt-4 mb-4 ms-3 me-3'>
        <h1>Lista de Libros</h1>
        <table className="table ">
          <thead>
            <tr>              
              <th scope="col">Título</th>
              <th scope="col">Autor</th>              
            </tr>
          </thead>
          <tbody>            
              {libros.map(libro => (
              <tr>
                <td key={libro.id}>{libro.title}</td>
                <td>{libro.author}</td>
              </tr>
              ))}      
          </tbody>
        </table>
      </div>
    </div>   
  );
}

export default App;
