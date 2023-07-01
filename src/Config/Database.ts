import { Sequelize } from 'sequelize'
import path from 'path'
require("dotenv").config({path: path.resolve(__dirname, "../../.env")})

export const conn =  new Sequelize({
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: '',
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql"
})
