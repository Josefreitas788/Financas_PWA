const Usuario = require('../models/Usuario');

module.exports = {

  async store(req, res) {
    let usuario = await Usuario.create(req.body);
    return res.json({ usuario });
  },

  async show(req, res) {
    let usuario = await Usuario.findByPk(req.params.id);

    return res.json(usuario);
  },

  async destroy(req, res) {
    let usuario = await Usuario.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.json({ usuario });
  },

  async update(req, res) {
    let usuario = await Usuario.update(req.body, {
      where: { 
        id: req.body.id 
      } 
  });
    return res.json({ usuario })
    }
  };  