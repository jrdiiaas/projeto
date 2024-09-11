import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientes, removeCliente } from "../../services/cliente-requests";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./index.css";

function ViewCliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        carregaClientes();
    }, []); // Dependências vazias para que a função execute apenas uma vez após o primeiro render

    const carregaClientes = async () => {
        try {
            const clientesResponse = await getClientes();
            setClientes(clientesResponse.data); // Atualiza o estado com os dados retornados
            console.log(clientesResponse.data); // Log dos dados retornados
        } catch (error) {
            console.error("Erro ao carregar clientes:", error);
        }
    };

    const deleteCliente = async (id) => {
        try {
            await removeCliente(id);
            // Recarregue a lista de clientes após a exclusão para refletir as mudanças
            carregaClientes();
        } catch (error) {
            console.error("Erro ao remover cliente:", error);
        }
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
