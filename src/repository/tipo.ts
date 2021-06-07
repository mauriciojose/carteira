import { EntityRepository, Repository } from "typeorm";
import { Tipo } from "../models";

@EntityRepository(Tipo)
export class TipoRepository extends Repository<Tipo>{

}