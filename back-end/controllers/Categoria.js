const Categoria = require('../models/Categoria');

module.exports = {

  async store(req, res) {
    let categoria = await Categoria.create(req.body);
    return res.json({ categoria });
  },

  async show(req, res) {
    let categoria = await Categoria.findByPk(req.params.id);

    return res.json(categoria);
  },

  async destroy(req, res) {
    let categoria = await Categoria.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.json({ categoria });
  },

  async update(req, res) {
    let categoria = await Categoria.update(req.body, {
      where: { 
        id: req.body.id 
      } 
  });
    return res.json({ categoria })
    }
  };  