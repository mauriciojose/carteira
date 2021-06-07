import { EntityRepository, Repository } from "typeorm";
import { SaldoCarteira } from "../models";

@EntityRepository(SaldoCarteira)
export class SaldoCarteiraRepository extends Repository<SaldoCarteira>{

}