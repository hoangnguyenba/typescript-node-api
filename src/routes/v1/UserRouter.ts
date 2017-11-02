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
		userRepository.list({}, (err, users) => {
			res.send(users);
		})
    }

    /**
     * GET one hero by id
     */
    public read(req: Request, res: Response, next: NextFunction) {
        let userRepository = new UserRepository();
		userRepository.findById(req.params.id,(err, user) => {
			res.send(user);
		})
	}
	
	/**
     * create
     */
    public create(req: Request, res: Response, next: NextFunction) {
		let userRepository = new UserRepository();
		var user: IUser = <IUser>req.body;
		userRepository.create(user,(err, data) => {
			if(err)
				res.send(err);
			else
				res.send(data);
		})
	}
	
	/**
     * update
     */
    public update(req: Request, res: Response, next: NextFunction) {
		let userRepository = new UserRepository();
		var user: IUser = <IUser>req.body;
		userRepository.update(req.params.id, user, (err, data) => {
			res.send(data);
		})
    }
}

// Create the HeroRouter, and export its configured Express.Router
const userRoutes = new UserRouter();

export default userRoutes.router;
