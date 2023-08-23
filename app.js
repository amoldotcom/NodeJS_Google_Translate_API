const express = require('express');
const app = express();

require('dotenv').config();

const path = require('path');

// Setting express app
app.use(express.json()); // for POST form body
app.use(express.urlencoded({ extended: false })); // for POST form body

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static Files
app.use('/', express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./routes/indexRoute.js');
app.use('/', indexRoute);
app.use('/translate', indexRoute);


// Error Handlers
const { error404Handler, errorHandler } = require('./middlewares/errorHandler.js')
app.use(error404Handler);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
