import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

class Auth {
  public async user(req: Request, res: Response, next: NextFunction) {
    const secret: string = process.env.TOKEN_SECRET;

    const token = req.header("authorization-token");
    if (!token)
      return res
        .status(401)
        .send({ ok: false, msg: "Você ainda não está logado.." });
    try {
      await jwt.verify(token, secret);

      req.userData = await jwt.verify(token, secret);
      next();
    } catch (error) {
      res.status(401).json(error);
    }
  }

  public async admin(req: Request, res: Response, next: NextFunction) {
    if (req.userData.is_admin) {
      next();
    } else {
      res
        .status(401)
        .json({
          ok: false,
          msg: 'Acesso negado: Você não é administrador.',
        });
    }
  }
}

export default new Auth();
