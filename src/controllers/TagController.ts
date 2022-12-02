import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import tagServices from "../model/services/TagServices";


class TagController {


  public async criarTag(req: Request, res: Response) {
    try {
      const criar = await tagServices.criar(req.body);
      res.status(201).json(criar);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async listaTodasTags(req: Request, res: Response) {
    try {
      const listar = await tagServices.listarTodos();
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async listaTagPorId(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const listar = await tagServices.listarPorId(idEncontrado);
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async editarTag(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;
      await tagServices.editar(req.body, idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async deletarTag(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    try {
      await tagServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new TagController();
