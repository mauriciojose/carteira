import { Request, Response } from "express";
import MovimentacaoBusiness from "../business/movimentacao";

export default class Movimentacao{
    async getAll(req: Request, res: Response){
        let movimentacoes = await MovimentacaoBusiness.getAll(req);
        res.json(movimentacoes);
    }
    async get(req: Request, res: Response){
        let movimentacoes = await MovimentacaoBusiness.get(req);
        res.json(movimentacoes);
    }
    async transacao(req: Request, res: Response){
        let movimentacoes = await MovimentacaoBusiness.transacao(req);
        res.json(movimentacoes);
    }
    async create(req: Request, res: Response){
        let movimentacao = await MovimentacaoBusiness.create(req);
        res.json(movimentacao);
    }
    async update(req: Request, res: Response){
        let movimentacao = await MovimentacaoBusiness.update(req);
        res.json(movimentacao);
    }
    async delete(req: Request, res: Response){
        let movimentacao = await MovimentacaoBusiness.delete(req);
        res.json(movimentacao);
    }
}