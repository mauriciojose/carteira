import {MigrationInterface, QueryRunner} from "typeorm";

export class TransacaoSeeder1622918584695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const transacoes = [
            {
                name: 'Entrada',
                fator: 1
            },
            {
                name: 'Transferência',
                fator: 0
            },
            {
                name: 'Saída',
                fator: -1
            }
        ];
        transacoes.forEach(async element => {
            queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into("transacao")
            .values(element)
            .execute()
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
