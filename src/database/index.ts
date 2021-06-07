import { createConnection } from "typeorm";
import config from "../config/ormconfig";

export default class{
    static async getConnection() {
        const connection = await createConnection(config);
    }
}