import { Request, Response } from "express";
import TipoBusiness from "../business/tipo";

export default class Tipo{
    async getAll(req: Request, res: Response){
        let tipos = await TipoBusiness.getAll(req);
        res.json(tipos);
    }
    async get(req: Request, res: Response){
        let tipos = await TipoBusiness.get(req);
        res.json(tipos);
    }
    async create(req: Request, res: Response){
        let tipo = await TipoBusiness.create(req);
        res.json(tipo);
    }
    async update(req: Request, res: Response){
        let tipo = await TipoBusiness.update(req);
        res.json(tipo);
    }
    async delete(req: Request, res: Response){
        let tipo = await TipoBusiness.delete(req);
        res.json(tipo);
    }
}