import { EntityRepository, Repository } from "typeorm";
import { Carteira } from "../models";

@EntityRepository(Carteira)
export class CarteiraRepository extends Repository<Carteira>{

}