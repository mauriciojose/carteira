import { Router } from "express";
import User from "../../controllers/user";

class UsersRouter {
    controller: User;
    path: string;
    routes: Router;
    
    constructor(routes: Router) {
        this.controller = new User();
        this.path = '/api/users';
        this.routes = routes;

        this.init();
    }
    async init(){
        this.routes.get(this.path + '/', this.controller.getAll);
        this.routes.get(this.path + '/:id', this.controller.get);
        this.routes.get('/api/login', this.controller.login);
        this.routes.get(this.path + '/reduce/:id', this.controller.getUserSimple);
        this.routes.post(this.path + '/', this.controller.create);
        this.routes.put(this.path + '/:id', this.controller.update);
        this.routes.delete(this.path + '/:id', this.controller.delete);
    }
}

export default UsersRouter;
