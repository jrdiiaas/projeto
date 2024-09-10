let express = require('express');
let router = express.Router();

const clientes = require('../servicos/servico.js');
const admin = require('../servicos/admin.servico.js');

router.post('/cliente', clientes.createCliente);
router.get('/cliente/:id', clientes.getCliente);
router.get('/clientes', clientes.clientes);
router.put('/cliente', clientes.updateCliente);
router.delete('/cliente/:id', clientes.deleteCliente);

router.post('/admin', admin.createPost);
router.get('/admin', admin.getPosts);
router.get('/admin/:id', admin.getPost);
router.put('/admin', admin.updatePost);
router.delete('/admin/:id', admin.deletePost);

module.exports = router;