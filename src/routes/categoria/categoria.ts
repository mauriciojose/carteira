import { Router } from "express";
import Categoria from "../../controllers/categoria";

class CategoriasRouter {
    controller: Categoria;
    path: string;
    routes: Router;
    
    constructor(routes: Router) {
        this.controller = new Categoria();
        this.path = '/api/categorias';
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

export default CategoriasRouter;
