import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import Cualquiera from './img/simpsons.jpg'
import './App.css';

function App() {
  return (
    <>
      <img src={Cualquiera} alt="Los Simpsons" />
      <Navbar marca="PDTC" modalidad="online"/>
      <div className="container border">
        <Formulario />
      </div>
      
    </>
  );
}

export default App;
