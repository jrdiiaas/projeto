import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../../services/cliente-requests";

function AddCliente() {
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        NOME: "",
        IDADE: "",
        EMAIL: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCliente((clienteAnterior) => {
            return {
                ...clienteAnterior,
                [name]: value,
            };
        });
    };

    const salvaCliente = async (event) => {
        event.preventDefault();
        console.log(cliente);

        await addCliente({
            nome: cliente.NOME,
            idade: cliente.IDADE,
            email: cliente.EMAIL,
        });

        navigate("/cliente/view");
    };

    return (
        <>
            <div className="FormView">
                <form
                    onSubmit={salvaCliente}
                    action="https://ifce.us9.list-manage.com/subscribe/post?u=8f9cf9e568daad496d02dbfaf&amp;id=b22483b60d&amp;f_id=001cfae3f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate=""
                >
                    <label>NOME</label>
                    <input
                        type="text"
                        name="NOME"
                        value={cliente.nome}
                        onChange={handleChange}
                    />

                    <label>IDADE</label>
                    <input
                        type="text"
                        name="IDADE"
                        value={cliente.idade}
                        onChange={handleChange}
                    />

                    <label>EMAIL</label>
                    <input
                        type="text"
                        name="EMAIL"
                        value={cliente.email}
                        onChange={handleChange}
                    />
                    <button className="buttonSubmit" type="submit">
                        salvar
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddCliente;
