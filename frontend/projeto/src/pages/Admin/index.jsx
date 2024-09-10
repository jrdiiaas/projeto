// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Cabecalho from "../Cabecalho";
import "./index.css";

function Admin() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // Para definir o tipo de mensagem (sucesso ou erro)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage("Postagem criada com sucesso!");
            setMessageType("success"); // Define o tipo de mensagem como sucesso
            setTitle("");
            setContent("");
        } catch (error) {
            setMessage("Erro ao criar postagem");
            setMessageType("error"); // Define o tipo de mensagem como erro
            console.error("Error creating post:", error);
        }
    };

    return (
        <>
            <nav className="Navbar">
                <div>
                    <h1>Administração de Posts</h1>
                </div>
                <div>
                    <Cabecalho /> {/* Inclua o Cabecalho */}
                </div>
            </nav>
            <div className="AdminContent">
                <h1>Administração de Postagens</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Título:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Conteúdo:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {message && (
                    <div className={`message ${messageType}`}>{message}</div>
                )}
            </div>
        </>
    );
}

export default Admin;
