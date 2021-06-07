import { CarteiraRepository } from "../repository/carteira";
import { UserRepository } from "../repository/user";
import { Service } from "../persistence/index";

const IService = new Service();

export default {
    async getAll(tipo: any){
        await IService.setObject(CarteiraRepository);
        const relacoes = { relations: ["user"] };
        return await IService.getAll(relacoes);
    },
    async get(tipo: any){
        await IService.setObject(CarteiraRepository);
        const relacoes = ["user"];
        tipo.query.relations = relacoes;
        tipo.query.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.get(tipo.query);
    },
    async getByUserId(tipo: any){
        await IService.setObject(UserRepository);
        const user = await IService.get({id: tipo.params.id});
        if (user.length == 0) {
            return null;
        }
        await IService.setObject(CarteiraRepository);
        const relacoes = ["user"];
        let params = {
            where: {user: user},
            relations: relacoes
        };
        return await IService.get(params);
    },
    async create(tipo: any){
        await IService.setObject(CarteiraRepository);
        return await IService.create(tipo.body);
    },
    async update(tipo: any){
        await IService.setObject(CarteiraRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.update(tipo.body.id , tipo.body);
    },
    async delete(tipo: any){
        await IService.setObject(CarteiraRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.delete(tipo.body.id);
    }
}