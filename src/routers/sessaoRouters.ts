import { Router } from "express";
const routers = Router();
import sessaoController from "../controllers/SessaoController";

routers.post("/registrar", sessaoController.registarUsuario);
routers.post("/login", sessaoController.login);

export default routers;
