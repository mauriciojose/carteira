import { Request, Response } from "express";
import TipoMovimentacaoBusiness from "../business/tipoMovimentacao";

export default class TipoMovimentacao{
    async getAll(req: Request, res: Response){
        let tiposMovimentacoes = await TipoMovimentacaoBusiness.getAll(req);
        res.json(tiposMovimentacoes);
    }
    async get(req: Request, res: Response){
        let tiposMovimentacoes = await TipoMovimentacaoBusiness.get(req);
        res.json(tiposMovimentacoes);
    }
    async create(req: Request, res: Response){
        let tipoMovimentacao = await TipoMovimentacaoBusiness.create(req);
        res.json(tipoMovimentacao);
    }
    async update(req: Request, res: Response){
        let tipoMovimentacao = await TipoMovimentacaoBusiness.update(req);
        res.json(tipoMovimentacao);
    }
    async delete(req: Request, res: Response){
        let tipoMovimentacao = await TipoMovimentacaoBusiness.delete(req);
        res.json(tipoMovimentacao);
    }
}