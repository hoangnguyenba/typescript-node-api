import {Router, Request, Response, NextFunction} from 'express';

export class BaseRouter {
    router: Router

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * Create
     */
    public create(req: Request, res: Response, next: NextFunction) {
        next(Error("Method not allow"));
    }

    /**
     * Read all
     */
    public readAll(req: Request, res: Response, next: NextFunction) {
        next(Error("Method not allow"));
    }

    /**
     * Read
     */
    public read(req: Request, res: Response, next: NextFunction) {
        next(Error("Method not allow"));
    }

    /**
     * Update
     */
    public update(req: Request, res: Response, next: NextFunction) {
        next(Error("Method not allow"));
    }

    /**
     * Delete
     */
    public delete(req: Request, res: Response, next: NextFunction) {
        next(Error("Method not allow"));
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.post('/', this.create);
        this.router.get('/', this.readAll);
        this.router.get('/:id', this.read);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }

}
