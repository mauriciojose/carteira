import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
  } from "typeorm";
import { Carteira } from "./carteira";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        length: 900
    })
    name!: string;
  
    @Column({
        length: 500
    })
    email!: string;
    
    @Column({
        length: 11
    })
    fone!: string;
    
    @Column({
        length: 500
    })
    senha!: string;
    
    @Column({
        default: true
    })
    ativo!: boolean;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }