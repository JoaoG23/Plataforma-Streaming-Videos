import { Model } from "sequelize-typescript";
import Tag from "../schemas/Tag/TagModel";
import { TagInterface } from "./interfaces-services/TagInterface";

class TagServices implements TagInterface {
  listarVideosPorTag(nomeTag: string) {
    throw new Error("Method not implemented.");
  }
  criar(dadosTag: Tag) {
    const tag = Tag.create(dadosTag);
    return tag;
  }
  listarTodos() {
    return Tag.findAll();
  }
  listarPorId(id: number) {
    return Tag.findByPk(id);
  }
  deletar(id: number) {
    return Tag.destroy({
      where: {
        id: id,
      },
      force: true,
    });
  }
  
  editar(dadosEditar: object, id: number) {
    return Tag.update(dadosEditar as object, {
      returning: true,
      where: { id: id },
    });
  }
}

export default new TagServices();
