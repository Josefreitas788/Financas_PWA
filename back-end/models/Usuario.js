const { DataTypes } = require("sequelize");
const db = require("./connection_db");


const Usuario = db.define("usuario", {

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
