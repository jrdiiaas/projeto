import { Link } from "react-router-dom";
import "./index.css";

function Cabecalho() {
    return (
        <>
            <nav>
                <ul className="NavbarItens">
                    <li>
                        <Link exact to="../">
                            INÍCIO
                        </Link>
                    </li>
                    <li>
                        <Link exact to="../cliente/view">
                            VER TODOS OS CLIENTES
                        </Link>
                    </li>
                    <li>
                        <Link exact to="../cliente">
                            ADICIONAR CLIENTE
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Cabecalho;
