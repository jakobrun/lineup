'use strict';

var express = require('express'),
	app = express(),
	port = 3000;

app.use(express.static('app'));
app.use(express.static('.tmp'));

app.get('/api/test', function (req, res) {
	res.json({name: 'foo', bar: 'baz'});
});

app.listen(port, function () {
	console.log('Server started on port ' + port);
});