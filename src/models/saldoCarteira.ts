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

  import { Tipo, Carteira } from "./";
  
  @Entity()
  export class SaldoCarteira {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        default: 0
    })
    saldo!: number;

    @OneToOne(() => Carteira)
    @JoinColumn()
    carteira!: Carteira;

    @OneToOne(() => Tipo)
    @JoinColumn()
    tipo!: Tipo;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }