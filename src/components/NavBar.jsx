import CartWidget from './Cartwidget'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <img src="" alt="Logo" />
            <ul>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Printers</a></li>
                <li><a href="#">Insumos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}