import { Request,Response } from "express";
import ConstructionEntity from "../Models/ConstructionSchema";
class TesteController{
    public async createSchema(req:Request, res: Response){
        ConstructionEntity.sync({alter:true})
        .then((response)=>{return res.send("Tabela criada")})
        .catch((err)=>{return res.send("Erro ao criar as tabelas: " + err)})
    }
}
export default new TesteController();
