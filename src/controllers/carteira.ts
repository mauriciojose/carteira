import { Request, Response } from "express";
import CarteiraBusiness from "../business/carteira";

export default class Carteira{
    async getAll(req: Request, res: Response){
        let carteiras = await CarteiraBusiness.getAll(req);
        res.json(carteiras);
    }
    async get(req: Request, res: Response){
        let carteiras = await CarteiraBusiness.get(req);
        res.json(carteiras);
    }
    async getByUserId(req: Request, res: Response){
        let carteiras = await CarteiraBusiness.getByUserId(req);
        res.json(carteiras);
    }
    async create(req: Request, res: Response){
        let carteira = await CarteiraBusiness.create(req);
        res.json(carteira);
    }
    async update(req: Request, res: Response){
        let carteira = await CarteiraBusiness.update(req);
        res.json(carteira);
    }
    async delete(req: Request, res: Response){
        let carteira = await CarteiraBusiness.delete(req);
        res.json(carteira);
    }
}