// initializeData.js
const db = require('./config/db.config.js');
const Cliente = db.Cliente;
const Post = db.Post;

const initializeData = async () => {
    try {
        // Dados de Clientes
        const clientes = [
            { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
            { nome: 'Sara', idade: 31, email: 'sara@email.com' },
            { nome: 'Emilly', idade: 18, email: 'emilly@email.com' },
        ];

        for (const cliente of clientes) {
            await Cliente.create(cliente);
        }
        console.log('Clientes criados.');

        // Dados de Posts
        const posts = [
            { title: 'Post 1', content: 'Conteúdo do post 1' },
            { title: 'Post 2', content: 'Conteúdo do post 2' },
        ];

        for (const post of posts) {
            await Post.create(post);
        }
        console.log('Posts criados.');

    } catch (error) {
        console.error('Erro ao inicializar dados:', error);
    }
};

module.exports = initializeData;