import { EntityRepository, Repository } from "typeorm";
import { Transacao } from "../models";

@EntityRepository(Transacao)
export class TransacaoRepository extends Repository<Transacao>{

}