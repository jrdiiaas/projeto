import Cabecalho from "../Cabecalho/index.jsx";
import "./index.css";

function NoMatch() {
    return (
        <>
            <nav className="Navbar">
                <div>
                    <h1>NoMatch</h1>
                </div>
                <div>
                    <Cabecalho />
                </div>
            </nav>
            <section className="NoMatch">
                <h1>Página não encontrada</h1>
            </section>
        </>
    );
}

export default NoMatch;
