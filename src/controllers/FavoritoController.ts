import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import favoritoServices from "../services/FavoritoServices";

class FavoritoController {
  public async adicionarComoFavorito(req: Request, res: Response) {
    try {
      const { id_usuario, id_video } = req.body;

      const usuarioEncontrado = await favoritoServices.verificaSeExisteUsuario(
        id_usuario
      );
      if (!usuarioEncontrado) {
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse usuário não existe"));
      }

      const videoEncontrado = await favoritoServices.verificaSeExisteVideo(
        id_video
      );
      if (!videoEncontrado) {
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse video não existe"));
      }

      const criar = await favoritoServices.criar(req.body);
      res.status(201).json(criar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async listaTodosFavoritos(req: Request, res: Response) {
    try {
      const listar = await favoritoServices.listarTodos();
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }


  public async listaFavoritosPorNomeusuario(req: Request, res: Response) {
    try {
      const { nome_usuario } = req.params;

      const favoritoExistente = await favoritoServices.listaFavoritosUsuario(
        nome_usuario
      );

      if (!favoritoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Nao existe nenhum video relacionado ao favorito"));

      const listar = await favoritoServices.listaFavoritosUsuario(nome_usuario);
      res.status(200).json(listar);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  public async editarFavorito(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const favoritoExistente = await favoritoServices.listarPorId(
        idEncontrado
      );

      if (!favoritoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse Favorito não existe"));

      await favoritoServices.editar(req.body, idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async deletarFavorito(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    try {
      const favoritoExistente = await favoritoServices.listarPorId(
        idEncontrado
      );

      if (!favoritoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse Favorito não existe"));

      await favoritoServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new FavoritoController();
