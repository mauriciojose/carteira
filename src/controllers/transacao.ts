import { Request, Response } from "express";
import TransacaoBusiness from "../business/transacao";

export default class Transacao{
    async getAll(req: Request, res: Response){
        let transacoes = await TransacaoBusiness.getAll(req);
        res.json(transacoes);
    }
    async get(req: Request, res: Response){
        let transacoes = await TransacaoBusiness.get(req);
        res.json(transacoes);
    }
    async create(req: Request, res: Response){
        let transacao = await TransacaoBusiness.create(req);
        res.json(transacao);
    }
    async update(req: Request, res: Response){
        let transacao = await TransacaoBusiness.update(req);
        res.json(transacao);
    }
    async delete(req: Request, res: Response){
        let transacao = await TransacaoBusiness.delete(req);
        res.json(transacao);
    }
}