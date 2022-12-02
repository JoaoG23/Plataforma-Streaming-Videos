import Video from "../../schemas/Video/VideoModel";

export interface VideoInterface {
  listarTodos()
  listarPorId(id: number)
  criar(dadosVideo:Video)
  deletar(id:number)
  editar(dadosVideo:object, id:number)
}
