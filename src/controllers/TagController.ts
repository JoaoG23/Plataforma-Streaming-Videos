import { Request, Response } from "express";
import { MensagemRetorno } from "../utils/MensagemRetorno";
import tagServices from "../services/TagServices";

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

  public async listarVideosPorTag(req: Request, res: Response) {
    try {
      const { nome_tag } = req.params;

      const listar = await tagServices.listarVideosPorTag(nome_tag);
      res.status(200).json(listar);
    } catch (error) {
      console.info(error);
      res.status(400).json(error);
    }
  }

  public async listaTagPorId(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;

      const tagExistente = await tagServices.listarPorId(idEncontrado);

      if (!tagExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Essa tag não existe"));

      const listar = await tagServices.listarPorId(idEncontrado);
      res.status(200).json(listar);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async editarTag(req: Request, res: Response) {
    try {
      let idEncontrado = req.params.id;
      const tagExistente = await tagServices.listarPorId(idEncontrado);

      if (!tagExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Essa tag não existe"));

      await tagServices.editar(req.body, idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Editado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async deletarTag(req: Request, res: Response) {
    let idEncontrado = req.params.id;

    try {
      const tagExistente = await tagServices.listarPorId(idEncontrado);

      if (!tagExistente)
        return res
          .status(404)
          .json(new MensagemRetorno(false, "Essa tag não existe"));

      await tagServices.deletar(idEncontrado);
      res.status(200).json(new MensagemRetorno(true, "Deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new TagController();
