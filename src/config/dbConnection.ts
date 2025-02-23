import { Sequelize } from "sequelize"
import "dotenv/config"

const db = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as any
    }
)
export default db