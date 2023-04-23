const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("./index", { component: 'home-content' });
});

app.get('/contato', (req, res) => {
    res.render("./index", { component: 'contact-content' });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Servidor ativo na  http://localhost:${port}`);
});
