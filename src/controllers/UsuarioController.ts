import { Request, Response } from "express";


class UsuarioController {
  public async teste(req: Request, res: Response) {
    try {
      res.status(200).json('Testando');
    } catch (error) {
      res
        .status(400)
        .json('Erro');
    }
  }
}

export default new UsuarioController();
