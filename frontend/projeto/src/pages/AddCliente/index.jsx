import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../../services/cliente-requests";

function AddCliente() {
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        nome: "",
        idade: "",
        email: "",
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

        await addCliente(cliente);

        navigate("/cliente/view");
    };

    return (
        <>
            <div className="FormView">
                <form onSubmit={salvaCliente}>
                    <label>NOME</label>
                    <input
                        type="text"
                        name="nome"
                        value={cliente.nome}
                        onChange={handleChange}
                    />

                    <label>IDADE</label>
                    <input
                        type="text"
                        name="idade"
                        value={cliente.idade}
                        onChange={handleChange}
                    />

                    <label>EMAIL</label>
                    <input
                        type="text"
                        name="email"
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
