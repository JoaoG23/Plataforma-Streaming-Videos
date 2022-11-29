import { Router } from "express";
const routers = Router();
import usuarioRouters from "./usuarioRouters";

routers.use("/usuario", usuarioRouters);

export default routers;
