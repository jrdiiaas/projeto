import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCliente, getCliente } from "../../services/cliente-requests";
import "./index.css";

function EditCliente() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        id: "",
        nome: "",
        idade: "",
        email: "",
    });

    useEffect(() => {
        buscaCliente(id);
    }, []);

    const buscaCliente = async (id) => {
        const clienteDados = await (await getCliente(id)).data;
        console.log(clienteDados);

        setCliente(clienteDados);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCliente((clienteAnterior) => {
            return {
                ...clienteAnterior,
                [name]: value,
            };
        });
    };

    const editarCliente = async (event) => {
        event.preventDefault();
        console.log(cliente);

        await editCliente(cliente);

        navigate("/cliente/view");
    };

    return (
        <>
            <div className="TableView2">
                <form onSubmit={editarCliente}>
                    <label>ID</label>
                    <input
                        id="ID"
                        type="text"
                        name="id"
                        value={cliente.id}
                        onChange={handleChange}
                        readOnly
                    />

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
                        atualizar cliente
                    </button>
                </form>
            </div>
        </>
    );
}

export default EditCliente;
