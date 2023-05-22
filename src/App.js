import './App.css';
import './components/Component1';
import './components/Component2';
import './components/Component3';
import './components/Component4';

function App() {
  return (
    <div className="App">
      
        <h1>Grupo 2 - Integración Contínu</h1>
        <div className='row'>
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
      
    </div>
  );
}

export default App;
