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
                        <Link to="../cliente/view">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="../cliente/admin">POSTS</Link>
                    </li>
                    <li>
                        <Link to="../cliente">INSCREVER-SE</Link>
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
