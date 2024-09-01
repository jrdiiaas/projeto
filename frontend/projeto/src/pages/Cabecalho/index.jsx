import { Link } from "react-router-dom";
import "./index.css";

const handleLogout = () => {
    localStorage.removeItem("token");
    // Redirecionar para a página inicial ou de login após o logout
    window.location.href = "/login"; // ou use 'navigate' se estiver usando dentro de um componente com acesso
};
function Cabecalho() {
    return (
        <>
            <nav>
                <ul className="NavbarItens">
                    <li>
                        <Link to="../">INÍCIO</Link>
                    </li>
                    <li>
                        <Link to="../cliente/view">VER TODOS OS CLIENTES</Link>
                    </li>
                    <li>
                        <Link to="../cliente">ADICIONAR CLIENTE</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={handleLogout}>
                            SAIR
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Cabecalho;
