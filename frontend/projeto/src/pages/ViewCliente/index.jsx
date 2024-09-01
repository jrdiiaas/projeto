import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientes, removeCliente } from "../../services/cliente-requests";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./index.css";

function ViewCliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        carregaClientes();
    }, [clientes]);

    const carregaClientes = async () => {
        const clientesResponse = await getClientes();

        setClientes(await clientesResponse.data);

        console.log(clientes);
    };

    const deleteCliente = async (id) => {
        await removeCliente(id);
    };

    return (
        <>
            <div className="TableView">
                <table className="InTableView">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>IDADE</th>
                            <th>EMAIL</th>
                            <th>FUNÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td data-label="Id">{cliente.id}</td>
                                <td data-label="Nome">{cliente.nome}</td>
                                <td data-label="Idade">{cliente.idade}</td>
                                <td data-label="Endereco">{cliente.email}</td>
                                <td>
                                    <Link
                                        to={`../edit/${encodeURIComponent(
                                            cliente.id,
                                        )}`}
                                    >
                                        <button className="buttonfunc1">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                    <button
                                        className="buttonfunc2"
                                        onClick={() =>
                                            deleteCliente(cliente.id)
                                        }
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewCliente;
