const express = require('express');
const app = express();


app.set('view engine', 'pug');

// These are the routes
app.get('/', (req, res) => {
	res.render("index");
});

app.get('/how-it-works', (req, res) => {
	res.render("how-it-works");
});
app.get('/faq', (req, res) => {
	res.render("faq");
});

app.get('/contact', (req, res) => {
	res.render("contact");
});

app.get('/about', (req, res) => {
	res.render("about");
});


// server code
app.listen(5100, () => {
console.log('your application is running on port 5100');

});

app.use(express.static('public'))

