import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Substitua por sua lógica de autenticação real
        if (username === "usuario" && password === "senha") {
            localStorage.setItem("token", "seu_token_aqui"); // Simulando token
            setErrorMessage("");

            // Redireciona para a rota protegida ou para a página inicial
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        } else {
            setErrorMessage("Usuário ou senha inválidos.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
