import { Router } from "express";
import Controller from "../Controllers/Controller";
import MethodsController from "../Controllers/MethodsController";
import { upload } from "../Services/Multer";
const routes = Router();

routes.get("/",Controller.createSchema);
routes.get("/obra/:id", MethodsController.GetObras);
routes.post("/upload/:id", upload.array("file"),MethodsController.UploadImages);
routes.post("/obra",MethodsController.CreateConstruction);
export default routes;