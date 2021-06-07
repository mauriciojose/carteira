import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    ManyToOne,
  } from "typeorm";
  
  import { Carteira } from "./carteira";
import { Categoria } from "./categoria";
  import { Tipo } from "./tipo";
  import { TipoMovimentacao } from "./tipoMovimentacao";
import { Transacao } from "./transacao";

    enum Status {
        CONCLUIDA = 1,    
        PENDENTE = 0,
        ESTORNADA = -1
    }
  
  @Entity()
  export class Movimentacao {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        default: 0,
        type: 'decimal', 
        precision: 8, 
        scale: 2
    })
    valor!: number;
  
    @Column({
        default: 1
    })
    status!: Status;
    
    @Column({
        nullable: true
    })
    data_estorno!: Date;

    @ManyToOne(() => Carteira)
    @JoinColumn()
    carteira_entrada!: Carteira;
    
    @ManyToOne(() => Carteira)
    @JoinColumn()
    carteira_saida!: Carteira;
    
    @ManyToOne(() => Categoria)
    @JoinColumn()
    categoria!: Categoria;

    @ManyToOne(() => Tipo)
    @JoinColumn()
    tipo_pagamento!: Tipo;

    @ManyToOne(() => TipoMovimentacao)
    @JoinColumn()
    tipo_movimentacao!: TipoMovimentacao;
    
    @ManyToOne(() => Transacao)
    @JoinColumn()
    transacao!: Transacao;
    
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }