import { Router } from "express";
const routers = Router();

// rotas
import tagRouters from "./tagRouters";
import videosRouters from "./videosRouters";
import sessaoRouters from "./sessaoRouters";
import usuariosRouters from "./usuariosRouters";
import favoritosRouters from "./favoritosRouters";

// autenticacao
import auth from "./Auth";

routers.use("/tags", auth.user, auth.admin, tagRouters);
routers.use("/usuarios", auth.user, usuariosRouters);
routers.use("/favoritos", favoritosRouters);
routers.use("/videos", auth.user, videosRouters);
routers.use("/auth", sessaoRouters);

export default routers;
