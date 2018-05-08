const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render("index");
});

app.get('/header', (req, res) => {
	res.render('header');
});

app.listen(5100, () => {
console.log('your application is running on port 5100');

});

app.use(express.static('public'))

