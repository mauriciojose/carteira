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
  export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        length: 500
    })
    name!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }