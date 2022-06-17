import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark text-light">
                <div className="container-fluid">
                    <p className="mb-0">{props.marca}</p>
                </div>
            </nav>
            <p>Modalidad: {props.modalidad}</p>
            <p>Otro texto</p>
        </>
    )
}

export default Navbar;