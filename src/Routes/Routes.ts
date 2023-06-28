import { Router } from "express";
import TesteController from "../Controllers/TesteController";

const routes = Router();

routes.get("/",TesteController.teste);
export default routes;