const express = require('express');
const router = express.Router('');
const UsuarioController = require('../controllers/Usuario');

router.post('/', UsuarioController.store);
router.get('/:id', UsuarioController.show);
router.delete('/:id', UsuarioController.destroy);
router.put('/', UsuarioController.update);

module.exports = router;