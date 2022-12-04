import Favoritos from "../model/schemas/Favoritos/Favoritos";
import { FavoritosInput } from "../model/schemas/Favoritos/interface/Favoritos";
import Usuario from "../model/schemas/Usuario/UsuarioModel";
import Video from "../model/schemas/Video/VideoModel";
import validacao from "../utils/Validacao";
import listadorJoinTabelas from "../utils/ListadorJoinTabelas";

class FavoritoServices {
  async verificaSeExisteUsuario(id: number) {
    return await validacao.validarSeExistePropriedade({ id: id }, Usuario);
  }
  async verificaSeExisteVideo(id: number) {
    return await validacao.validarSeExistePropriedade({ id: id }, Video);
  }

  async listaFavoritosUsuario(usuario: string) {
    return await listadorJoinTabelas.listaFavoritosVideosDoUsuario(usuario);
  }

  criar(dadosFavoritos: FavoritosInput) {
    const video = Favoritos.create(dadosFavoritos);
    return video;
  }
  listarTodos() {
    return Favoritos.findAll();
  }
  listarPorId(id: number) {
    return Favoritos.findByPk(id);
  }
  deletar(id: number) {
    return Favoritos.destroy({
      where: {
        id: id,
      },
      force: true,
    });
  }
  editar(dadosEditar: object, id: number) {
    return Favoritos.update(dadosEditar as object, {
      returning: true,
      where: { id: id },
    });
  }
}

export default new FavoritoServices();
