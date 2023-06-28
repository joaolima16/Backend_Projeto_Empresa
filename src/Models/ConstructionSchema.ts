import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";


type Construction = {
    obra: string,
    resumo: string,
    status: string
}

export default class ConstructionEntity extends Model<Construction>{
    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true,    
    //     primaryKey: true
    // })
    // id!: Number
    @Column({
        type: DataType.STRING,

    })
    obra!: string;
    @Column({
        type: DataType.STRING
    })
    resumo!: string;
    @Column({
        type: DataType.STRING
    })
    status!: string;
}