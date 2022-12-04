import { Router } from "express";
import favoritoController from "../controllers/FavoritoController";
const routers = Router();


routers.post("/", favoritoController.adicionarComoFavorito);


routers.get("/videos/:nome_usuario", favoritoController.listaFavoritosPorNomeusuario);
routers.get("/", favoritoController.listaTodosFavoritos);


routers.put("/:id", favoritoController.editarFavorito);

routers.delete("/:id", favoritoController.deletarFavorito);

export default routers;
