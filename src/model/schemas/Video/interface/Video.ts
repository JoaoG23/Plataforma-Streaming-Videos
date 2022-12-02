import { Optional } from "sequelize";

export interface VideoAttributes {
    id?: number;
    titulo?: string;
    sobre?: string;
    url?: string;
    ano?: number;
    autor?: string;
  }

export interface VideoInput extends Optional<VideoAttributes, 'id'> {}
export interface VideoOuput extends Required<VideoAttributes> {}