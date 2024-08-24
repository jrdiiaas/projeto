import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho/index.jsx";

function Cliente() {
    return (
        <>
            <nav className="Navbar">
                <div>
                    <h1>Cliente</h1>
                </div>
                <div>
                    <Cabecalho />
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Cliente;
