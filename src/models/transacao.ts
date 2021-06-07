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
  

  enum Fator {
    ENTRADA = 1,
    AMBAS = 0,
    SAIDA = -1
  }

  @Entity()
  export class Transacao {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 30
    })
    name!: string;

    @Column({
        default: 1
    })
    fator!: Fator;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }