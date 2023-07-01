import { Router } from "express";
import TesteController from "../Controllers/Controller";

const routes = Router();

routes.get("/",TesteController.createSchema);
export default routes;