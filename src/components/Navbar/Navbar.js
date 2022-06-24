import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext';
import BotonSuccess from '../BotonSuccess/BotonSuccess';
import './Navbar.css'

const Navbar = (props) => {

    const {contador} = useContext(Context)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.nombre}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">{props.apellido}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li> */}
                        <li className="nav-item">
                            <BotonSuccess />
                        </li>
                        <p className='text-light'>{contador}</p>
                    </ul>
                    </div>
                </div>
                </nav>
            {/* <p>Modalidad: {props.modalidad}</p>
            <p>Otro texto</p> */}
        </>
    )
}

export default Navbar;