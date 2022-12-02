import { Router } from "express";
const routers = Router();
import usuarioRouters from "./usuarioRouters";
import tagRouters from "./tagRouters";
import videosRouters from "./videosRouters";

routers.use("/usuario", usuarioRouters);
routers.use("/tags", tagRouters);
routers.use("/videos", videosRouters);

export default routers;
