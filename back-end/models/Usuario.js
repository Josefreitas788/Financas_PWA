const { sequelize, DataTypes } = require("sequelize");

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


module.exports = Usuario;