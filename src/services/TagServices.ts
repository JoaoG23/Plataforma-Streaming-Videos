import listadorJoinTabelas from "../utils/ListadorJoinTabelas";
import Tag from "../model/schemas/Tag/TagModel";

class TagServices  {
  listarVideosPorTag(nomeTag: string) {

    return listadorJoinTabelas.listaVideosTagsPorNome(nomeTag)
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
