import { Router } from "express";
import videoController from "../controllers/VideoController";
const routers = Router();

routers.post("/", videoController.criarVideo);
routers.get("/", videoController.listaTodosVideos);
routers.get("/:id", videoController.listaVideoPorId);
routers.put("/:id", videoController.editarVideo);
routers.delete("/:id", videoController.deletarVideo);

export default routers;
