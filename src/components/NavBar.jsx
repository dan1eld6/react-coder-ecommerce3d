import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="./3dworld.png" className="iconos" alt="logo" />3DWORLD
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicios">
                                <img src="/servicios.png" className="iconos" alt="servicios" />Servicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/impresoras">
                                <img src="/printers.png" className="iconos" alt="printers" />Printers
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/insumos">
                                <img src="/filament.png" className="iconos" alt="insumos" />Insumos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">
                                <img src="/shopping-cart.png" className="iconos" alt="carrito" />Carrito
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#acerca-de">
                                <img src="/info.png" className="iconos" alt="nosotros" />Nosotros
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}