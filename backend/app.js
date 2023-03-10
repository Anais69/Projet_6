const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const sauceRouter = require('./routes/sauce');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const password = process.env.PASSWORD;
const user = process.env.USER;

app.use(bodyParser.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 app.use('/images', express.static(path.join(__dirname, 'images')));
 app.use('/api/auth', userRouter);
 app.use('/api/sauces', sauceRouter);
 


 mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.chtd4gb.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



module.exports = app;



