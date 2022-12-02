import Tag from "../../schemas/Tag/TagModel";

export interface TagInterface {
  listarTodos();
  listarPorId(id: number)
  listarVideosPorTag(nomeTag: string)
  criar(dadosTag:Tag)
  deletar(id:number)
  editar(dadosTag:object, id:number)
}
