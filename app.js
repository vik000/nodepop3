const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Tag =require('./models/Tags');
Book =require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/nodepop');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/api/tags', (req, res) => {
	Tag.getTags((err, tags) => {
		if(err){
			throw err;
		}
		res.json(tags);
	});
});

app.post('/api/tags', (req, res) => {
	var tag = req.body;
	Tag.addTag(tag, (err, tag) => {
		if(err){
			throw err;
		}
		res.json(tag);
	});
});

// app.put('/api/genres/:_id', (req, res) => {
// 	var id = req.params._id;
// 	var genre = req.body;
// 	Genre.updateGenre(id, genre, {}, (err, genre) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });
//
// app.delete('/api/genres/:_id', (req, res) => {
// 	var id = req.params._id;
// 	Genre.removeGenre(id, (err, genre) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });
//
// app.get('/api/books', (req, res) => {
// 	Book.getBooks((err, books) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(books);
// 	});
// });
//
// app.get('/api/books/:_id', (req, res) => {
// 	Book.getBookById(req.params._id, (err, book) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });
//
// app.post('/api/books', (req, res) => {
// 	var book = req.body;
// 	Book.addBook(book, (err, book) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });
//
// app.put('/api/books/:_id', (req, res) => {
// 	var id = req.params._id;
// 	var book = req.body;
// 	Book.updateBook(id, book, {}, (err, book) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });
//
// app.delete('/api/books/:_id', (req, res) => {
// 	var id = req.params._id;
// 	Book.removeBook(id, (err, book) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });

app.listen(3000);
console.log('Running on port 3000...');
