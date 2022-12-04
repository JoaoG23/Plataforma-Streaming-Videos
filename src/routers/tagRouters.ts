import { Router } from "express";
import tagController from "../controllers/TagController";
const routers = Router();

routers.post("/", tagController.criarTag);
routers.get("/", tagController.listaTodasTags);
routers.get("/:nome_tag/videos", tagController.listarVideosPorTag);
routers.get("/:id", tagController.listaTagPorId);
routers.put("/:id", tagController.editarTag);
routers.delete("/:id", tagController.deletarTag);

export default routers;
