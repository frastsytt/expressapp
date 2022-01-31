const express = require('express');
const path = require('path');
const app = express();

//declare public directory
app.use(express.static('public'));
// add views template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/user/:username', (req, res)=> {
	let user = req.params.username;
	res.render('index.ejs', {username : user});
});

app.listen(3000, ()=> {
	console.log('Server started on http://localhost:3000');
});
