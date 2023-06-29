import { Request, Response } from "express";
import sequelize from "../Config/Database";
class TesteController {
    public async createSchema(req: Request, res: Response) {
      await sequelize .sync({force:false})
      .then((response)=>{return res.send("Tabela criada")})
      .catch((err)=>{return res.send("Ocorreu um erro ao criar a tabela" +err)})
    }
}
export default new TesteController();
