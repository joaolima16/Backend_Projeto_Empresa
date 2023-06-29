import { Column, DataType, Table } from "sequelize-typescript";

import Sequelize, { Model } from "sequelize";

@Table({
    tableName: "obra"
})
export default class Obra extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;
}