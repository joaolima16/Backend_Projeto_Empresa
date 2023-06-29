import { Router } from "express";
import TesteController from "../Controllers/TesteController";

const routes = Router();

routes.get("/",TesteController.createSchema);
export default routes;