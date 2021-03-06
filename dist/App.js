"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter_1 = require("./routes/v1/UserRouter");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        const MONGODB_CONNECTION = "mongodb://localhost:27017/tavi";
        mongoose.connect(MONGODB_CONNECTION);
        this.express = express();
        this.middleware();
        this.routes();
        //error handling
        // this.app.use(errorHandler());
        this.express.use((err, req, res, next) => {
            res.status(400).json({
                code: err.code,
                message: err.name,
                errors: err.message
            });
        });
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
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
        this.express.use('/v1/users', UserRouter_1.default);
    }
}
exports.default = new App().express;
