import { conn } from "../Config/Database";
import sequelize from "sequelize";

export const ConstructionSchema = conn.define("obra", {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    obra: {
        type: sequelize.STRING,
        allowNull: false
    },
    resumo:{
        type: sequelize.STRING,
        allowNull: false
    },
    status:{
        type: sequelize.ENUM("FINALIZADA", "EM ANDAMENTO")
    }
})