import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import videoServices from "../services/VideoServices";

class VideoController {
  public async criarVideo(req: Request, res: Response) {
    try {

      const { tag_id } = req.body;

      const tagExistente = await videoServices.verificaSeExisteTag(tag_id);

      if (!tagExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Essa tag não existe"));

      const criar = await videoServices.criar(req.body);
      res.status(201).json(criar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async listaTodosVideos(req: Request, res: Response) {
    try {
      const listar = await videoServices.listarTodos();
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async listaVideoPorId(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const videoExistente = await videoServices.listarPorId(idEncontrado);

      if (!videoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse video não existe"));

      const listar = await videoServices.listarPorId(idEncontrado);
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async editarVideo(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const videoExistente = await videoServices.listarPorId(idEncontrado);

      if (!videoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse video não existe"));

      await videoServices.editar(req.body, idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async deletarVideo(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    try {

      const videoExistente = await videoServices.listarPorId(idEncontrado);

      if (!videoExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Esse video não existe"));

      await videoServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new VideoController();
