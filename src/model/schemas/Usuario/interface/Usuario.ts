import { Optional } from "sequelize";

export interface UsuarioAttributes {
    id?: number;
    usuario?: string;
    senha?: string;
    email?:string;
    is_admin?:boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface UsuarioInput extends Optional<UsuarioAttributes, 'id'> {}
export interface UsuarioOuput extends Required<UsuarioAttributes> {}