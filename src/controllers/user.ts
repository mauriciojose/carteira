import { Request, Response } from "express";
import UserBusiness from "../business/user";

export default class User{
    async getAll(req: Request, res: Response){
        let users = await UserBusiness.getAll(req);
        res.json(users);
    }
    async get(req: Request, res: Response){
        let users = await UserBusiness.get(req);
        res.json(users);
    }
    async getUserSimple(req: Request, res: Response){
        let users = await UserBusiness.getUserSimple(req);
        res.json(users);
    }
    async create(req: Request, res: Response){
        let user = await UserBusiness.create(req);
        res.json(user);
    }
    async update(req: Request, res: Response){
        let user = await UserBusiness.update(req);
        res.json(user);
    }
    async delete(req: Request, res: Response){
        let user = await UserBusiness.delete(req);
        res.json(user);
    }
}