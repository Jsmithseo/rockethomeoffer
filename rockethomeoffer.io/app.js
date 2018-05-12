const express = require('express');
const app = express();


// app.set('view engine', 'pug');

// app.get('/', (req, res) , function() {
// 	res.render("index");
// });

// app.get('/how-it-works', (req, res) , function() {
// 	res.render("how-it-works");
// });
// app.get('/faq', (req, res) , function() {
// 	res.render("faq");
// });

// app.get('/contact', (req, res) => {
// 	res.render("contact");
// });

// app.get('/about', (req, res) => {
// 	res.render("about");
// });

app.listen(5100, function() {
console.log('your application is running on port 5100');

});

app.use(express.static('public'))

