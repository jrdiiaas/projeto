import Cabecalho from "../Cabecalho/index.jsx";
import pessoashome from "../../assets/imgs/pessoashome.jpg";
import "./index.css";

function Home() {
    return (
        <>
            <nav className="Navbar">
                <div>
                    <h1>Início</h1>
                </div>
                <div>
                    <Cabecalho />
                </div>
            </nav>
            <div>
                <div className="TextoHome">
                    <h1>Seja bem-vindo(a)!</h1>
                    <p>É um prazer recebê-lo(a) aqui.</p>
                </div>
                <section className="SectionHome">
                    <figure>
                        <img
                            src={pessoashome}
                            alt="Pessoas Home"
                            className="ImagemPessoasHome"
                        />
                    </figure>
                </section>
            </div>
        </>
    );
}

export default Home;
