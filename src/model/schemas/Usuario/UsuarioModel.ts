import {  DataTypes , Model } from "sequelize";
import { db } from '../../database';
import { UsuarioAttributes, UsuarioInput } from "./interface/Usuario";

class Usuario extends Model<UsuarioAttributes, UsuarioInput> implements UsuarioAttributes {
  public id: number
  public usuario: string;
  public senha?: string;
  public email?: string;
  public is_admin?: boolean;

  // timestamps!
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
    }
  },

  {
    timestamps: true,
    freezeTableName: true,
    sequelize:db,
    tableName: "tb_usuarios",
  }
)

export default Usuario;
