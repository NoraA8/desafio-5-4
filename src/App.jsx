import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./views/Home"
import Carrito from "./views/Carrito"
import Pizza from "./views/Pizza"

export default function App () {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Carrito />} path="/carrito" />
                    <Route path="/pizza/:id" element={<Pizza />} />
                </Routes>
            </div>
        </> 
    )
}