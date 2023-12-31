const coursesRouter = require('./courses');
const meRouter = require('./me');
const newsRouter = require('./news');
const siteRouter = require('./site');

// Init routes with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
function route(app) {
	app.use('/me', meRouter);
	app.use('/courses', coursesRouter);
	app.use('/news', newsRouter);

	app.use('/', siteRouter);
}

module.exports = route;
