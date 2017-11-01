import {Router, Request, Response, NextFunction} from 'express';
import { BaseRouter } from './BaseRouter';
const Heroes = require('../../data');

export class HeroRouter extends BaseRouter {
    router: Router

    /**
     * GET all Heroes.
     */
    public readAll(req: Request, res: Response, next: NextFunction) {
      res.send(Heroes);
    }

    /**
     * GET one hero by id
     */
    public read(req: Request, res: Response, next: NextFunction) {
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

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();

export default heroRoutes.router;
