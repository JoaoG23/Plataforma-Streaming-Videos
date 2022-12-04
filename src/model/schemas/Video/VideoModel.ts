import {  DataTypes , Model } from "sequelize";
import { db } from '../../database'
import { VideoAttributes, VideoInput } from "./interface/Video";

class Video extends Model<VideoAttributes, VideoInput> implements VideoAttributes {
  public id: number
  public titulo?: string;
  public sobre?: string;
  public url?: string;
  public ano?: number;
  public autor?: string;

}

Video.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    sobre:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    url:{
      type:DataTypes.TEXT,
      allowNull: false,
    },
    ano:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tb_tags",
        key: "id",
      },
    },
    autor:{
      type:DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
    sequelize:db,
    tableName: "tb_videos",
  }
)


export default Video;
