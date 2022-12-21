const Despesa = require('../models/Despesa');

module.exports = {

  async store(req, res) {
    let despesa = await Despesa.create(req.body);
    return res.json({ despesa });
  },

  async show(req, res) {
    let despesa = await Despesa.findByPk(req.params.id);

    return res.json(despesa);
  },

  async destroy(req, res) {
    let despesa = await Despesa.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.json({ despesa });
  },

  async update(req, res) {
    let despesa = await Despesa.update(req.body, {
      where: { 
        id: req.body.id 
      } 
  });
    return res.json({ despesa })
    }
  };  