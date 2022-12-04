import { QueryTypes } from "sequelize";
import { db } from "../model/database";
class ListadorJoinTabelas {
  async listaVideosTagsPorNome(nomeTag: string): Promise<object> {
    const datas = await db.query(
      `SELECT 
        tb_videos.id,
        tb_videos.titulo,
        tb_videos.sobre,
        tb_videos.url,
        tb_videos.ano,
        tb_videos.autor
        FROM tb_videos JOIN tb_tags ON tb_videos.tag_id = tb_tags.id WHERE tb_tags.titulo = ?;`,
      {
        replacements: [nomeTag],
        type: QueryTypes.SELECT,
      }
    );
    return datas.length > 0 ? datas : null;
  }

   async listaFavoritosVideosDoUsuario(
    nomeUsuario: string
  ): Promise<object> {
    const datas = await db.query(
      `SELECT
      tb_usuarios.usuario,
      tb_favoritos.id_usuario,
      tb_videos.id,
      tb_videos.titulo, 
      tb_videos.sobre,
      tb_videos.url,
      tb_videos.ano,
      tb_videos.tag_id,
      tb_videos.autor
              FROM tb_usuarios 
              LEFT JOIN tb_favoritos ON tb_favoritos.id_usuario = tb_usuarios.id
              LEFT JOIN tb_videos ON tb_favoritos.id_video = tb_videos.id
              WHERE tb_usuarios.usuario = ?`,
      {
        replacements: [nomeUsuario],
        type: QueryTypes.SELECT,
      }
    );
    return datas.length > 0 ? datas : null;
  }
}

export default new ListadorJoinTabelas();
