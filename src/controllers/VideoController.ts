import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import videoServices from "../model/services/VideoServices";


class VideoController {
  public async criarVideo(req: Request, res: Response) {
    try {
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

      const listar = await videoServices.listarPorId(idEncontrado);
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async editarVideo(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;
      await videoServices.editar(req.body, idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async deletarVideo(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    try {
      await videoServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new VideoController();
