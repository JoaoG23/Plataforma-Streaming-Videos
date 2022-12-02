import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { TagsVideosAttributes , TagsVideosInput} from './interface/TagsVideo';

class TagsVideos extends Model<TagsVideosAttributes, TagsVideosInput> implements TagsVideosAttributes {
  public id?: number;
  public id_video?: number;
  public id_tags?: number;
}

TagsVideos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_video: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tb_videos",
        key: "id",
      },
    },
    id_tags: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tb_tags",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    sequelize: db,
    tableName: "tb_tags_videos",
  }
);

export default TagsVideos;
