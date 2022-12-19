
const {Sequelize} = require('sequelize');

const host = 'babar.db.elephantsql.com'
const database = 'yrxzpdzv'
const user = 'yrxzpdzv'
const port = '5432'
const  password ='9RARLGiI9oPgENw8cupLGVbPi_3HHC8I'
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres"
})



module.exports = sequelize;