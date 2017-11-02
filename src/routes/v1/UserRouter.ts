import {Router, Request, Response, NextFunction} from 'express';
import { BaseRouter } from './BaseRouter';
import UserRepository from '../../repositories/UserRepository';
import IUser from '../../models/interfaces/IUser';
const Users = require('../../data');

export class UserRouter extends BaseRouter {
    router: Router

    /**
     * GET all Heroes.
     */
    public list(req: Request, res: Response, next: NextFunction) {
		let userRepository = new UserRepository();
		userRepository.retrieve((err, users) => {
			console.log(err);
			console.log(users);
			res.send(users);
		})
    }

    /**
     * GET one hero by id
     */
    public read(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let hero = Users.find(hero => hero.id === query);
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
	
	/**
     * create
     */
    public create(req: Request, res: Response, next: NextFunction) {
		let userRepository = new UserRepository();
		var user: IUser = <IUser>req.body;
		console.log(user);
		userRepository.create(user,(err, data) => {
			console.log(err);
			console.log(data);
			res.send(data);
		})
    }

}

// Create the HeroRouter, and export its configured Express.Router
const userRoutes = new UserRouter();

export default userRoutes.router;
