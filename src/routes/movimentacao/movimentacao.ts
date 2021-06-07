import { Router } from "express";
import Movimentacao from "../../controllers/movimentacao";

class MovimentacoesRouter {
    controller: Movimentacao;
    path: string;
    routes: Router;
    
    constructor(routes: Router) {
        this.controller = new Movimentacao();
        this.path = '/api/movimentacoes';
        this.routes = routes;

        this.init();
    }
    async init(){
        this.routes.post(this.path + '/', this.controller.transacao);
    }
}

export default MovimentacoesRouter;
