const express = require('express');
const router = express.Router('');
const DespesaController = require('../controllers/Despesa');

router.post('/', DespesaController.store);
router.get('/:id', DespesaController.show);
router.delete('/:id', DespesaController.destroy);
router.put('/', DespesaController.update);

module.exports = router;