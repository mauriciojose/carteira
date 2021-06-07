import {MigrationInterface, QueryRunner} from "typeorm";

import Tipo from "../../business/tipo";

export class TipoSeeder1622808126606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tipos = [
            {
                name: 'Dinheiro'
            },
            {
                name: 'Cheque'
            }
        ];
        tipos.forEach(async element => {
            queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into("tipo")
            .values(element)
            .execute()
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
