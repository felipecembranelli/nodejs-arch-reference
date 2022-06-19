const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');
const catalogsRouter = require('./catalog/catalogs.router');
const ordersRouter = require('./ordering/ordering.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);
api.use('/catalog', catalogsRouter);
api.use('/orders', ordersRouter);

module.exports = api;