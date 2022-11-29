import { DataType,Model, Optional } from "sequelize";

export interface UsuarioAttributes {
    id?: number;
    usuario?: string;
    senha?: string;
    email?:string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface UsuarioInput extends Optional<UsuarioAttributes, 'id'> {}
export interface UsuarioOuput extends Required<UsuarioAttributes> {}