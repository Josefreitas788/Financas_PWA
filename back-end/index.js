var express = require("express");
const sequelize = require('./models/connection_db');
const bodyParser = require('body-parser');
const Despesa = require('./routes/Despesa');
const Usuario = require('./routes/Usuario');
const Categoria = require('./routes/Categoria');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
 console.log("Server running on port 3000");

});

sequelize.authenticate().then(() => {
  console.log("Success!");
  }).catch((err) => {
    console.log(err);
  });


app.use('/despesa', Despesa);
app.use('/usuario', Usuario);
app.use('/categoria', Categoria);
