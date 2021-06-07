import { EntityRepository, Repository } from "typeorm";
import { TipoMovimentacao } from "../models";

@EntityRepository(TipoMovimentacao)
export class TipoMovimentacaoRepository extends Repository<TipoMovimentacao>{

}