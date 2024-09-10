import Cabecalho from "../Cabecalho/index.jsx";
import pessoashome from "../../assets/imgs/pessoashome.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/posts");
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
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
                <section className="PostsSection">
                    <h2>Postagens</h2>
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Não há postagens para exibir.</p>
                    )}
                </section>
            </div>
        </>
    );
}

export default Home;
