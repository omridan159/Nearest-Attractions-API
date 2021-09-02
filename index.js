const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
require('dotenv').config()

const app = express({ redirect: true });

let allowedOrigins = process.env.CORS_ALLOWED_ORIGINS;

app.all('*', (req, res, next) => {
	const { origin, host } = req.headers;
	if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
		res.setHeader('Access-Control-Allow-Origin', origin ?? host);
	}
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
	);
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', apiRouter);

app.listen(process.env.PORT, () => {
	console.log(
		`Attractions API is running at http://localhost:${process.env.PORT}`
	);
	console.log(`Connected to MongoHost: ${process.env.MONGO_HOST}`);
});