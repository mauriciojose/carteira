import { Connection, getConnection, getManager } from "typeorm";
import { User } from "../models";

export class Service{
    private objectRepository: any;
    private connection: any;
    private queryRunner: any;

    constructor(){
    }

    async setObject(ObjectRepository: any){
        this.connection = await getConnection();
        this.objectRepository = this.connection.getCustomRepository(ObjectRepository);
    }
    
    async setObjectTransaction(){
        this.queryRunner = this.connection.createQueryRunner();
    }

    async startTransiction(){
        this.queryRunner.connect();
        await this.queryRunner.startTransaction();
    }

    async commitTransaction(){
        try { 
            await this.queryRunner.commitTransaction(); 
        }catch (err) { 
            this.queryRunner.rollbackTransaction(); 
        }
    }

    async rollbackTransaction(){
        try { 
            await this.queryRunner.rollbackTransaction(); 
        }catch (err) { 
            // this.queryRunner.rollbackTransaction(); 
        }
    }

    async getAll(params: any){
        const users = await this.objectRepository.find(params);
        return users;
    }
    
    async raw(query: string, params: any){
        const entityManager = getManager();
        const users = await entityManager.query(query, params);
        return users;
    }

    async get(params: any){
        let users = await this.objectRepository.find(params);
        users = users.length == 1 ? users[0] : users;
        return users;
    }

    async create(objectCreate: any){
        const user = await this.objectRepository.save(objectCreate);
        return user;
    }

    async update(id: number, objectUpdate: any){
        const user = await this.objectRepository.update(id, objectUpdate);
        return user;
    }

    async delete(id: number){
        const user = await this.objectRepository.delete(id);
        return user;
    }
}