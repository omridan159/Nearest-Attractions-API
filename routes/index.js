const express = require('express');
const AttractionsRoute = require('./attractions');

const apiRouter = express.Router();

new AttractionsRoute(apiRouter);

module.exports = apiRouter;
