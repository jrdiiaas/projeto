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
                <form onSubmit={salvaCliente}>
                    <label>NOME</label>
                    <input
                        type="text"
                        name="NOME"
                        value={cliente.nome}
                        onChange={handleChange}
                    />

                    <label>IDADE</label>
                    <input
                        type="number"
                        name="IDADE"
                        value={cliente.idade}
                        onChange={handleChange}
                    />

                    <label>EMAIL</label>
                    <input
                        type="email"
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
