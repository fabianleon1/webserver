const express = require("express");
const app = express();
const hbs = require('hbs');

//const port = 8080;
require('dotenv').config();

const port=process.env.PORT;


//Servir contenido estatico

app.use(express.static('public'));


//Handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
    res.render('home', {
        nombre:'Fernando Herrera',
        titulo:'Curso node'

    });
  });

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre:'Fernando Herrera',
    titulo:'Curso node'

});
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre:'Fernando Herrera',
    titulo:'Curso node'

});
  });
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde su respectiva ruta');
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
