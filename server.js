const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();
//informando a aplicação que pode receber informações tipo json
app.use(express.json());
app.use(cors());

// Iniciando banco de dados
mongoose.connect('mongodb://localhost:27019/nodeapi', {
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useCreateIndex: true  
});

requireDir('./src/models');

//Primeira rota
app.use('/api', require("./src/routes"));

app.listen(3001);