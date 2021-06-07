import { TransacaoRepository } from "../repository/transacao";
import { Service } from "../persistence/index";

const IService = new Service();

export default {
    async getAll(tipo: any){
        await IService.setObject(TransacaoRepository);
        return await IService.getAll({});
    },
    async get(tipo: any){
        await IService.setObject(TransacaoRepository);
        tipo.query.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.get(tipo.query);
    },
    async create(tipo: any){
        await IService.setObject(TransacaoRepository);
        return await IService.create(tipo.body);
    },
    async update(tipo: any){
        await IService.setObject(TransacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.update(tipo.body.id , tipo.body);
    },
    async delete(tipo: any){
        await IService.setObject(TransacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.delete(tipo.body.id);
    }
}