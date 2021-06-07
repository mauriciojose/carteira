import { Router } from "express";
import Tipo from "../../controllers/tipo";

class TiposRouter {
    controller: Tipo;
    path: string;
    routes: Router;
    
    constructor(routes: Router) {
        this.controller = new Tipo();
        this.path = '/api/tipos';
        this.routes = routes;

        this.init();
    }
    async init(){
        this.routes.get(this.path + '/', this.controller.getAll);
        this.routes.get(this.path + '/:id', this.controller.get);
        this.routes.post(this.path + '/', this.controller.create);
        this.routes.put(this.path + '/:id', this.controller.update);
        this.routes.delete(this.path + '/:id', this.controller.delete);
    }
}

export default TiposRouter;