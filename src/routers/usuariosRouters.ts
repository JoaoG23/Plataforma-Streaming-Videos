import { Router } from "express";
import usuarioController from "../controllers/UsuarioController";
const routers = Router();

routers.get("/", usuarioController.listaTodosUsuario);
routers.get("/:id", usuarioController.listaUsuarioPeloId);
routers.put("/:id", usuarioController.editarUsuario);
routers.delete("/:id", usuarioController.deletarUsuario);

export default routers;
