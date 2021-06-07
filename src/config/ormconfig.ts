import { ConnectionOptions } from "typeorm";

import * as dotenv from 'dotenv';
dotenv.config();

import {User, Tipo, Carteira, SaldoCarteira, Transacao, TipoMovimentacao, TipoMovimentacaoTransacao, Categoria, Movimentacao} from '../models';


const config: ConnectionOptions = {
  type: "postgres",
  // name: "carteira",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_DATABASE || "postgres",
  synchronize: true,
  entities: [User, Tipo, Carteira, SaldoCarteira, Transacao, TipoMovimentacao, TipoMovimentacaoTransacao, Categoria, Movimentacao],
  migrations: [`${__dirname}/../database/migrations/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/../database/migrations`
  }
};

export default config;
