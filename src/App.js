import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import Cualquiera from './img/simpsons.jpg'
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <>
      {/* <img src={Cualquiera} alt="Los Simpsons" /> */}
      <div className="container border">
      <Navbar marca="PDTC" modalidad="online"/>
        <Formulario />
        <Contador />
      </div>
      
    </>
  );
}

export default App;
