import { Router } from "express";
import usuarioController from "../controllers/UsuarioController";
const routers = Router();

routers.get("/", usuarioController.teste);
// routers.get("/:id", usuarioController.listOneForId);

export default routers;
