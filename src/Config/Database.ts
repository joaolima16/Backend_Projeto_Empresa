import { Sequelize } from "sequelize-typescript"
import path from 'path'
require("dotenv").config({path: path.resolve(__dirname, "../.env")})

const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: '',
    host: process.env.HOST,
    dialect: "mysql",
    port: 3306,
    logging:false,
    models: [__dirname, "/models"]
})
export default sequelize; 