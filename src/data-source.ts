import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "qkzpbeml",
    password: "Dl5UV1ERsw73KRf_pRwsLgbHCmKcuQEo",
    database: "qkzpbeml",
    synchronize: true,
    logging: false,
    entities: [Photo],
    migrations: [],
    subscribers: [],
})
