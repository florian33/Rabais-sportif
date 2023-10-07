/* Declare dependencies */
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = 3030;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//Appels des controllers
const userController = require('./controllers/usercontroller');

// Définissez 'views' comme le répertoire contenant vos templates
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(methodOverride('_method'));


app.listen(3030, () => {
    console.log('Server started on http://localhost:3030');
});

app.post('/users', (req, res) => {
  try {
    userController.createUser(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Réponse d'erreur
  }
});
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.put('/users/:id', (req, res) => {
    try {
      userController.updateUser(req, res);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Réponse d'erreur
    }
  });
app.delete('/users/:id', userController.deleteUser);
app.get('/', (req, res) => {
    res.render('index',{title: 'Menu des usagers'});
});

