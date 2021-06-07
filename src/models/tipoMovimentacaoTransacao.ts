import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
  } from "typeorm";
import { TipoMovimentacao } from "./tipoMovimentacao";
import { Transacao } from "./transacao";
  
  @Entity()
  export class TipoMovimentacaoTransacao {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => TipoMovimentacao)
    @JoinColumn()
    tipoMovimentacao!: TipoMovimentacao;

    @OneToOne(() => Transacao)
    @JoinColumn()
    transacao!: Transacao;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }