import { MovimentacaoRepository } from "../repository/movimentacao";
import TipoMovimentacao  from "../business/tipoMovimentacao";
import { CarteiraRepository } from "../repository/carteira";
import { Service } from "../persistence/index";

const IService = new Service();

export default {
    async getAll(tipo: any){
        await IService.setObject(MovimentacaoRepository);

        return await IService.raw(`SELECT tm.name as tipo, us.name, mv."createdAt" as data, mv.status, mv.valor 
        FROM "movimentacao" as mv 
        LEFT JOIN "tipo_movimentacao" as tm ON(tm.id = mv."tipoMovimentacaoId")
        LEFT JOIN "carteira" as ce ON(ce.id = mv."carteiraEntradaId")
        LEFT JOIN "carteira" as cs ON(cs.id = mv."carteiraSaidaId")
        LEFT JOIN "user" as ue ON(ue.id = ce."userId")
        LEFT JOIN "user" as us ON(us.id = cs."userId") WHERE us.id=$1 OR ue.id=$1`, [tipo.params.id]);
    },
    async get(tipo: any){
        await IService.setObject(MovimentacaoRepository);
        tipo.query.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.get(tipo.query);
    },
    async create(tipo: any){
        await IService.setObject(MovimentacaoRepository);
        return await IService.create(tipo.body);
    },
    async transacao(tipo: any){

        tipo.body.valor = parseFloat(tipo.body.valor);
        let tipoMovimentacao = await TipoMovimentacao.get({
            query: {
                id: tipo.body.tipo
            },
            params: {
                id: tipo.body.tipo
            }
        });
        let saldo: number = 0;
        let carteira_saida = undefined;
        switch (tipoMovimentacao.transacao.fator) {
            case 1:
                    saldo = await this.addSaldo(tipo.body.carteira_entrada.id, tipo.body.valor);
                    tipo.body.transacao = tipoMovimentacao.transacao;
                break;
            case -1:
                    saldo = await this.subSaldo(tipo.body.carteira_entrada.id, tipo.body.valor);
                    tipo.body.transacao = tipoMovimentacao.transacao;
                    if (saldo == -1) {
                        return 0;
                    }
                break;
            case 0:
                    await IService.setObject(CarteiraRepository);
                    carteira_saida = tipo.body.carteira_saida ? await IService.get({id: tipo.body.carteira_saida}) : undefined;
                    
                    saldo = await this.subSaldo(tipo.body.carteira_entrada.id, tipo.body.valor);
                    await this.addSaldo(carteira_saida.id, tipo.body.valor);

                    tipo.body.transacao = tipoMovimentacao.transacao;
                    tipo.body.carteira_saida = carteira_saida;
                    if (saldo == -1) {
                        return 0;
                    }
                break;
        
            default:
                break;
        }

        tipo.body.tipo_movimentacao = tipoMovimentacao;

        await IService.setObject(MovimentacaoRepository);
        await IService.create(tipo.body)
        return saldo;
    },
    async addSaldo(id: number, saldo: any){
        await IService.setObject(CarteiraRepository);
        if( id == null ) return 0;

        const carteira = await IService.get({id: id});

        carteira.saldo = parseFloat(carteira.saldo) + parseFloat(saldo);

        await IService.update(id , carteira)

        return carteira.saldo as number;
    },
    async subSaldo(id: number, saldo: any){
        await IService.setObject(CarteiraRepository);
        if( id == null ) return 0;

        const carteira = await IService.get({id: id});

        const result = parseFloat(carteira.saldo) - parseFloat(saldo);
        if (result < 0) {
            return -1;
        }
        carteira.saldo = parseFloat(carteira.saldo) - parseFloat(saldo);

        await IService.update(id , carteira)

        return carteira.saldo as number;
    },
    async update(tipo: any){
        await IService.setObject(MovimentacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.update(tipo.body.id , tipo.body);
    },
    async delete(tipo: any){
        await IService.setObject(MovimentacaoRepository);
        tipo.body.id = tipo.params.id ? tipo.params.id : undefined; 
        return await IService.delete(tipo.body.id);
    }
}