import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    OneToMany,
    ManyToOne,
  } from "typeorm";
import { Transacao } from "./transacao";
  
  @Entity()
  export class TipoMovimentacao {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    name!: string;

    @ManyToOne(() => Transacao)
    @JoinColumn()
    transacao!: Transacao;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }