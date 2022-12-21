const { sequelize, DataTypes } = require("sequelize");
const db = require("./connection_db");

const Categoria = db.define("categoria",{
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
