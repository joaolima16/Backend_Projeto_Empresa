import { Request,Response } from "express";
class TesteController{
    public async teste(req:Request, res: Response){
        return res.json({msg: "teste"});
    }
}
export default new TesteController();
