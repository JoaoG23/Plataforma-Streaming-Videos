import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { TagAttributes, TagInput } from "./interface/Tag";

class Tag extends Model<TagAttributes, TagInput> implements TagAttributes {
  public id?: number;
  public titulo: string;
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
    sequelize: db,
    tableName: "tb_tags",
  }
);

export default Tag;
