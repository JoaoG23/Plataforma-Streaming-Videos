import { Optional } from "sequelize";

export interface TagAttributes {
    id?: number;
    titulo?: string;
  }

export interface TagInput extends Optional<TagAttributes, 'id'> {}
export interface TagOuput extends Required<TagAttributes> {}