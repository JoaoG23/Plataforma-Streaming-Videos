import { Model } from "sequelize-typescript";
import Tag from "../schemas/Tag/TagModel";
import Video from "../schemas/Video/VideoModel";
import { VideoInterface } from "./interfaces-services/VideoInterface";

class VideoServices implements VideoInterface {
  criar(dadosVideo: Video) {
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
