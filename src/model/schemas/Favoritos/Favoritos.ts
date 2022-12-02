import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { FavoritosAttributes, FavoritosInput } from "./interface/Favoritos";

class Favoritos extends Model<FavoritosAttributes, FavoritosInput> implements FavoritosAttributes {
  public id: number;
  public id_usuario?: number;
  public id_video?: number;
}

Favoritos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: "tb_usuarios",
        key: "id",
      },
    },
    id_video: {
      type: DataTypes.INTEGER,
      references: {
        model: "tb_videos",
        key: "id",
      },
    }
  },

  {
    timestamps: false,
    freezeTableName: true,
    sequelize: db,
    tableName: "tb_favoritos",
  }
);

export default Favoritos;
