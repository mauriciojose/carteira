import { EntityRepository, Repository } from "typeorm";
import { Categoria } from "../models";

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria>{

}