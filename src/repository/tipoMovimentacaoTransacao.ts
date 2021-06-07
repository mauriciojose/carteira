import { EntityRepository, Repository } from "typeorm";
import { TipoMovimentacaoTransacao } from "../models";

@EntityRepository(TipoMovimentacaoTransacao)
export class TipoMovimentacaoTransacaoRepository extends Repository<TipoMovimentacaoTransacao>{

}