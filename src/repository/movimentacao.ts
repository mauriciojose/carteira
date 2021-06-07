import { EntityRepository, Repository } from "typeorm";
import { Movimentacao } from "../models";

@EntityRepository(Movimentacao)
export class MovimentacaoRepository extends Repository<Movimentacao>{

}