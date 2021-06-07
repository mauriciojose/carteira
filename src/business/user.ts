import { UserRepository } from "../repository/user";
import { CarteiraRepository } from "../repository/carteira";
import { Service } from "../persistence/index";
// import { Carteira } from "./carteira";

const IService = new Service();

export default {
    async getAll(user: any){
        await IService.setObject(UserRepository);
        return await IService.getAll({});
    },
    async getUserSimple(user: any){
        await IService.setObject(UserRepository);

        return await IService.raw(`SELECT u.id, u.name, ca.id as carteira FROM "user" as u INNER JOIN "carteira" as ca ON(u.id = ca."userId") WHERE u.id <> $1`, [`${user.params.id}`]);
    },
    async get(user: any){
        await IService.setObject(UserRepository);
        user.body.id = user.params.id ? user.params.id : undefined; 
        return await IService.get(user.body);
    },
    async create(user: any){
        await IService.setObject(UserRepository);
        await IService.setObjectTransaction();
        try {
            await IService.startTransiction();
            const newUser = await IService.create(user.body);  
            await IService.setObject(CarteiraRepository);
            await IService.create({
                user: newUser
            }); 
            await IService.commitTransaction();
            return newUser;

        } catch (error) {
            await IService.rollbackTransaction();
            return {};
        }
    },
    async update(user: any){
        await IService.setObject(UserRepository);
        user.body.id = user.params.id ? user.params.id : undefined; 
        return await IService.update(user.body.id , user.body);
    },
    async delete(user: any){
        await IService.setObject(UserRepository);
        user.body.id = user.params.id ? user.params.id : undefined; 
        return await IService.delete(user.body.id);
    }
}