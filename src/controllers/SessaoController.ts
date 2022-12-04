import { Request, Response } from "express";
import sessaoServices from "../services/SessaoServices";
import { MensagemRetorno } from "../utils/MensagemRetorno";

class SessaoController {
  public async registarUsuario(req: Request, res: Response) {
    try {
      const { usuario, senha, email, is_admin } = req.body;
      const senhaHash = sessaoServices.criptografar(senha);
      const dadosDeRegistro = {
        usuario: usuario,
        senha: senhaHash,
        email: email,
        is_admin: is_admin,
      };
      const usuarioEncontrado =
        await sessaoServices.validarSeExisteUsuarioSistema(usuario);
      const emailEncontrado = await sessaoServices.validarSeExisteEmailSistema(
        email
      );

      if (usuarioEncontrado) {
        return res
          .status(409)
          .json(new MensagemRetorno(true, "Esse nome de usuario já existe"));
      }
      if (emailEncontrado) {
        return res
          .status(409)
          .json(new MensagemRetorno(true, "Esse email já existe"));
      }

      const dados = await sessaoServices.registrar(dadosDeRegistro);

      res.status(201).json(dados);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { usuario, senha } = req.body;

      const usuarioEncontrado =
        await sessaoServices.validarSeExisteUsuarioSistema(usuario);

      if (!usuarioEncontrado) {
        return res
          .status(400)
          .json(new MensagemRetorno(false, "Esse usuario não existe"));
      }

      const isSenhaValida = await sessaoServices.validarSeSenhaCorreta(
        senha,
        usuario
      );

      if (!isSenhaValida) {
        return res
          .status(400)
          .json(new MensagemRetorno(false, "Senha ou usuário incorretos"));
      }

      const token = await sessaoServices.inserirTokenSessao({
        id: usuarioEncontrado.id,
        is_admin: usuarioEncontrado.is_admin,
      });

      res.header("authorization-token", token);
      res
        .status(201)
        .json({
          usuario: usuario,
          is_admin: usuarioEncontrado.is_admin,
          msg: `Usuário ${usuario} logado com sucesso`,
        });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new SessaoController();
