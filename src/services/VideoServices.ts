import Tag from "../model/schemas/Tag/TagModel";
import { VideoInput } from "../model/schemas/Video/interface/Video";
import Video from "../model/schemas/Video/VideoModel";
import validacao from "../utils/Validacao";

class VideoServices {
  async verificaSeExisteTag(id: number) {
    return await validacao.validarSeExistePropriedade(
      { id: id },
      Tag
    );
  }
  criar(dadosVideo: VideoInput) {
    const video = Video.create(dadosVideo);
    return video;
  }
  listarTodos() {
    return Video.findAll();
  }
  listarPorId(id: number) {
    return Video.findByPk(id);
  }
  deletar(id: number) {
    return Video.destroy({
      where: {
        id: id,
      },
      force: true,
    });
  }
  editar(dadosEditar: object, id: number) {
    return Video.update(dadosEditar as object, {
      returning: true,
      where: { id: id },
    });
  }
}

export default new VideoServices();
