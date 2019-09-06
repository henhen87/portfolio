const fs = require('fs');
const beautify = require('js-beautify').js_beautify;
const path = require('path');

module.exports = function (app) {
	app.route('*')
		.get(function(req, res, next) {
			res.sendFile(path.join(__dirname + '/../..', 'public', "index.html"));	
		});
};

