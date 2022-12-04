import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import usuarioServices from "../services/UsuarioServices";

class UsuarioController {
  public async listaTodosUsuario(req: Request, res: Response) {
    try {
      const listar = await usuarioServices.listarTodos();
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  public async listaUsuarioPeloId(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const usuarioExistente = await usuarioServices.listarPorId(idEncontrado);

      if (!usuarioExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse usuario não existe"));

      const listar = await usuarioServices.listarPorId(idEncontrado);
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  public async editarUsuario(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const usuarioExistente = await usuarioServices.listarPorId(id);

      if (!usuarioExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse usuario não existe"));

      const { usuario, senha, email, is_admin } = req.body;

      const senhaHash = usuarioServices.criptografar(senha);
      const dadosDeRegistro = {
        usuario: usuario,
        senha: senhaHash,
        email: email,
        is_admin: is_admin,
      };

      await usuarioServices.editar(dadosDeRegistro, id);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  public async deletarUsuario(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    const usuarioExistente = await usuarioServices.listarPorId(idEncontrado);

    if (!usuarioExistente)
      return res
        .status(404)
        .json(new MensagemRetorno(false, "Esse usuario não existe"));


    try {
      await usuarioServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new UsuarioController();
