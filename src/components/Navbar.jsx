import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="d-flex justify-content-between bg-primary py-2 px-5 fs-4">
            <Link to="/">🍕 Pizzería Mamma Mia!</Link>
            <Link to="/carrito">🛒: $0</Link>
        </nav>
    )
}