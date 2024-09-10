const express = require('express');
const app = express();
const db = require('./config/db.config.js');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');
const Cliente = db.Cliente;
const Post = db.Post;
const cors = require('cors')

const port = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/api', router);

const server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port
    console.log("App está rodando no endereço http://%s:%s", host, port);
});

db.sequelize.sync({ force: true }).then(() => {
    console.log('Apaga e recria a tabela usando { force: true }');
    Cliente.sync().then(() => {
        const clientes = [
            { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
            { nome: 'Sara', idade: 31, email: 'sara@email.com' },
            { nome: 'Emilly', idade: 18, email: 'emilly@email.com' },
        ]

        clientes.map(cliente => {
            Cliente.create(cliente);
        });
    })
    Post.sync().then(() => {
        const posts = [
            { title: 'Post 1', content: 'Conteúdo do post 1' },
            { title: 'Post 2', content: 'Conteúdo do post 2' },
            { title: 'Post 3', content: 'Conteúdo do post 3' },
        ]

        posts.map(post => {
            Post.create(post);
        });
    })
});