import { Request, Response, response } from "express";
import { ConstructionSchema } from "../Models/ConstructionSchema";
import { ImageSchema } from "../Models/ImagesSchema";
import { SequelizeScopeError } from "sequelize";

class Controller {
  public async createSchema(req: Request, res: Response) {
 
    await Controller.RelationShipTables();
      await ConstructionSchema.sync({force:true});
      await ImageSchema.sync({force:true})
      .then((response)=>{return res.send("Tabelas criadas")})
      .catch((err)=>{return res.send(err)})
 
     
  }
  public static async RelationShipTables(){
    ConstructionSchema.hasMany(ImageSchema,{foreignKey:{allowNull:false}});
    ImageSchema.belongsTo(ConstructionSchema,{foreignKey:{allowNull:false}});
  }
}
export default new Controller();
