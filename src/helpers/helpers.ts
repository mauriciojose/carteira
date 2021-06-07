import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

import * as dotenv from 'dotenv';
dotenv.config();

export default {
    async getHash(palavra: string){
        return await bcrypt.hash(palavra, 10);
    },
    async setToken(user: any){
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as Secret, {
            expiresIn: 21600
        });
        return token;
    },
    async compareToken(senha: any, compare: string){
        return await bcrypt.compare(senha, compare);
    }
};