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

  import { User } from "./user";
  
  @Entity()
  export class Carteira {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({
        default: 0,
        type: 'decimal', 
        precision: 8, 
        scale: 2
    })
    saldo!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }