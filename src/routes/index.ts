import express, { Application, Request, Response } from "express";

import UsersRouter from "./user/user";
import TiposRouter from "./tipo/tipo";
import CarteirasRouter from "./carteira/carteira";
import TransacoesRouter from "./transacao/transacao";
import TipoMovimentacaoRouter from "./tipoMovimentacao/tipoMovimentacao";
import CategoriaRouter from "./categoria/categoria";
import MovimentacoesRouter from "./movimentacao/movimentacao";

const routes = express.Router();

const usersRouter = new TiposRouter(routes);
const tiposRouter = new UsersRouter(routes);
const carteirasRouter = new CarteirasRouter(routes);
const transacoesRouter = new TransacoesRouter(routes);
const tiposMovimentacoesRouter = new TipoMovimentacaoRouter(routes);
const categoriaRouter = new CategoriaRouter(routes);
const movimentacaoRouter = new MovimentacoesRouter(routes);

routes.get('/api',(req: Request, res: Response) => {
    res.send('Bem vindo!');
});

export default routes;
