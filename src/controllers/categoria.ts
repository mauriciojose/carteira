import { Request, Response } from "express";
import CategoriaBusiness from "../business/categoria";

export default class Categoria{
    async getAll(req: Request, res: Response){
        let categorias = await CategoriaBusiness.getAll(req);
        res.json(categorias);
    }
    async get(req: Request, res: Response){
        let categorias = await CategoriaBusiness.get(req);
        res.json(categorias);
    }
    async create(req: Request, res: Response){
        let categoria = await CategoriaBusiness.create(req);
        res.json(categoria);
    }
    async update(req: Request, res: Response){
        let categoria = await CategoriaBusiness.update(req);
        res.json(categoria);
    }
    async delete(req: Request, res: Response){
        let categoria = await CategoriaBusiness.delete(req);
        res.json(categoria);
    }
}