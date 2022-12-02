import { Request, Response } from "express";
import UsuarioServices from "../model/services/UsuarioServices";
class UsuarioController {

  public usuarioServices:UsuarioServices;
  public async teste(req: Request, res: Response) {
    try {
      this.usuarioServices.listaTodos();
      res.status(200).json('Testando');
    } catch (error) {
      res
        .status(400)
        .json('Erro');
    }
  }
}

export default new UsuarioController();
