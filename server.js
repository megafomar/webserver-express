const express = require('express');
const hbs = require('hbs');

const app = express();


// Middleware
app.use(express.static(__dirname + '/public'));

// registerPartials provides a quick way to load all partials from a specific directory
hbs.registerPartials(__dirname + '/views/partials');
// hbs This will render .hbs files when res.render is called
app.set('view engine', 'hbs');
// hbs helpers
require('./hbs/helpers');

// para obtener puerto en heroku
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {    
    res.render('home',{
        nombre: 'Omar',
        anio: new Date().getFullYear(),
        port: 3000
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});