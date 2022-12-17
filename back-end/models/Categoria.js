const { sequelize, DataTypes } = require("sequelize");

const Categoria = sequelize.define("categoria",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});


module.exports = Categoria;