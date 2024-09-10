const db = require('../config/db.config.js');
const Post = db.Post;

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await Post.create({ title, content });
        res.status(201).json({ message: 'Postagem criada com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar postagem', error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar postagens', error: error.message });
    }
};

exports.getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Postagem não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar postagem', error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    const { id, title, content } = req.body;
    try {
        const [updated] = await Post.update({ title, content }, { where: { id } });
        if (updated) {
            const updatedPost = await Post.findByPk(id);
            res.status(200).json({ message: 'Postagem atualizada com sucesso!', post: updatedPost });
        } else {
            res.status(404).json({ message: 'Postagem não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar postagem', error: error.message });
    }
};

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (post) {
            await post.destroy();
            res.status(200).json({ message: 'Postagem excluída com sucesso' });
        } else {
            res.status(404).json({ message: 'Postagem não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir postagem', error: error.message });
    }
};