const { DataTypes } = require("sequelize");
const db = require("./connection_db");
const { Categoria } = require("./Categoria");
const { Usuario } = require("./Usuario");

const Despesa = db.define("despesa", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: 'id'
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }


});


module.exports = Despesa;
