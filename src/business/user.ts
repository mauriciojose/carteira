import { UserRepository } from "../repository/user";
import { CarteiraRepository } from "../repository/carteira";
import { Service } from "../persistence/index";
import Helpers from "../helpers/helpers";
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
        user.params.id ? user.body.id = user.params.id : ()=>{};
        return await IService.get(user.body);
    },
    async login(user: any){
        await IService.setObject(UserRepository);   
        const { email, senha } = user.query;
        const userSearch = await IService.get({email});
        if (userSearch.length == 0) {
            return null;
        }
        let compare = await Helpers.compareToken(senha, userSearch.senha);
        if (compare) {
            let token = await Helpers.setToken(userSearch);
            userSearch.token = token;
            return userSearch;
        } else {
            return null;
        }
    },
    async create(user: any){
        await IService.setObject(UserRepository);
        await IService.setObjectTransaction();
        try {
            
            user.body.senha = await Helpers.getHash(user.body.senha);
            user.body.fone = "99999999999";
            let userExist = await this.get({params:{},body:{email: user.body.email}});
            if (userExist.length > 0) {
                return null;
            }
            await IService.startTransiction();
            const newUser = await IService.create(user.body);  
            let token = await Helpers.setToken(newUser);
            newUser.token = token;
            await IService.setObject(CarteiraRepository);
            await IService.create({
                user: newUser
            }); 
            await IService.commitTransaction();
            return newUser;

        } catch (error) {
            console.log(error);
            await IService.rollbackTransaction();
            return null;
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