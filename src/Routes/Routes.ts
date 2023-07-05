import { Router } from "express";
import Controller from "../Controllers/Controller";
import MethodsController from "../Controllers/MethodsController";
import { upload } from "../Services/Multer";
const routes = Router();

routes.get("/",Controller.createSchema);
routes.get("/obra", MethodsController.GetObras);
routes.post("/upload/:id", upload.single("file"),MethodsController.UploadImages);
routes.get("/obra/images/:id", MethodsController.GetImages);
routes.post("/obra",MethodsController.CreateConstruction);
export default routes;