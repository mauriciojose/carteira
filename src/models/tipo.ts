import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
  } from "typeorm";

  import { Carteira } from "./carteira";
  
  @Entity()
  export class Tipo {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        length: 70
    })
    name!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }