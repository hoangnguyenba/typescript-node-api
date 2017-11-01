"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = require("./BaseRouter");
const Heroes = require('../data');
class HeroRouter extends BaseRouter_1.BaseRouter {
    /**
     * GET all Heroes.
     */
    readAll(req, res, next) {
        res.send(Heroes);
    }
    /**
     * GET one hero by id
     */
    read(req, res, next) {
        let query = parseInt(req.params.id);
        let hero = Heroes.find(hero => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                hero
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No hero found with the given id.',
                status: res.status
            });
        }
    }
}
exports.HeroRouter = HeroRouter;
// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
exports.default = heroRoutes.router;
