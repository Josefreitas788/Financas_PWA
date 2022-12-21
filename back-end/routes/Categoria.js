const express = require('express');
const router = express.Router('');
const CategoriaController = require('../controllers/Categoria');

router.post('/', CategoriaController.store);
router.get('/:id', CategoriaController.show);
router.delete('/:id', CategoriaController.destroy);
router.put('/', CategoriaController.update);

module.exports = router;