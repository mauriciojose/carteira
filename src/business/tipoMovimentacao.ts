import { TipoMovimentacaoRepository } from "../repository/tipoMovimentacao";
import { Service } from "../persistence/index";

const IService = new Service();

export default {
    async getAll(tipo: any){
        await IService.setObject(TipoMovimentacaoRepository);
        const relacoes = { relations: ["transacao"] };
        return await IService.getAll(relacoes);
    },
    async get(tipo: any){
        await IService.setObject(TipoMovimentacaoRepository);
        tipo.query.id = tipo.params.id ? tipo.params.id : undefined; 
        const relacoes = ["transacao"];
        // tipo.query.relations = relacoes;
        let params = {
            where: tipo.query,
            relations: relacoes
        };
        return await IService.get(params);
    },
    async create(tipo: any){
        await IService.setObject(TipoMovimentacaoRepository);
        return await IService.create(tipo.body);
    },
    async update(tipo: any){
        await IService.setObject(TipoMovimentacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.update(tipo.body.id , tipo.body);
    },
    async delete(tipo: any){
        await IService.setObject(TipoMovimentacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.delete(tipo.body.id);
    }
}