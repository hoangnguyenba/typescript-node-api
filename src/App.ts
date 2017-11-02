import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import UserRouter from './routes/v1/UserRouter';

// Creates and configures an ExpressJS web server.
class App {

	// ref to Express instance
	public express: express.Application;

	//Run configuration methods on the Express instance.
	constructor() {

		const MONGODB_CONNECTION: string = "mongodb://localhost:27017/tavi";
		mongoose.connect(MONGODB_CONNECTION);

		this.express = express();
		this.middleware();
		this.routes();

		//error handling
		// this.app.use(errorHandler());
		this.express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
			res.status(400).json({
				code: err.code,
				message: err.name,
				errors: err.message
			});
		});
	}

	// Configure Express middleware.
	private middleware(): void {
		this.express.use(logger('dev'));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	// Configure API endpoints.
	private routes(): void {
		/* This is just to get up and running, and to make sure what we've got is
		* working so far. This function will change when we start to add more
		* API endpoints */
		let router = express.Router();
		// placeholder route handler
		router.get('/', (req, res, next) => {
			res.json({
				message: 'Tavi Api is working'
			});
		});
		this.express.use('/', router);
		this.express.use('/v1/users', UserRouter);
	}

}

export default new App().express;
